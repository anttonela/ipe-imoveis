<?php

namespace app\Models\Home;

use app\Models\Crud\Functions\Update;
use app\Models\Crud\Utilizadores\Banco;

class Entrar extends Banco
{
    private string $email;
    private string $senha;
    private string $url;
    private array  $arMensagem = [];

    private function setEntrar(): void
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);

            if ($data === null) {
                http_response_code(400);
                print json_encode(array("error" => "Dados inválidos"));
                return;
            }
        }

        $this->email = $data['email'];
        $this->senha = $data['senha'];
        $this->url = $data['url'];
    }

    private function verificandoEmailValido(): void
    {
        $this->setEntrar();

        if (filter_var($this->email, FILTER_VALIDATE_EMAIL) == false) {
            $this->arMensagem[] = 'E-mail inválido';
            $this->email = null;
            return;
        }
    }

    private function identificandoChave(): array
    {
        $this->setEntrar();

        $posicao = strpos($this->url, '/login/chave/');
        $urlChave = substr($this->url, $posicao + strlen('/login/chave/'));

        $table = new Update("usuario");

        $arDados = [
            "SET" => "situacao = 2, chave = ''",
            "WHERE" => "chave = '{$urlChave}'",
        ];

        $resultado = $this->executarFetchAll($table->condicoes($arDados));
        return $resultado;
    }

    private function verificandoSeCadastroExiste(): void
    {
        $this->setEntrar();
        $this->identificandoChave();

        session_start();

        $arSelect = $this->executarFetchAll("SELECT senha FROM usuario WHERE email = '{$this->email}' and situacao = 2");

        if (!empty($arSelect) && $arSelect[0]['senha'] === $this->senha) {
            $_SESSION['usuario'] = true;
            print json_encode("aqui em USUARIO");

            if ($this->email === "arantesimovel@gmail.com") {
                $_SESSION['administrador'] = true;
                print json_encode("aqui em ADMINISTRADOR");
            }

            // http_response_code(200);
            // print json_encode(["message" => "Autenticado", "admin" => $_SESSION['administrador']]);
        }
    }


    public function imprimindoAviso(): void
    {
        $this->verificandoEmailValido();
        $this->verificandoSeCadastroExiste();

        foreach ($this->arMensagem as $mensagem) {
            print json_encode($mensagem);
        }
    }
}

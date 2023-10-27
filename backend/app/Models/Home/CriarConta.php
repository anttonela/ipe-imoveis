<?php

namespace app\Models\Home;

use app\Models\Crud\Functions\Select;
use app\Models\Crud\Utilizadores\Banco;
use app\Models\Crud\Utilizadores\Tabela;

class CriarConta extends Banco
{
    private $nome;
    private $sobrenome;
    private $email;
    private $senha;
    public $arMensagem;

    private function setCriarConta(): void
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);

            if ($data === null) {
                http_response_code(400);
                echo json_encode(array("error" => "Dados inválidos"));
                return;
            }
        }

        $this->nome = $data['nome'];
        $this->sobrenome = $data['sobrenome'];
        $this->email = $data['email'];
        $this->senha = $data['senha'];
    }

    public function verificandoEmailValido(): void
    {
        $this->setCriarConta();

        if (filter_var($this->email, FILTER_VALIDATE_EMAIL) == false) {
            $this->arMensagem[] = 'E-mail inválido';
            $this->email = null;
            return;
        }
    }

    public function verificandoSeCadastroJaExiste(): void
    {
        $this->setCriarConta();

        $table = new Select("usuario");
        $arTable = [
            "COLUMN" => "email",
            "WHERE" => "email = '{$this->email}'",
        ];

        $arSelectEmail = $this->executarFetchAll($table->condicoes($arTable));

        if ($arSelectEmail != null) {
            $this->arMensagem[] = 'E-mail já cadastrado';
            return;
        }
    }

    public function validandoSenha(): void
    {
        $this->setCriarConta();

        strlen($this->senha) < 6 ? $this->arMensagem[] = 'Senha menor que 6 digitos' : null;
    }

    public function registrandoResposta(): void
    {
        $this->setCriarConta();
        $this->verificandoEmailValido();
        $this->verificandoSeCadastroJaExiste();
        $this->validandoSenha();

        if (!isset($this->arMensagem[0])) {
            $table = new Tabela("usuario");

            $arTable = [
                "nome" => "{$this->nome}",
                "sobrenome" => "{$this->sobrenome}",
                "email" => "{$this->email}",
                "senha" => "{$this->senha}"
            ];

            $table->salvarInserir($arTable);
            $this->arMensagem = 'Conta criada com sucesso!';
            return;
        }

        print json_encode($this->arMensagem);
    }
}

<?php

namespace app\Models\Home\Login;

use app\Models\Crud\Functions\Select;
use app\Models\Crud\Utilizadores\Banco;

class Entrar extends Banco
{
    public $email;
    public $senha;
    public $arMensagem;

    public function setEntrar(): void
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


        $this->email = $data['email'];
        $this->senha = $data['senha'];
    }

    public function verificandoEmailValido(): void
    {
        $this->setEntrar();

        if (filter_var($this->email, FILTER_VALIDATE_EMAIL) == false) {
            $this->arMensagem[] = 'E-mail inválido';
            $this->email = null;
            return;
        }
    }

    public function verificandoSeCadastroExiste(): void
    {
        $this->setEntrar();

        $table = new Select("usuario");
        $arTable = [
            "COLUMN" => "senha",
            "WHERE" => "email = '{$this->email}'",
        ];
        $arSelectSenha = $this->executarFetchAll($table->condicoes($arTable));

        $arSelectSenha[0]['senha'] === $this->senha ? $this->arMensagem[] = 'Você conseguiu entrar na sua conta com sucesso!': 
        $this->arMensagem[] = 'Autenticação falhou, tente novamente';
    }

    public function imprimindoAviso(): void
    {
        $this->verificandoEmailValido();
        $this->verificandoSeCadastroExiste();

        foreach($this->arMensagem as $mensagem) {
            print $mensagem;
        }
    }
}
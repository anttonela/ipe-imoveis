<?php

namespace app\Views\Login\Condicoes;

use app\Models\Crud\Functions\Select;
use app\Models\Crud\Utilizadores\Banco;
use app\Models\Crud\Utilizadores\Tabela;

class CriarConta extends Banco
{
    public $nome;
    public $sobrenome;
    public $email;
    public $senha;
    public $arMensagem;

    public function setCriarConta(): void
    {
        $this->nome = $_POST['nome'];
        $this->sobrenome = $_POST['sobrenome'];
        $this->email = $_POST['email'];
        $this->senha = $_POST['senha'];
    }

    public function verificandoRespostas(): void
    {
        $this->setCriarConta();

        if (empty($this->nome) || empty($this->sobrenome) || empty($this->email) || empty($this->senha)) {
            $this->arMensagem[] = '<br>Cadastro incompleto';
            return;
        }
    }

    public function verificandoEmailValido(): void
    {
        $this->setCriarConta();

        if (filter_var($this->email, FILTER_VALIDATE_EMAIL) == false) {
            $this->arMensagem[] = '<br>E-mail inválido';
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
            "WHERE" => "email = '{$_POST['email']}'",
        ];

        $arSelectEmail = $this->executarFetchAll($table->condicoes($arTable));

        if ($arSelectEmail != null) {
            $this->arMensagem[] = '<br>E-mail já cadastrado';
            return;
        }
    }

    public function validandoSenha(): void
    {
        $this->setCriarConta();

        strlen($this->senha) < 6 ? $this->arMensagem[] = "<br>Senha menor que 6 digitos" : null;
    }

    public function registrandoResposta(): void
    {
        $this->setCriarConta();
        $this->verificandoRespostas();
        $this->verificandoEmailValido();
        $this->verificandoSeCadastroJaExiste();
        $this->validandoSenha();

        if (!isset($this->arMensagem[0])) {
            $table = new Tabela("login");

            $arTable = [
                "nome" => "{$this->nome}",
                "sobrenome" => "{$this->sobrenome}",
                "email" => "{$this->email}",
                "senha" => "{$this->senha}"
            ];

            $table->salvarInserir($arTable);            
            $this->arMensagem[] = "<br>Conta criada com sucesso!";
            return;
        }
 
        $this->arMensagem[] = "<br><br>Erro ao tentar criar conta";
    }

    public function imprimindoAviso(): void
    {
        $this->setCriarConta();
        $this->verificandoRespostas();
        $this->verificandoEmailValido();
        $this->registrandoResposta();
        
        foreach($this->arMensagem as $mensagem) {
            print $mensagem;
        }
    }
}
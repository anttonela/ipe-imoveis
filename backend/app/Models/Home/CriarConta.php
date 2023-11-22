<?php

namespace app\Models\Home;

use app\Models\Crud\Functions\Select;
use app\Models\Crud\Utilizadores\Banco;
use app\Models\Crud\Utilizadores\Tabela;
use app\View\TemplateEmail;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

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
                print json_encode(array("error" => "Dados inválidos"));
                return;
            }
        }

        $this->nome = $data['nome'];
        $this->sobrenome = $data['sobrenome'];
        $this->email = $data['email'];
        $this->senha = $data['senha'];
    }

    private function verificandoEmailValido(): void
    {
        $this->setCriarConta();

        if (filter_var($this->email, FILTER_VALIDATE_EMAIL) == false) {
            $this->arMensagem[] = 'E-mail inválido';
            $this->email = null;
            return;
        }
    }

    private function verificandoSeCadastroJaExiste(): void
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

    private function validandoSenha(): void
    {
        $this->setCriarConta();

        strlen($this->senha) < 6 ? $this->arMensagem[] = 'Senha menor que 6 digitos' : null;
    }

    public function confirmandoEmail(): void
    {
        $this->setCriarConta();
        $this->verificandoEmailValido();
        $this->verificandoSeCadastroJaExiste();
        $this->validandoSenha();

        if (!isset($this->arMensagem[0])) {

            $mail = new PHPMailer(true);
            $conteudo = new TemplateEmail();

            try {
                $mail->SMTPDebug = SMTP::DEBUG_SERVER;
                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com';
                $mail->SMTPAuth = true;
                $mail->Username = 'arantesimovel@gmail.com';
                $mail->Password = 'qfsuhumwvlfxincx';
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
                $mail->Port = 465;

                $mail->setFrom('arantesimovel@gmail.com', 'Arantes Imoveis'); // quem vai enviar
                $mail->addAddress($this->email, $this->nome); // quem vai receber este email
                $mail->addReplyTo('arantesimovel@gmail.com', 'Information');
                $mail->isHTML(true);
                $mail->Subject = 'Confirmacao de conta';
                $body = $conteudo->conteudoDoEmail();
                $mail->Body = $body;

                $mail->send();
            } catch (Exception $e) {
                print "Error: {$mail->ErrorInfo}";
            }

            return;
        }

        print_r(current($this->arMensagem));
    }

    public function registrandoConta(): void
    {
        $this->setCriarConta();
        
        $table = new Tabela("usuario");

        $arTable = [
            "nome" => "{$this->nome}",
            "sobrenome" => "{$this->sobrenome}",
            "email" => "{$this->email}",
            "senha" => "{$this->senha}",
        ];

        $table->salvarInserir($arTable);
        $this->arMensagem[] = 'Conta criada com sucesso!';
    }
}

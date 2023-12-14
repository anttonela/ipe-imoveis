<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Banco;
use app\Models\Crud\Utilizadores\Tabela;
use app\View\EmailConfirmarConta;
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
    private $url;

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
        $this->url = $data['url'];
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

    private function verificandoNome(): void
    {
        $this->setCriarConta();

        if (filter_var($this->nome, FILTER_SANITIZE_NUMBER_INT) === true) {
            $this->arMensagem[] = "Nome inválido";
            $this->nome = null;
            return;
        }

        if (filter_var($this->sobrenome, FILTER_SANITIZE_NUMBER_INT) === true) {
            $this->arMensagem[] = "Sobrenome inválido";
            $this->sobrenome = null;
            return;
        }
    }

    private function verificandoSeCadastroJaExiste(): void
    {
        $this->setCriarConta();

        $arSelect = $this->executarFetchAll("SELECT FROM usuario WHERE email = '{$this->email}' and situacao = 2");

        if ($arSelect != null) {
            $this->arMensagem[] = 'E-mail já cadastrado';
            return;
        }
    }

    private function validandoSenha(): void
    {
        $this->setCriarConta();

        strlen($this->senha) < 6 ? $this->arMensagem[] = 'Senha menor que 6 digitos' : null;
    }

    public function enviandoEmail()
    {
        $this->setCriarConta();
        $this->verificandoEmailValido();
        $this->verificandoSeCadastroJaExiste();
        $this->verificandoNome();
        $this->validandoSenha();

        if (!isset($this->arMensagem[0])) {

            $mail = new PHPMailer(true);
            $conteudo = new EmailConfirmarConta();
            $table = new Tabela("usuario");

            for ($i = 0; $i < 15; $i++) {
                $chave = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@&'[rand(
                    0,
                    strlen('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@&') - 1
                )];
            }

            $arTable = [
                "nome" => "{$this->nome}",
                "sobrenome" => "{$this->sobrenome}",
                "email" => "{$this->email}",
                "senha" => "{$this->senha}",
                "chave" => "{$chave}",
                "situacao" => "1",
            ];

            $table->salvarInserir($arTable);

            try {
                $mail->SMTPDebug = SMTP::DEBUG_SERVER;
                $mail->CharSet = "UTF-8";
                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com';
                $mail->SMTPAuth = true;
                $mail->Username = 'arantesimovel@gmail.com';
                $mail->Password = 'skwagvbuqdzacsep';
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
                $mail->Port = 465;

                $mail->setFrom('arantesimovel@gmail.com', 'Arantes Imoveis');
                $mail->addAddress($this->email, $this->nome);
                $mail->addReplyTo('arantesimovel@gmail.com', 'Information');
                $mail->isHTML(true);
                $mail->Subject = 'Confirmacao de conta';
                $body = $conteudo->conteudoDoEmail($chave);
                $mail->Body = $body;

                $mail->send();
            } catch (Exception $e) {
                print "Error: {$mail->ErrorInfo}";
            }
        }

        print_r(current($this->arMensagem));
    }
}

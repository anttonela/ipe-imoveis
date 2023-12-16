<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Banco;
use app\View\EmailRecuperarSenha;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class RecuperarSenha extends Banco
{
    private string $email;

    public function enviandoEmail(): void
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

        if (filter_var($this->email, FILTER_VALIDATE_EMAIL) === false) {
            json_encode("Email inválido");
            return;
        }

        if (!empty($this->executarFetchAll("SELECT * FROM usuario WHERE email = '" . $this->email . "'"))) {
            $mail = new PHPMailer(true);
            $conteudo = new EmailRecuperarSenha();

            $chave = '';

            for ($i = 0; $i < 6; $i++) {
                $chave .= '1234567890'[rand(0, strlen('1234567890') - 1)];
            }

            $this->executarFetchAll("UPDATE usuario SET chave = '{$chave}' WHERE email = '" . $data['email'] . "' AND situacao = 2");
            $this->executarFetchAll("UPDATE usuario SET horario = '" . $data['horario'] . "' WHERE email = '" . $data['email'] . "'");

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
                $mail->addAddress($this->email, 'usuário');
                $mail->addReplyTo('arantesimovel@gmail.com', 'Information');
                $mail->isHTML(true);
                $mail->Subject = 'Confirmação de recuperação de senha';
                $body = $conteudo->conteudoDoEmail($chave);
                $mail->Body = $body;

                $mail->send();
            } catch (Exception $e) {
                print "Error: {$mail->ErrorInfo}";
            }

            print json_encode("Email enviado");
            return;
        }

        print json_encode("Email não cadastrado");
    }

    public function confirmandoSeCodigoEstaCorreto()
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

        $codigo = $data['codigo'];
        $horario = $data['horario'];
        $horarioExpiracao = $data['horarioDeExpiracao'];
        $this->email = $data['email'];

        $arSelect = $this->executarFetchAll("SELECT * FROM usuario WHERE email = '{$this->email}' and chave = '{$codigo}'");

        if (!empty($arSelect)) {
            print json_encode("Chave está correta");
            return;
        }

        print json_encode("Chave incorreta, {$horario} | {$horarioExpiracao}");
    }

    public function salvandoNovaSenha()
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

        if ($data['novaSenhaInput'] === $data['confirmarNovaSenha']) {
            $alterar =
                "
            UPDATE usuario
            SET
            senha = '" . $data['confirmarNovaSenha'] . "'
            WHERE email = '" . $data['email'] . "'
        ";

            $this->executarFetchAll($alterar);
            return;
        }

        print json_encode("Incorreto");
    }
}

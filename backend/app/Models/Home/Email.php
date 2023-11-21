<?php

namespace app\Models\Home;

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class Email
{
    private function corpoDoEmail(): string
    {
        $conteudo = "oi";
        return $conteudo;
    }

    public function enviar(): void
    {
        $mail = new PHPMailer(true);

        try {
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'arantesimovel@gmail.com';
            $mail->Password = 'qfsuhumwvlfxincx';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = 465;

            $mail->setFrom('arantesimovel@gmail.com', 'Arantes Imóveis'); // quem vai enviar
            $mail->addAddress('antonelaipe@gmail.com', 'Usuário'); // quem vai receber este email
            $mail->addReplyTo('arantesimovel@gmail.com', 'Information');
            $mail->isHTML(true);
            $mail->Subject = 'Mensagem via gmail';
            $body = $this->corpoDoEmail();
            $mail->Body = $body;

            $mail->send();
            print 'E-mail enviado com sucesso';
        } catch (Exception $e) {
            print "Error: {$mail->ErrorInfo}";
        }
    }
}

<?php

namespace app\Models\Home;

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

class Email
{
    public function enviar(): void
    {
        $mail = new PHPMailer(true);

        try {
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'arantesimovel@gmail.com';
            $mail->Password = 'Ar@ntes59_0274';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port = 465;

            $mail->setFrom('arantesimovel@gmail.com', 'Mailer'); // quem vai enviar 
            $mail->addAddress('arantesimovel@gmail.com', 'Joe User'); // quem vai receber este email
            $mail->addReplyTo('arantesimovel@gmail.com', 'Information');
            $mail->isHTML(true);
            $mail->Subject = 'Mensagem via gmail';
            $body = 'Mensagem enviada através do email';
            $mail->Body = $body;

            $mail->send();
            print 'E-mail enviado com sucesso';
        } catch (Exception $e) {
            print "Error: {$mail->ErrorInfo}";
        }
    }
}

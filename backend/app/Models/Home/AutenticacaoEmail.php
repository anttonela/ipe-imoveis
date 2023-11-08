<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require '../../../vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'antonelaipe@gmail.com';
    $mail->Password   = 'naotemsenha123';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom('antonelaipe@gmail.com', 'Mailer');
    $mail->addAddress('antonelaipe@gmail.com', 'Joe User');
    $mail->addReplyTo('antonelaipe@gmail.com', 'Information');
    $mail->isHTML(true);
    $mail->Subject = 'Mensagem via gmail';
    $body    = 'Mensagem enviada através do email';
    $mail->Body = $body;

    $mail->send();
    print 'E-mail enviado com sucesso';
} catch (Exception $e) {
    print "Error: {$mail->ErrorInfo}";
}

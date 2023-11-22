<?php

require __DIR__ . '/../vendor/autoload.php';

use app\Models\Home\Email;

/*
$email = new Email();
$email->enviar();
*/

use routes\Requisicao;

$rotas = new Requisicao();
$rotas->verificandoSeRotaExiste();

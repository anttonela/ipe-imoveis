<?php

require __DIR__ . '/../vendor/autoload.php';

use routes\Requisicao;

$rotas = new Requisicao();
$rotas->verificandoSeRotaExiste();

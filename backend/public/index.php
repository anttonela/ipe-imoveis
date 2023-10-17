<?php

require __DIR__ . '/../vendor/autoload.php';

use routes\Requisicao;

$rotas = new Requisicao();
$rotas->verificandoSeRotaExiste(new routes\Routes, new routes\Parametros());
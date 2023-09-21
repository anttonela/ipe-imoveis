<?php

require __DIR__ . '../../../vendor/autoload.php';

use app\Login\Condicoes\CriarConta;

$criarConta = new CriarConta();
$criarConta->imprimindoAviso();
<?php

require __DIR__ . '../../../vendor/autoload.php';

use app\Login\Condicoes\Entrar;

$entrar = new Entrar();
$entrar->imprimindoAviso();
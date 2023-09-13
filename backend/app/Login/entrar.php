<?php

require __DIR__.'../../../../vendor/autoload.php';

use app\Views\Login\Condicoes\Entrar;

$entrar = new Entrar();
$entrar->imprimindoAviso();
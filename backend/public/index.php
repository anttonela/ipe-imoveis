<?php

require __DIR__ . '/../vendor/autoload.php';

use app\Models\Home\PegandoDados;

$route = new routes\Routes();
$requisicao = new routes\Parametros();

$rota = $route->getRotaAtual();
$salvar = new PegandoDados();

if (!is_null($rota)) {
    $parametros = $requisicao->getRequisicaoGet();
    $salvar->{$rota}($parametros);
    return;
}

$salvar->teste();
<?php

require __DIR__ . '/../vendor/autoload.php';

use app\Home\AdicionarProduto;
use app\Home\CardInformacoes;
use app\Login\Condicoes\CriarConta;
use app\Models\PegandoDados;
use routes\Routes;
use routes\Parametros;

$route = new \routes\Routes();
$requisicao = new \routes\Parametros();

$rota = $route->getRotaAtual();
$salvar = new PegandoDados();

if (!is_null($rota)) {
    $parametros = $requisicao->getRequisicaoGet();
    $salvar->{$rota}($parametros);
} else {
    $salvar->teste();
}


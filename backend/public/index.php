<?php

require __DIR__ . '/../vendor/autoload.php';

use app\Home\AdicionarProduto;
use app\Home\CardDescricao;

$print = new AdicionarProduto;
$print->encontrandoIdDaCategoria();

/*
header('Access-Control-Allow-Origin: *');

$cardDescricao = [
    [
        'descricao_card' => 'descricao cardsss',
    ],
];

die(json_encode($cardDescricao));*/
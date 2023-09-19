<?php

require __DIR__ . '/../vendor/autoload.php';

use app\Home\CardDescricao;

$print = new CardDescricao;
$print->pegandoValores();
/*
header('Access-Control-Allow-Origin: *');

$cardDescricao = [
    [
        'descricao_card' => 'descricao cardsss',
    ],
];

die(json_encode($cardDescricao));*/
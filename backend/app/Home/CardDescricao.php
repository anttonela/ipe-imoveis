<?php

namespace app\Home;

use app\Models\Crud\Functions\Select;
use app\Models\Crud\Utilizadores\Banco;

class CardDescricao
{
    public function pegandoValores(): void
    {
        $banco = new Banco;
        $table = new Select("produto");

        $arDados = [];

        $produtos = $banco->executarFetchAll($table->condicoes($arDados));

        /*
        $produto [
            "id_produto" = $produtos[0],

        ]*/

        foreach ($produtos as $index => $produto) {
            print "{$index}: {$produto}";
        }

        print "<br>TESTE<br>";

        //print_r($banco->getValores($produtos[0]));
    }

    public function textoCardDescricao(): string
    {
        header('Access-Control-Allow-Origin: *');

        $cardDescricao = [
            [
                'descricao_card' => 'descricao card',
            ],
        ];

        die(json_encode($cardDescricao));
    }
}

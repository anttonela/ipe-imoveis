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

        foreach ($produtos[0] as $index => $primeiroCadastro) {
            print $index . ": ";
            print_r($primeiroCadastro);
            print "<br><br>";
        }
        print "<br>TESTE<br><br>";

        /*
        print_r($produtos[0]);
        print "<br> " . current($produtos[0]);*/
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

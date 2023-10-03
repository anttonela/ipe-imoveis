<?php

namespace app\Models;

use app\Models\Crud\Utilizadores\Banco;

class PegandoDados extends Banco
{
    public function enviandoParaJson(): void
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        $nomeCategoria = "Imóveis";
        $select = $this->executarFetchAll("SELECT * FROM produto WHERE categoria = '{$nomeCategoria}' ORDER BY id_produto");

        http_response_code(200);

        print json_encode($select);
    }
}
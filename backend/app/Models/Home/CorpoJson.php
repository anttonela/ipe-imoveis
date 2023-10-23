<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Banco;

class CorpoJson
{
    public function cabecalho(): void
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
    }

    public function response(): void
    {
        http_response_code(200);
    }

    public function select($nomeCategoria): array
    {
        $banco = new Banco();
        $select = $banco->executarFetchAll("SELECT * FROM produto WHERE classificacao = '{$nomeCategoria}'");

        return $select;
    }
}

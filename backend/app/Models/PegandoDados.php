<?php

namespace app\Models;

use app\Models\Crud\Utilizadores\Banco;

class PegandoDados extends Banco
{
    public function teste(): void
    {
        header("Access-Control-Allow-Headers: Content-Type");
        header("Access-Control-Allow-Methods: GET, POST");
        header("Access-Control-Allow-Origin: *");

        $tipo = $_POST['select_tipo'];
        $produto = $_POST['select_produto'];
        $cidade = $_POST['select_cidade'];

        $response = array(
            "tipo" => $tipo,
            "produto" => $produto,
            "cidade" => $cidade
        );

        header('Content-Type: application/json');

        echo json_encode($response);
    }
}

/*
        $nomeCategoria = "Imóveis";
        $select = $this->executarFetchAll("SELECT * FROM produto WHERE categoria = '{$nomeCategoria}' ORDER BY id_produto");

        http_response_code(200);

        print json_encode($select);
*/
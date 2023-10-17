<?php

namespace app\Models;

use app\Models\Crud\Utilizadores\Banco;

class PegandoDados extends Banco
{
    public function cabecalho(): void
    {
        header("Access-Control-Allow-Headers: Content-Type");
        header("Access-Control-Allow-Methods: GET, POST");
        header("Access-Control-Allow-Origin: *");
    }

    public function rodape()
    {
        http_response_code(200);
    }

    public function imoveis($arRequest)
    {
        $this->cabecalho();
/*
        $nomeCategoria = "Imóveis";
        $select = $this->executarFetchAll("SELECT * FROM produto WHERE categoria = '{$nomeCategoria}' ORDER BY id_produto");

        
        $tipo = $_POST['select_tipo'];
        $produto = $_POST['select_produto'];
        $cidade = $_POST['select_cidade'];

        $resposta = array(
            "tipo" => $tipo,
            "produto" => $produto,
            "cidade" => $cidade
        );
                */
        echo json_encode($arRequest);

        $this->rodape();
    }


    public function teste()
    {
        $this->cabecalho();

        $nomeCategoria = "Imóveis";
        $select = $this->executarFetchAll("SELECT * FROM produto WHERE categoria = '{$nomeCategoria}' ORDER BY id_produto");

        
        $tipo = $_POST['select_tipo'];
        $produto = $_POST['select_produto'];
        $cidade = $_POST['select_cidade'];

        $resposta = array(
            "tipo" => $tipo,
            "produto" => $produto,
            "cidade" => $cidade
        );        
        echo json_encode($resposta);

        $this->rodape();
    }
}

/*
        $nomeCategoria = "Imóveis";
        $select = $this->executarFetchAll("SELECT * FROM produto WHERE categoria = '{$nomeCategoria}' ORDER BY id_produto");

        http_response_code(200);

        print json_encode($select);
*/
<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Banco;

class ConteudoCard extends Banco
{
    public function select($nomeCategoria)
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        http_response_code(200);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);
        }

        $classificacao = $data['classificacao'];
        $tipo = $data['tipo'];
        $cidade = $data['cidade'];

        if (!empty($classificacao) && !empty($tipo) && !empty($cidade)) {
            $selectFiltro = $this->executarFetchAll("SELECT * FROM produto WHERE classificacao = '{$classificacao}' and tipo = '{$tipo}' and cidade = '{$cidade}'");

            foreach ($selectFiltro as &$row) {
                $row['valor'] = number_format($row['valor'], 2, ',', '.');
            }

            print json_encode($selectFiltro);
            return;
        }

        $select = $this->executarFetchAll("SELECT * FROM produto WHERE classificacao = '{$nomeCategoria}'");

        foreach ($select as &$row) {
            $row['valor'] = number_format($row['valor'], 2, ',', '.');
        }

        print json_encode($select);
    }
}

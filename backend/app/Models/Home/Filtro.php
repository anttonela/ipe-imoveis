<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Banco;

class Filtro extends Banco
{
    private $classificacao;
    private $tipo;
    private $cidade;
    private $resultado;

    public function filtro(): void
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        http_response_code(200);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);
        }

        $this->classificacao = $data['classificacao'];
        $this->tipo = $data['tipo'];
        $this->cidade = $data['cidade'];

        $select = $this->executarFetchAll("SELECT * FROM produto WHERE classificacao = '{$this->classificacao}' and tipo = '{$this->tipo}' and cidade = '{$this->cidade}'");

        print json_encode($select);
    }
}

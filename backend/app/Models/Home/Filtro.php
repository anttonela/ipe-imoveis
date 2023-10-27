<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Banco;

class Filtro
{
    public function filtro(): void
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        http_response_code(200);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);

            if ($data === null) {
                http_response_code(400);
                echo json_encode(array("error" => "Dados inválidos"));
                return;
            }
        }

        $banco = new Banco();
        $select = $banco->executarFetchAll("SELECT * FROM produto WHERE tipo = '" . $data['tipo'] . "' and cidade = '" . $data['cidade'] . "'");

        print json_encode($select);
    }
}

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

    public function pegarDadosEnviados(): void
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);

            if ($data === null) {
                http_response_code(400);
                echo json_encode(array("error" => "Dados inválidos"));
                return;
            }
        }
    }
}

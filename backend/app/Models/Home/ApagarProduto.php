<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Tabela;

class ApagarProduto
{
    public function apagandoProduto(): void
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);

            if ($data === null) {
                http_response_code(400);
                print json_encode(array("error" => "Dados inválidos"));
                return;
            }
        }

        $table = new Tabela("produto");

        $arTable = [
            "id" => $data["id"],
        ];

        $table->salvarDelete($arTable);

        print json_encode("Apagado");
    }  
}
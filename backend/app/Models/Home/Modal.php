<?php

namespace app\Models\Home;

use app\Models\Crud\Functions\Select;
use app\Models\Crud\Utilizadores\Banco;

class Modal extends Banco
{
    /*
    public function abrindoModalDoId(): void
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

        $id = $data['id'];
        $table = new Select("produto");

        $arTable = [
            "COLUMN" => "",
            "WHERE" => "id_produto = '{$id}'",
        ];

        $arSelectProduto = $this->executarFetchAll($table->condicoes($arTable));
       print json_encode($arSelectProduto);
    }
    */
}

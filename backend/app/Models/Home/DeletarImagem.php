<?php

namespace app\Models\Home;

use app\Models\Crud\Functions\Select;
use app\Models\Crud\Utilizadores\Tabela;

class DeletarImagem
{
    public function deletarImagem(): void
    {
        print json_encode("está pegando o php");
        /*
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
            "id_img" => $data["id"],
        ];

        $table->salvarDelete($arTable);

        print json_encode("Apagado");
        */

        /*
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if ($_FILES === null) {
                http_response_code(400);
                print json_encode(array("error" => "Dados inválidos"));
            }

            print json_encode("tipo: " + $_FILES["file"]['name']);
        */
        /*
            move_uploaded_file($_FILES["file"]["tmp_name"], '/home/ipeweb/Documents/ipe_imoveis/backend/app/View/Upload/' .
                date("y-m-dhi") . $_FILES["file"]["name"]);

            $nomeImagem = date("y-m-dhi") . $_FILES["file"]['name'];

            $arSalvarNomeImagem = [
                "nome_imagem" => $nomeImagem
            ];

            $salvando = new Tabela("imagem");
            $salvando->salvarInserir($arSalvarNomeImagem);

            $tabelaDoSelect = new Select("imagem");

            $arPegarIdDaImagem = [
                "COLUMN" => "id_img",
                "WHERE" => "nome_imagem = '{$nomeImagem}'",
            ];

            $result = $tabelaDoSelect->executarFetchAll($tabelaDoSelect->condicoes($arPegarIdDaImagem));

            print json_encode(!empty($result[0]['id_img']) ? $result[0]['id_img'] : null);*/
    }
}

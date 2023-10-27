<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Tabela;

class NovoImovel
{
    public function novoImovel(): void
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

        $descricao = $data['descricao'];
        $linkWhatsapp = $data['linkWhatsapp'];
        $linkOlx = $data['linkOlx'];
        $palavras = explode(' ', $descricao);
        $table = new Tabela("produto");

        $arProduto = [
            "classificacao" => $data['classificacao'],
            "tipo" => $data['tipo'],
            "cidade" => $data['cidade'],
            "situacao" => "Não Vendido",
            "valor" => $data['valor'],
            "breve_descricao" => implode(' ', array_slice($palavras, 0, 7)),
            "descricao" => "$descricao",
            "link_whatsapp" => "https://api.whatsapp.com/send?phone=+55" . $linkWhatsapp . "&text=Ola%21",
            "link_instagram" => "https://www.instagram.com/" . $data['linkInstagram'] . "/",
            "link_facebook" => "https://www.facebook.com/" . $data['linkFacebook'] . "/",
            "link_olx" => "$linkOlx",
        ];

        $table->salvarInserir($arProduto);
    }
}

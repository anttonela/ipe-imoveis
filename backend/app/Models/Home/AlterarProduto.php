<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Banco;

class AlterarProduto extends Banco
{
    private $linkWhatsapp;
    private $linkInstagram;
    private $linkFacebook;
    private $linkOlx;

    public function alterandoDadosDoProduto(): void
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

        empty($data['linkWhatsapp']) ? $this->linkWhatsapp = "" : $this->linkWhatsapp = "https://api.whatsapp.com/send?phone=+55" . $data['linkWhatsapp'] . "&text=Ola%21";
        empty($data['linkInstagram']) ? $this->linkInstagram = "" : $this->linkInstagram = "https://www.instagram.com/" . $data['linkInstagram'] . "/";
        empty($data['linkFacebook']) ? $this->linkFacebook = "" : $this->linkFacebook = "https://www.facebook.com/" . $data['linkFacebook'] . "/";
        empty($data['linkOlx']) ? $this->linkOlx = "" : $this->linkOlx = "https://www.olx.com.br/";

        $id = $data['idCard'];

        $resultado = $this->executarFetchAll(
            "
            UPDATE produto
            SET
            classificacao = 'Imóvel',
            tipo = 'Casa',
            cidade = 'Indiara',
            situacao = 'Não Vendido',
            valor = 500,
            descricao = 'Descrição',
            breve_descricao = 'breve',
            link_whatsapp = 'https://api.whatsapp.com/send?phone=+5564999324420&text=Ola%21',
            link_instagram = 'https://www.instagram.com/anttonelareis/',
            link_facebook = 'https://www.facebook.com/anttonelareis/',
            link_olx = 'https://www.olx.com.br/'
            WHERE id_produto = {$id}
            "
        );

        print_r($resultado);
    }
}

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

        if (substr($data['valor'], -3) === ',00') {
            $valorFormatado = substr($data['valor'], 0, -3);
        } else {
            $valorFormatado = $data['valor'];
        }
        
        $alterar =
        "
            UPDATE produto
            SET
            classificacao = '" . $data['classificacao'] . "',
            tipo = '" . $data['tipo'] . "',
            cidade = '" . $data['cidade'] . "',
            situacao = '" . $data['situacao'] . "',
            valor = " . floatval(str_replace(',', '.', $valorFormatado)) . ",
            descricao = '" . $data['descricao'] . "',
            breve_descricao = '" . implode(' ', array_slice(explode(' ', $data['descricao']), 0, 7)) . "',
            link_whatsapp = '{$this->linkWhatsapp}',
            link_instagram = '{$this->linkInstagram}',
            link_facebook = '{$this->linkFacebook}',
            link_olx = '{$this->linkOlx}'
            WHERE id_produto = " . $data['id'] . "
        ";

        $this->executarFetchAll($alterar);
    }
}

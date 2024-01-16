<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Tabela;

class NovoProduto
{
    private $linkWhatsapp;
    private $linkInstagram;
    private $linkFacebook;
    private $linkOlx;

    // rota 'imagem' pega esse
    public function salvandoImagem()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);

            if ($_FILES === null) {
                http_response_code(400);
                print json_encode(array("error" => "Dados inválidos"));
                return false;
            }


            move_uploaded_file($_FILES["file"]["tmp_name"], '/home/ipeweb/Documents/ipe_imoveis/backend/app/View/Upload/' . date("y-m-dhi"). $_FILES["file"]["name"]);
            print json_encode("Foto salva com sucesso");

            /*

            $arSalvarNomeImagem = [
                "nome_imagem" => "testenome232",
            ];

            $table = new Tabela("imagem");
            $table->salvarInserir($arSalvarNomeImagem);

            */
        }
    }

    public function novoProduto(): void
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);

            if ($data === null) {
                http_response_code(400);
                print json_encode(array("error" => "Dados inválidos"));
                return;
            }

            /*
            empty($data['linkWhatsapp']) ?  $this->linkWhatsapp = "" : $this->linkWhatsapp = "https://api.whatsapp.com/send?phone=+55" . $data['linkWhatsapp'] . "&text=Ola%21";
            empty($data['linkInstagram']) ?  $this->linkInstagram = "" : $this->linkInstagram = "https://www.instagram.com/" . $data['linkInstagram'] . "/";
            empty($data['linkFacebook']) ?  $this->linkFacebook = "" : $this->linkFacebook = "https://www.facebook.com/" . $data['linkFacebook'] . "/";

            $arProduto = [
                "classificacao" => $data['classificacao'],
                "tipo" => $data['tipo'],
                "cidade" => $data['cidade'],
                "situacao" => $data['situacao'],
                "valor" => $data['valor'],
                "breve_descricao" => implode(' ', array_slice(explode(' ', $data['descricao']), 0, 9)),
                "descricao" => $data['descricao'],
                "link_whatsapp" => "{$this->linkWhatsapp}",
                "link_instagram" => "{$this->linkInstagram}",
                "link_facebook" => "{$this->linkFacebook}",
                "link_olx" => $data['linkOlx'],
                "id_img" => id imagem aqui
            ];

            $table = new Tabela("produto");
            $table->salvarInserir($arProduto);*/
        }
    }
}

<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Tabela;

class NovoProduto
{
    private $linkWhatsapp;
    private $linkInstagram;
    private $linkFacebook;
    private $linkOlx;

    public function salvandoImagem(): bool
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);

            if ($_FILES === null) {
                http_response_code(400);
                print json_encode(array("error" => "Dados inválidos"));
                return false;
            }

            print json_encode($_FILES['imagem']);
            print json_encode(" || ");
            print json_encode($_FILES);
            print json_encode(" || ");
            print_r( var_dump($_FILES));
            print json_encode(" || ");
            print json_encode($_POST);
            print json_encode(" || ");
            print json_encode($_FILES['images']);

            if ( move_uploaded_file( $_POST['imagem'], '/home/ipeweb/Documents/ipe_imoveis/backend/app/View/Upload/' . date("y-m-dhi") ) )
                return true;
            die('deu erro');
        }
    }

    private function existeArquivo() : void
    {
        if (is_uploaded_file($_POST['tmp_name'])) {
            echo "File ". $_FILES['userfile']['name'] ." uploaded successfully.\n";
            echo "Displaying contents\n";
            readfile($_FILES['userfile']['tmp_name']);
        } else {
            echo "Possible file upload attack: ";
            echo "filename '". $_FILES['userfile']['tmp_name'] . "'.";
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
            print json_encode("em novo produto");

            /*
            if (isset($_FILES['imagens'])) {
                $ext = strtolower(substr($_FILES['imagens']['name'], -4));
                $novoNome = date("Y.m.d-H.i.s") . $ext;
                $caminho = '../../View/Upload/';

                move_uploaded_file($_FILES['pic']['tmp_name'], $caminho . $novoNome);
                chmod("./imagens/" . $novoNome, 644);
                print json_encode("salvando");
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
                        "imagem" => ,
                    ];

                    $table = new Tabela("produto");
                    $table->salvarInserir($arProduto);
            */
        }
    }
}

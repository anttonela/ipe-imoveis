<?php

namespace app\Models\Home;

use app\Models\Crud\Functions\Select;
use app\Models\Crud\Utilizadores\Tabela;

class NovoProduto
{
    private $linkWhatsapp;
    private $linkInstagram;
    private $linkFacebook;
    private $linkOlx;

    public function salvandoImagem()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            if ($_FILES === null) {
                http_response_code(400);
                print json_encode(array("error" => "Dados inválidos"));
                return false;
            }

            move_uploaded_file($_FILES["file"]["tmp_name"], '/home/ipeweb/Documents/ipe_imoveis/frontend/src/assets/upload/' .
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

            print json_encode(!empty($result[0]['id_img']) ? $result[0]['id_img'] : null);
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

            $table = new Tabela("produto");
            $tabelaDoSelect = new Select("imagem");

            empty($data['linkWhatsapp']) ?  $this->linkWhatsapp = "" : $this->linkWhatsapp = "https://api.whatsapp.com/send?phone=+55" . $data['linkWhatsapp'] . "&text=Ola%21";
            empty($data['linkInstagram']) ?  $this->linkInstagram = "" : $this->linkInstagram = "https://www.instagram.com/" . $data['linkInstagram'] . "/";
            empty($data['linkFacebook']) ?  $this->linkFacebook = "" : $this->linkFacebook = "https://www.facebook.com/" . $data['linkFacebook'] . "/";

            $ids = explode(',', $data['idImagem']);

            foreach ($ids as $id) {
                $arPegarNomeDaImagem = [
                    "COLUMN" => "nome_imagem",
                    "WHERE" => "id_img = '{$id}'",
                ];

                $nomeDaImagem = $tabelaDoSelect->executarFetchAll($tabelaDoSelect->condicoes($arPegarNomeDaImagem));

                if (is_array($nomeDaImagem) && count($nomeDaImagem) > 0) {
                    $nomeImagem = $nomeDaImagem[0]['nome_imagem'];
                    print json_encode($nomeImagem);
                }
            }

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
                "nome_img" => "{$nomeImagem}",
            ];

            $table->salvarInserir($arProduto);
        }
    }
}

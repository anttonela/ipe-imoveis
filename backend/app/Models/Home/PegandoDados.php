<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Tabela;
use app\Models\Home\CorpoJson;

class PegandoDados extends CorpoJson
{
    public $classificacao;
    public $tipo;
    public $cidade;

    public function filtro($arRequest): void
    {
        $this->cabecalho();

        print json_encode($arRequest);

        $this->response();
    }

    public function imoveis(): void
    {
        $this->cabecalho();

        http_response_code(200);

        print json_encode($this->select("Imóveis"));
    }

    public function teste(): void
    {
        $this->cabecalho();

        print json_encode("Em teste");

        $this->response();
    }

    public function maquinasAgricolas(): void
    {
        $this->cabecalho();

        http_response_code(200);

        print json_encode($this->select("Máquinas Agrícolas"));
    }

    public function outros(): void
    {
        $this->cabecalho();

        http_response_code(200);

        print json_encode($this->select("Outros"));
    }

    public function filtroFileira(): void
    {
        $this->cabecalho();

        http_response_code(200);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);

            if ($data === null) {
                http_response_code(400);
                echo json_encode(array("error" => "Dados inválidos"));
                return;
            }

            $this->classificacao = $data['classificacao'];
            $this->tipo = $data['tipo'];
            $this->cidade = $data['cidade'];

            print "Classificação: {$this->classificacao}\n";
            print "Tipo: {$this->tipo}\n";
            print "Cidade: {$this->cidade}\n";
        }
    }

    public function novoImovel(): void
    {
        $this->cabecalho();

        http_response_code(200);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);

            if ($data === null) {
                http_response_code(400);
                echo json_encode(array("error" => "Dados inválidos"));
                return;
            }
        }

        $cidade = $data['cidade'];
        $classificacao = $data['classificacao'];
        $valor = $data['valor'];
        $descricao = $data['descricao'];
        $linkWhatsapp = $data['linkWhatsapp'];
        $linkInstagram = $data['linkInstagram'];
        $linkFacebook = $data['linkFacebook'];
        $linkOlx = $data['linkOlx'];

        $palavras = explode(' ', $descricao);
        $table = new Tabela("produto");

        $arTable = [
            "categoria" => "$classificacao",
            "cidade" => "$cidade",
            "situacao" => "Não Vendido",
            "valor" => $valor,
            "breve_descricao" => implode(' ', array_slice($palavras, 0, 8)),
            "descricao" => "$descricao",
            "link_whatsapp" => "$linkWhatsapp",
            "link_instagram" => "$linkInstagram",
            "link_facebook" => "$linkFacebook",
            "link_olx" => "$linkOlx",

        ];

        $table->salvarInserir($arTable);

        /*

        insert into produto(categoria, cidade, situacao, valor, quantidade_parcelas,
        valor_mensal, breve_descricao, descricao, link_whatsapp, link_instagram,
        link_facebook, link_olx) values ('Outros', 'Acreúna', 'Não Vendido', 
        20000, 20, 2000, 'Casa dois andares', 'Casa dois andares com 4 quatros suítes, 
        muro branco, câmeras de segurança com imóveis', 'link', 'link', 'link', 'link');

        */
    }
}

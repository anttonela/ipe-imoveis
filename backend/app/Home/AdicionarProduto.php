<?php

namespace app\Home;

use app\Models\Crud\Functions\Select;
use app\Models\Crud\Utilizadores\Banco;
use app\Models\Crud\Utilizadores\Tabela;

class AdicionarProduto extends Banco
{
    private $idProduto;
    private $idCategoria;
    private $categoria;
    private $cidade;
    private $valor;
    private $parcelas;
    private $descricao;
    private $descricaoCard;
    private $linkWhatsapp;
    private $linkInstagram;
    private $linkFacebook;
    private $linkOlx;
    private $arMensagem;

    public function setAdicionarProduto(): void
    {
        $this->cidade = $_POST['cidade'];
        $this->valor = $_POST['valor'];
        $this->parcelas = $_POST['parcelas'];
        $this->descricao = $_POST['descricao'];
        $this->descricaoCard = $_POST['descricao_card'];
        $this->linkWhatsapp = $_POST['link_whatsapp'];
        $this->linkInstagram = $_POST['link_instagram'];
        $this->linkFacebook = $_POST['link_facebook'];
        $this->linkOlx = $_POST['link_olx'];
    }

    private function valorParcelas(): string
    {
        $this->setAdicionarProduto();

        $valorPorParcela = $this->valor / $this->parcelas;
        return $valorPorParcela;
    }

    public function encontrandoIdDaCategoria(): void
    {
        $table = new Select("categoria");
        $arTable = [
            "COLUMN" => "id",
            "WHERE" => "nome = '$this->categoria'",
        ];

        $idCategoria = $this->executarFetchAll($table->condicoes($arTable));
        $this->idCategoria = current($idCategoria[0]);
    }

    public function inserindoNoBanco(): void
    {
        $this->encontrandoIdDaCategoria();

        if (!isset($this->arMensagem[0])) {
            $table = new Tabela("produto");

            /*
            id_categoria, tipo, cidade, valor, quantidade_parcela, juro_parcela,
valor_mensal, breve_descricao, descricao, link_whatsapp, link_facebook, link_instagram, link_olx)
            */
            $arTable = [
                "id_categoria" => "2",
                "tipo" => "Apartamento",
                "cidade" => "Goiânia",
                "valor" => "50000",
                "quantidade_parcela" => "12",
                "juro_parcela" => "55",
                "valor_mensal" => "6000",
                "breve_descricao" => "4 quartos, 1 banheiro",
                "descricao" => "com imóveis incluidos 4x4m, 1 sala, 2 banheiros com imóveis incluidos 4x4m, 1 sala, 2 banheiros com imóveis incluidos 4x4m, 1 sala, 2 banheiros",
                "link_whatsapp" => "link//64999324420",
                "link_facebook" => "link//facebook",
                "link_instagram" => "link//instagram",
                "link_olx" => "link//olx",
            ];

            $table->salvarInserir($arTable);
            $this->arMensagem[] = "<br>Conta criada com sucesso!";
            return;
        }

        $this->arMensagem[] = "<br><br>Erro ao tentar criar conta";
    }
}

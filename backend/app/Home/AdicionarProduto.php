<?php

namespace app\Home;

use app\Models\Crud\Functions\Select;
use app\Models\Crud\Utilizadores\Banco;
use app\Models\Crud\Utilizadores\Tabela;

class AdicionarProduto extends Banco
{
    private $idProduto;
    private $idCategoria;
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
            "WHERE" => "nome = 'Outros'",
        ];

        $idCategoria = $this->executarFetchAll($table->condicoes($arTable));
        $this->idCategoria = current($idCategoria[0]);
    }

    public function inserindoNoBanco(): void
    {
        $this->encontrandoIdDaCategoria();

        if (!isset($this->arMensagem[0])) {
            $table = new Tabela("produto");

            $arTable = [
                "id_categoria" => "{$this->idCategoria}",
                "cidade" => "{$this->cidade}",
                "valor" => "{$this->valor}",
                "parcelas" => "{$this->parcelas}"
            ];

            $table->salvarInserir($arTable);
            $this->arMensagem[] = "<br>Conta criada com sucesso!";
            return;
        }

        $this->arMensagem[] = "<br><br>Erro ao tentar criar conta";
    }
}

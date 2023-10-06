<?php

namespace app\Home;

use app\Models\Crud\Functions\Select;
use app\Models\Crud\Utilizadores\Banco;

class CardInformacoes extends Banco
{
    private $idProduto;
    private $descricao;
    private $categoria;
    private $cidade;
    private $valor;
    private $select;

    public function pegandoDado($coluna): void
    {
        $table = new Select("produto");

        $arDados = [
            "COLUMN" => "{$coluna}",
        ];

        $this->select = $this->executarFetchAll($table->condicoes($arDados));

        $this->idProduto = 0;

        foreach ($this->select[$this->idProduto] as $produto) {
            print_r($produto);
        }
    }

    public function pegandoCidade(): void
    {
        $this->pegandoDado("cidade");
    }

    public function pegandoValor(): void
    {
        $this->pegandoDado("valor");
    }

    public function pegandoDescricao(): void
    {
        $this->pegandoDado("descricao");
    }

    public function textoCardDescricao(): string
    {
        header('Access-Control-Allow-Origin: *');

        $cardDescricao = [
            [
                'descricao_card' => 'descricao card',
            ],
        ];

        die(json_encode($cardDescricao));
    }
}
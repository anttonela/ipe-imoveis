<?php

namespace app\Models\Home;

use app\Models\Home\CorpoJson;

class Classificacoes extends CorpoJson
{
    public function pegandoTodosOsProdutos(): array
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        http_response_code(200);

        $select = $this->executarFetchAll("SELECT * FROM produto");

        return $select;
    }

    public function imoveis(): void
    {
        print json_encode($this->select("Imóvel"));
    }

    public function maquinasAgricolas(): void
    {
        print json_encode($this->select("Máquinas Agrícolas"));
    }

    public function outros(): void
    {
        print json_encode($this->select("Outros"));
    }
}

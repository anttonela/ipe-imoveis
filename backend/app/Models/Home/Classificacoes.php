<?php

namespace app\Models\Home;

use app\Models\Home\CorpoJson;

class Classificacoes extends CorpoJson
{
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
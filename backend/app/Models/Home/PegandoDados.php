<?php

namespace app\Models\Home;

use app\Models\Home\CorpoJson;

class PegandoDados extends CorpoJson
{
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

        echo json_encode($this->select("Imóveis"));
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

        echo json_encode($this->select("Máquinas Agrícolas"));
    }

    public function outros(): void
    {
        $this->cabecalho();

        http_response_code(200);

        echo json_encode($this->select("Outros"));
    }
}

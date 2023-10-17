<?php

namespace app\Models\Home;

use app\Models\Crud\InserirDados;

class PegandoDados extends InserirDados
{
    public function cabecalho(): void
    {
        header("Access-Control-Allow-Headers: Content-Type");
        header("Access-Control-Allow-Methods: GET, POST");
        header("Access-Control-Allow-Origin: *");
    }

    public function rodape(): void
    {
        http_response_code(200);
    }

    public function filtro($arRequest): void
    {
        $this->cabecalho();

        echo json_encode($arRequest);

        $this->rodape();
    }

    public function imoveis(): void
    {
        $this->cabecalho();

        echo json_encode($this->select("Imóveis"));

        $this->rodape();
    }


    public function teste(): void
    {
        $this->cabecalho();

        echo json_encode("Em teste");

        $this->rodape();
    }

    public function maquinasAgricolas(): void
    {
        $this->cabecalho();

        echo json_encode($this->select("Máquinas Agrícolas"));

        $this->rodape();
    }

    public function outros(): void
    {
        $this->cabecalho();

        echo json_encode($this->select("Outros"));

        $this->rodape();
    }
}
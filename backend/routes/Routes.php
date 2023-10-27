<?php

namespace routes;

use app\Models\Home\Filtro;
use app\Models\Home\CriarConta;
use app\Models\Home\Entrar;
use app\Models\Home\CorpoJson;
use app\Models\Home\NovoProduto;

class Routes extends CorpoJson
{
    public $classificacao;
    public $tipo;
    public $cidade;

    public function imoveis(): void
    {
        $this->cabecalho();

        http_response_code(200);

        print json_encode($this->select("Imóvel"));
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

    public function novoImovel(): void
    {
        $this->cabecalho();

        http_response_code(200);

        $novoImovel = new NovoProduto();
        $novoImovel->novoImovel();
    }

    public function criarConta(): void
    {
        $this->cabecalho();

        http_response_code(200);

        $criarConta = new CriarConta();
        $criarConta->registrandoResposta();
    }

    public function login(): void
    {
        $this->cabecalho();

        http_response_code(200);

        $login = new Entrar();
        $login->imprimindoAviso();
    }

    public function filtro(): void
    {
        $this->cabecalho();

        http_response_code(200);

        $filtro = new Filtro();
        $filtro->filtro();
    }
}

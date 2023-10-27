<?php

namespace app\Models\Home;

use app\Models\Home\Filtro;
use app\Models\Home\Login\CriarConta;
use app\Models\Home\Login\Entrar;
use app\Models\Home\CorpoJson;

class PegandoDados extends CorpoJson
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

        $novoImovel = new NovoImovel();
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

    public function filtro()
    {
        $this->cabecalho();

        http_response_code(200);

        $filtro = new Filtro();
        $filtro->filtro();
    }
}

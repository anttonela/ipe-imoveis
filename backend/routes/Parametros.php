<?php

namespace routes;

class Parametros{
    public function __construct()
    {
    }

    public function getRequisicaoGet()
    {
        $requisicao = $this->capturarGet();

        return $requisicao;
    }

    public function getRequisicaoPost()
    {
        $requisicao = $this->capturarPost();

        return $requisicao;
    }

    public function capturarGet()
    {
        return json_encode($_GET);
    }

    public function capturarPost()
    {
        return json_encode($_POST);
    }
}
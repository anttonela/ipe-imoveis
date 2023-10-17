<?php

namespace routes;

class Routes{
    public function __construct()
    {
    }

    public function getRotaAtual()
    {
        $requisicao = $this->capturarRequest();

        return $requisicao;
    }

    public function capturarRequest()
    {
        return str_replace(['\\', '/'], ['',''], $_SERVER['PATH_INFO']);
    }
}
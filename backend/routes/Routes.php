<?php

namespace routes;

class Routes
{
    public function getRotaAtual(): string
    {
        $requisicao = $this->pegandoRequest();

        return $requisicao;
    }

    public function pegandoRequest(): string
    {
        return str_replace(['\\', '/'], ['', ''], $_SERVER['PATH_INFO']);
    }
}
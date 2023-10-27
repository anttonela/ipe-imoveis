<?php

namespace routes;

class PegandoRequisicao
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
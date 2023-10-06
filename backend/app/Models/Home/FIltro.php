<?php

namespace app\Home;

class Filtro 
{
    private $tipo;
    private $produto;
    private $cidade;
    public $resultado;

    private function setFiltro(): void 
    {
        $this->tipo = 0;
        $this->produto = 0;
        $this->cidade = 0;
    }

    private function selectProduto(): void 
    {
        
    }
}
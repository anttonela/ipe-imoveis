<?php

namespace app\Models\Home;

class UploadImagem
{
    private string $caminho;

    public function __construct(string $caminho)
    {
        $this->caminho = $caminho;
    }

    public function salvarImagem()
    {

    }
}

<?php

namespace routes;

use routes\Routes;

class Requisicao
{
    public function verificandoSeRotaExiste(): void
    {
        $route = new \routes\PegandoRequisicao();
        $requisicao = new \routes\Parametros();

        $rota = $route->getRotaAtual();
        $salvar = new Routes();

        if (!is_null($rota)) {
            $parametros = $requisicao->getRequisicaoGet();
            $salvar->{$rota}($parametros);
            return;
        }
    }
}
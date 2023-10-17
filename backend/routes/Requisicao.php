<?php

namespace routes;

use app\Models\Home\PegandoDados;

class Requisicao
{
    public function verificandoSeRotaExiste($route, $requisicao): void
    {
        $rota = $route->getRotaAtual();
        $salvar = new PegandoDados();

        if (!is_null($rota)) {
            $parametros = $requisicao->getRequisicaoGet();
            $salvar->{$rota}($parametros);
            return;
        }

        $salvar->teste();
    }
}
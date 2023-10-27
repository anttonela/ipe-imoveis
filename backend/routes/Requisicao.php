<?php

namespace routes;

use app\Models\Home\PegandoDados;

class Requisicao
{
    public function verificandoSeRotaExiste(): void
    {
        $route = new \routes\Routes();
        $requisicao = new \routes\Parametros();

        $rota = $route->getRotaAtual();
        $salvar = new PegandoDados();

        if (!is_null($rota)) {
            $parametros = $requisicao->getRequisicaoGet();
            $salvar->{$rota}($parametros);
            return;
        }
    }
}

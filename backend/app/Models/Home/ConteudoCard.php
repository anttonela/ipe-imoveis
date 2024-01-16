<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Banco;

class ConteudoCard extends Banco
{
    private string $classificacao;
    private string $tipo;
    private string $cidade;

    private function setSelect(): void
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        http_response_code(200);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);
        }

        $this->classificacao = $data['classificacao'];
        $this->tipo = $data['tipo'];
        $this->cidade = $data['cidade'];
    }

    public function select($nomeCategoria): void
    {
        $this->setSelect();

        if (!empty($this->classificacao) && !empty($this->tipo) && !empty($this->cidade)) {
            $selectFiltro = $this->executarFetchAll("SELECT * FROM produto WHERE classificacao = '{$this->classificacao}' and tipo = '{$this->tipo}' and 
            cidade = '{$this->cidade}'");

            foreach ($selectFiltro as &$row) {
                $row['valor'] = number_format($row['valor'], 2, ',', '.');
            }

            print json_encode($selectFiltro);
            return;
        }

        $select = $this->executarFetchAll("SELECT * FROM produto WHERE classificacao = '{$nomeCategoria}'");

        foreach ($select as &$row) {
            $row['valor'] = number_format($row['valor'], 2, ',', '.');
        }

        print json_encode($select);
    }
}

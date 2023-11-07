<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Banco;

class Filtro extends Banco
{
    private $aviso;

    public function filtro($nomeCategoria)
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        http_response_code(200);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);
        }

        if (!empty($data['tipo']) && !empty($data['cidade'])) {
            $select = $this->executarFetchAll("SELECT * FROM produto WHERE classificacao = 'Outros' and tipo = 'Outros' and cidade = 'Goiânia'");

            print json_encode( !empty($select) ? $select : null  );
            return;
        }

        $select = $this->executarFetchAll("SELECT * FROM produto WHERE classificacao = 'Outros'");

        foreach ($select as &$row) {
            $row['valor'] = number_format($row['valor'], 2, ',', '.');
        }

        return $select;
    }
}

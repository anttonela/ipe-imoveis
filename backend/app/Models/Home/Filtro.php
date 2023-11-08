<?php

namespace app\Models\Home;

use app\Models\Crud\Utilizadores\Banco;

class Filtro extends Banco
{
    private $classificacao;
    private $tipo;
    private $cidade;

    public function filtro(): array
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");

        http_response_code(200);

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $json_data = file_get_contents("php://input");
            $data = json_decode($json_data, true);
        }

        if (empty($data['classificacao']) || empty($data['tipo']) || empty($data['cidade'])) {
            //http_response_code(400);
            print json_encode("ERRO: " . $data['classificacao'] . " - " . $data['tipo'] . $data['cidade']);
            exit();
        }

        $this->classificacao = $data['classificacao'];
        $this->tipo = $data['tipo'];
        $this->cidade = $data['cidade'];

        $select = $this->executarFetchAll("SELECT * FROM produto WHERE classificacao = '{$this->classificacao}' and tipo = '{$this->tipo}' and cidade = '{$this->cidade}'");

        if (empty($this->select)) {
            //http_response_code(404);
            print json_encode(["error" => "Nenhum resultado encontrado"]);
            exit();
        }

        return $select;
    }

    public function view(): void
    {
        $data = $this->filtro();

        // foreach ($data as &$arrumandoValor) {
        // $arrumandoValor['valor'] = number_format($arrumandoValor['valor'], 2, ',', '.');
        // }

        print json_encode($data);
    }

}

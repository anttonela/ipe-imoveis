<?php

namespace app\View;

class TemplateEmail
{
    public function conteudoDoEmail(): string
    {
        $conteudo =
            "
            <!doctype html>
            <html lang='en'>

            <head>
                <meta charset='utf-8'>
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap'>

                <style>
                    .card {
                        width: 100%;
                        align-items: center;
                        display: flex;
                        justify-content: center;
                    }

                    .container {
                        width: 50%;
                        display: grid;
                    }

                    .inter_500 {
                        font-size: 20px;
                        height: 270px;
                        display: grid;
                        justify-content: space-between;
                        align-items: center;
                        line-height: 25px;
                        color: black;
                    }

                    .titulo {
                        font-size: 20px;
                        font-weight: bold;
                        height: 32px;
                        display: flex;
                        align-items: initial;
                        color: black;
                    }

                    .botao_content {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .paragrafo {
                        height: 15px;
                        background-color: green;
                    }

                    .botao {
                        height: 40px;
                        width: 260px;
                        border-radius: 10px;
                        font-size: 17px;
                        border: none;
                        background-color: #2B50AA;
                        color: #FAFAFA;
                    }

                    .texto {
                    color:black;
                    }
                </style>
            </head>


            <body>

                <div class='card'>
                    <div class='container'>

                        <div class='titulo'>Confirmação de Criação de Conta - Arantes Imóveis</div>
                        <div class='inter_500'>

                            <div class='texto'>Olá!</div>
                            <div class='texto'>
                                Recentemente foi iniciado um processo de criação de conta usando este endereço de e-mail. Para
                                garantir que foi você mesmo quem solicitou a criação da conta, precisamos da sua confirmação.
                                Clique no botão 'Confirmar' para confirmar a criação da conta.
                            </div>
                            <div class='texto'>Se você não iniciou este processo ou não reconhece esta atividade, ignore este
                                e-mail.
                                </div>
                        </div>
                        <a class='botao_content' href='http://localhost:3000/confirmado'>
                            <button class='botao' type='submit'>
                                Confirmar
                            </button>
                        </a>

                    </div>
                </div>

            </body>

            </html>
        ";

        return $conteudo;
    }
}

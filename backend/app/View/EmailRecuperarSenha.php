<?php

namespace app\View;

class EmailRecuperarSenha
{
    public function conteudoDoEmail($codigo): string
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
                        font-size: 2vh;
                        height: 27vh;
                        display: grid;
                        justify-content: space-between;
                        align-items: center;
                        line-height: 2.5vh;
                        color: black;
                    }

                    .titulo {
                        font-size: 2vh;
                        font-weight: bold;
                        height: 3.2vh;
                        display: flex;
                        align-items: initial;
                        color: black;
                    }

                    .botao_content {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: red;
                    }

                    .paragrafo {
                        height: 1.5vh;
                        background-color: green;
                    }

                    .botao {
                        height: 4vh;
                        width: 26vh;
                        border-radius: 1vh;
                        font-size: 2.2vh;
                        border: none;
                        background-color: #2B50AA;
                        color: #FAFAFA;
                        letter-spacing: 0.5vh;
                        font-weight: bold;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .texto {
                    color:black;
                    }
                </style>
            </head>


            <body>

                <div class='card'>
                    <div class='container'>

                        <div class='titulo'>Recuperação de Senha - Arantes Imóveis</div>
                        <div class='inter_500'>

                            <div class='texto'>Olá!</div>
                            <div class='texto'>
                                Recentemente foi iniciado um processo de recuperação de senha usando este endereço de e-mail. Para
                                garantir que foi você mesmo quem solicitou a troca, precisamos da sua confirmação.
                                Digite o código a seguir na página em que foi solicitada a recuperação.
                            </div>
                            <div class='texto'>Se você não iniciou este processo ou não reconhece esta atividade, ignore este
                                e-mail.
                                </div>
                        </div>
                        <div class='botao_content' style='display: flex; justify-content: center;'>
                            <div class='botao' style='margin: 0 auto;'>{$codigo}</div>
                        </div>

                    </div>
                </div>

            </body>

            </html>
        ";

        return $conteudo;
    }
}

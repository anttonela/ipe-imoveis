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
                        height: 100%;
                    }
            
                    .container {
                        width: 100%;
                        display: grid;
                        height: 320px;
                    }
            
                    .inter_500 {
                        font-size: 20px;
                        height: 120px;
                        display: grid;
                        justify-content: space-between;
                        align-items: center;
                        line-height: 20px;
                        color: black;
                    }
            
                    .titulo {
                        font-size: 25px;
                        font-weight: bold;
                        height: 35px;
                        display: flex;
                        align-items: initial;
                        color: black;
                        padding-bottom: 15px;
                    }
            
                    .botao_content {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-decoration: none;
                    }
            
                    .botao {
                        height: 40px;
                        width: 260px;
                        border-radius: 1vh;
                        font-size: 18px;
                        border: none;
                        background-color: #2B50AA;
                        color: #FAFAFA;
                    }
            
                    .texto {
                        color: #272727;
                    }
                </style>
            </head>
            
            
            <body>
            
                <div class='card'>
                    <div class='container'>
            
                        <div class='titulo'>Recuperação de Senha - Arantes Imóveis</div>
                        <div class='inter_500'>
            
                            <div class='texto'>Olá! Recentemente foi iniciado um processo de recuperação de senha usando este endereço de e-mail. Para
                                garantir que foi você mesmo quem solicitou a troca, precisamos da sua confirmação.
                                Digite o código a seguir na página em que foi solicitada a recuperação.
                            </div>
                            <div class='texto'>Se você não iniciou este processo ou não reconhece esta atividade, ignore este
                                e-mail.
                            </div>
                        </div>
                            <button class='botao' type='submit'>
                                {$codigo}
                            </button>
            
                    </div>
                </div>
            
            </body>
            
            </html>
        ";

        return $conteudo;
    }
}

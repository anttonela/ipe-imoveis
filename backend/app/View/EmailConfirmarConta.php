<?php

namespace app\View;

class EmailConfirmarConta
{
    public function conteudoDoEmail($chave): string
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
                        height: 500px;
                    }
            
                    .inter_500 {
                        font-size: 20px;
                        height: 300px;
                        display: grid;
                        justify-content: space-between;
                        align-items: center;
                        line-height: 25px;
                        color: black;
                    }
            
                    .titulo {
                        font-size: 25px;
                        font-weight: bold;
                        height: 35px;
                        display: flex;
                        align-items: initial;
                        color: black;
                    }
            
                    .botao_content {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-decoration: none;
                    }
            
                    .paragrafo {
                        height: 1.5vh;
                        background-color: green;
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
                        padding-top: 10px;
                        padding-bottom: 10px;
                    }
                </style>
            </head>
            
            
            <body>
            
                <div class='card'>
                    <div class='container'>
            
                        <div class='titulo'>Confirmação de Criação de Conta - Arantes Imóveis</div>
                        <div class='inter_500'>
            
                            <div class='texto'>Olá, agradecemos a sua solicitação de cadastramento em nosso site!</div>
                            <div class='texto'>
                                Recentemente foi iniciado um processo de criação de conta usando este endereço de e-mail. Para
                                garantir que foi você mesmo quem solicitou a criação da conta, precisamos da sua confirmação.
                                Clique no botão 'Confirmar' para entrar em sua conta.
                            </div>
                            <div class='texto'>Se você não iniciou este processo ou não reconhece esta atividade, ignore este
                                e-mail.
                            </div>
                        </div>
                        <a class='botao_content' href='http://localhost:3000/login/chave/{$chave}'>
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

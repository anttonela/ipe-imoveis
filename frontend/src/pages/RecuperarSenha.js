import React, { useEffect, useState } from "react";

import Logo from "../assets/img/logo.png";
import CardInput from "../components/login/CardInput";
import BannerImagem from "../assets/img/banner.png";

function RecuperarSenha() {

    let criarConta = "/criarConta";
    let login = "/login";

    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            email,
        };

        console.log('Dados a serem enviados:', dados);

        try {
            const response = await fetch("http://localhost:8080/recuperarSenha/", {
                method: 'POST',
                body: JSON.stringify(dados),
            });

            const data = await response.text();
            console.log('Resposta da API:', data);

            if (data === 'null"Administrador"') {
                window.location.href = '/administrador';
            }
            
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
        }
    }

    useEffect(() => {
        document.title = "Fazer Login";
    }, []);

    return (
        <>
            <div className="login_container">

                <div className="container_content">

                    <div className="content">

                        <div className="header_content">

                            <div className="login_header">
                                <div className="login_logo">
                                    <img className="login_logo" src={Logo} />
                                </div>

                                <div className="login_header_texto">
                                    <a href={login} className="link">
                                        <div className="texto_claro">Fazer Login</div>
                                    </a>

                                    <a href={criarConta} className="link">
                                        <div className="texto_claro">Criar Conta</div>
                                    </a>
                                </div>

                            </div>

                        </div>

                        <div className="recuperar_senha_content">
                            <div className="recuperar_senha_card_content">

                                <div className="recuperar_senha">
                                    <div className="titulo">Recuperando Senha</div>

                                    <form onSubmit={handleSubmit} className="enviar_email_content">

                                        <div className="enviar_email">
                                            <CardInput
                                                id={"email"}
                                                value={email}
                                                onChange={setEmail}
                                                textoInput={"E-mail"}
                                                placeholder={"E-mail..."}
                                            />

                                            <div className="recuperar_senha_botao">
                                                <button className="botao_submit" type="submit">
                                                    Enviar E-mail
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="login_banner">
                    <img className="imagem_banner" src={BannerImagem} />
                </div>

            </div>
        </>
    );
}

export default RecuperarSenha;

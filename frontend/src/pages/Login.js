import React, { useEffect, useState } from "react";

import Logo from "../assets/img/logo.png";
import CardInput from "../components/login/CardInput";
import BannerImagem from "../assets/img/banner.png";

function Login() {

  useEffect(() => {
    document.title = "Fazer Login";
  }, []);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = {
      email,
      senha,
    };

    try {
      console.log(dados);

      const response = await fetch('SUA_API_URL_AQUI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      });

      const data = await response.json();
      console.log('Resposta da API:', data);
    } catch (error) {
      console.error('Erro ao enviar os dados para a API:', error);
    }
  };

  let url = "/CriarConta";

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
                  <div className="texto">Fazer Login</div>

                  <a href={url} className="link">
                    <div className="texto_claro">Criar Conta</div>
                  </a>
                </div>

              </div>

            </div>

            <div className="login_card_content">

              <div className="login_card">
                <div className="titulo">Fazer Login</div>

                <div className="card_subtitulo">
                  <div className="login_subtitulo">
                    <div className="texto">Não tem uma conta?</div>

                    <div className="texto_azul">Criar Conta</div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <CardInput
                    id={"email"}
                    value={email}
                    onChange={setEmail}
                    textoInput={"E-mail"}
                    placeholder={"E-mail..."}
                  />

                  <CardInput
                    id={"senha"}
                    value={senha}
                    onChange={setSenha}
                    textoInput={"Senha"}
                    placeholder={"Senha..."}
                  />

                  <div className="login_botao">
                    <button className="botao_submit" type="submit">
                      Fazer Login
                    </button>
                  </div>
                </form>

                <div className="login_footer">
                  <div className="card_footer">
                    <div className="texto">Esqueceu a senha?</div>
                    <div className="texto_azul">Recuperar Senha</div>
                  </div>
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

export default Login;

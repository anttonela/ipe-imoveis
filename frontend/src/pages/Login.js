import React, { useEffect } from "react";

import Logo from "../assets/img/logo.png";
import CardInput from "../components/login/CardInput";
import BannerImagem from "../assets/img/banner.png";

function Login() {

  useEffect(() => {
    document.title = "Fazer Login";
  }, []);

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

                <CardInput textoInput={"E-mail"} placeholder={"E-mail..."} />
                <CardInput textoInput={"Senha"} placeholder={"Senha..."} />

                <div className="login_botao">
                  <button className="botao_submit" type="submit">
                    Fazer Login
                  </button>
                </div>

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

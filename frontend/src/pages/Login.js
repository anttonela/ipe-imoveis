import React, { useEffect, useState } from "react";

import Logo from "../assets/img/logo.png";
import CardInput from "../components/login/CardInput";
import BannerImagem from "../assets/img/banner.png";

function Login() {

  let url = "/CriarConta";

  //const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = {
      email,
      senha,
    };

    console.log('Dados a serem enviados:', dados);

    try {
      const response = await fetch('http://localhost:8080/login/', {
        method: 'POST',
        body: JSON.stringify(dados),
      });

      const data = await response.text();
      console.log('Resposta da API:', data);
    } catch (error) {
      console.error('Erro ao enviar os dados para a API:', error);
    }
  }

  /*
  const getProdutos = async () => {
    console.log('Listar Produtos');
    fetch("http://localhost:8080/login/")
      .then((response) => response.json())
      .then((responseJson) => (
        console.log(responseJson),
        setData(responseJson)
      ));
  }*/

  useEffect(() => {
    document.title = "Fazer Login";
    //getProdutos();
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

                    <a href={url} className="link">
                      <div className="texto_azul">Criar Conta</div>
                    </a>

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

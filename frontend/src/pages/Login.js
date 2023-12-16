import React, { useEffect, useState } from "react";

import Logo from "../assets/img/logo.png";
import CardInput from "../components/login/CardInput";
import BannerImagem from "../assets/img/banner.png";

function Login() {

  let criarConta = "/criarConta";
  let recuperarSenha = "/recuperarSenha";

  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroAutenticacao, setErroAutenticacao] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = {
      email,
      senha,
      url: window.location.href,
    };

    console.log('Dados a serem enviados:', dados);

    try {
      const response = await fetch("http://localhost:8080/login/", {
        method: 'POST',
        body: JSON.stringify(dados),
      });

      const data = await response.text();
      console.log('Resposta da API:', data);

      if (data === 'null"Administrador"') {
        window.location.href = '/administrador';
      }

      if (data === 'null') {
        window.location.href = '/home';
        return;
      }

      setErroAutenticacao(true);
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
                  <div className="texto">Fazer Login</div>

                  <a href={criarConta} className="link">
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

                    <a href={criarConta} className="link">
                      <div className="texto_azul">Criar Conta</div>
                    </a>

                  </div>
                </div>

                <form onSubmit={handleSubmit}>

                  <CardInput
                    id={"email"}
                    type={"text"}
                    value={email}
                    onChange={setEmail}
                    textoInput={"E-mail"}
                    placeholder={"E-mail..."}
                  />

                  <CardInput
                    id={"senha"}
                    type={"password"}
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
                  {erroAutenticacao && (
                    <div className='mensagem_content'>
                      <div className="mensagem_erro">Autenticação falhou, tente novamente</div>
                    </div>
                  )}
                </form>

                <div className="login_footer">
                  <div className="card_footer">
                    <div className="texto">Esqueceu a senha?</div>
                    <a href={recuperarSenha} className="link">
                      <div className="texto_azul">Recuperar Senha</div>
                    </a>
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

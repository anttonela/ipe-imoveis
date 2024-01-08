import md5 from 'md5';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";

import Logo from "../assets/img/logo.png";
import BannerImagem from "../assets/img/banner.png";
import InputSenha from "../components/login/InputSenha";
import CardInput from "../components/login/CardInput";

function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroAutenticacao, setErroAutenticacao] = useState(false);

  const irPara = useNavigate();

  const handleSubmit = async (e) => {
    setErroAutenticacao(false);
    e.preventDefault();

    const dados = {
      email,
      senha: md5(senha),
      url: window.location.href,
    };

    console.log('Dados a serem enviados:', dados);

    try {
      const response = await fetch("http://localhost:8080/login/", {
        method: 'POST',
        body: JSON.stringify(dados),
      });

      const data = await response.json();
      console.log('Resposta da API:', data);

      //verificandoSessao(data);
      /*
      if (data === 'Administrador') {
        console.log("ADMINISTRADOR");
        return;
        //window.location.href = '/administrador';
      }

      if (data === 'Usuário') {
        //  window.location.href = '/home';
        console.log("USUARIO");
        verificandoSessao()
        return;*/

      //console.log("ESTÁ EM ERRO");
      //setErroAutenticacao(true);
    } catch (error) {
      console.error('Erro ao enviar os dados para a API:', error);
      setErroAutenticacao(true);
    }
  };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <div className="login_container">

        <div className="login">

          <div className="login_conteudo">

            <div className="header_content">

              <div className="login_header">
                <div className="login_logo">
                  <img className="login_logo" src={Logo} />
                </div>

                <div className="login_header_texto">
                  <div className="texto">Fazer Login</div>

                  <Link to={`/criarConta`} className="link">
                    <div className="texto_claro">Criar Conta</div>
                  </Link>
                </div>

              </div>

            </div>

            <div className="login_card_content">

              <div className="login_card">

                <div className="titulo">Fazer Login</div>

                <div className="card_subtitulo">
                  <div className="login_subtitulo">
                    <div className="texto">Não tem uma conta?</div>

                    <Link to={`/criarConta`} className="link">
                      <div className="texto_azul">Criar Conta</div>
                    </Link>

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

                  <InputSenha
                    value={senha}
                    onChange={setSenha}
                    texto={"Senha"}
                    placeholder={"Senha..."}
                  />

                  <div className="login_botao">
                    <button className="botao_login" type="submit">
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

                    <Link to={`/recuperarSenha`} className="link">
                      <div className="texto_azul">Recuperar Senha</div>
                    </Link>

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

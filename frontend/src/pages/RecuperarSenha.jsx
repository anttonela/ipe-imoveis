import md5 from "md5";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";

import Logo from "../assets/img/logo.png";
import BannerImagem from "../assets/img/banner.png";
import CardInput from "../components/login/CardInput";
import InputSenha from "../components/login/InputSenha";

function RecuperarSenha() {

  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const [mensagemLogin, setMensagemLogin] = useState(false);
  const [inputCodigo, setInputCodigo] = useState(false);
  const [inputEmail, setInputEmail] = useState(true);
  const [respostaLocalhost, setRespostaLocalhost] = useState("");
  const [novaSenha, setNovaSenha] = useState(false);
  const [novaSenhaInput, setNovaSenhaInput] = useState("");
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState("");
  const [emailEnviado, setEmailEnviado] = useState("");
  const [horarioDeExpiracao, setHorarioDeExpiracao] = useState('');
  const [botaoEmailEnviado, setBotaoEmailEnviado] = useState(false);
  const [botaoEmail, setBotaoEmail] = useState(true);

  const irPara = useNavigate();
  const buttonRef = useRef(null);
  const dataAtual = new Date();

  const recuperarSenha = () => {
    setInputEmail(true);
    setInputCodigo(false);
    setMensagemLogin(false);
    setBotaoEmail(true);
    setBotaoEmailEnviado(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setBotaoEmailEnviado(true);
    setRespostaLocalhost(false);
    setMensagemLogin(false);
    setBotaoEmail(false);

    const dataAtual = new Date();
    dataAtual.setMinutes(dataAtual.getMinutes() + 10);

    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();

    const horaFormatada = hora < 10 ? `0${hora}` : hora;
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;

    const horario = `${horaFormatada}:${minutosFormatados}`;

    const dados = {
      email,
      horario: horario,
    };

    console.log("Dados a serem enviados:", dados);

    try {
      const response = await fetch("http://localhost:8080/recuperarSenha/", {
        method: "POST",
        body: JSON.stringify(dados),
      });

      const resposta = await response.text();
      console.log("Resposta da API:", resposta);

      if (resposta.length > 50) {
        setInputCodigo(true);
        setInputEmail(false);
        setEmailEnviado(email);
        setMensagemLogin(false);
        setHorarioDeExpiracao(horario);
        return;
      }

      setBotaoEmailEnviado(false);
      setBotaoEmail(true);
      setRespostaLocalhost("Email não cadastrado");
      setMensagemLogin(true);
    } catch (error) {
      console.error("Erro ao enviar os dados para a API:", error);
    }
  };

  const handleSubmitCodigo = async (e) => {
    e.preventDefault();

    let hora = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();

    if (minutos === 60) {
      minutos = 0;
      hora = hora + 1;
    }

    const horaFormatada = hora < 10 ? `0${hora}` : hora;
    const minutosFormatados = minutos < 10 ? `0${minutos}` : minutos;

    const horario = `${horaFormatada}:${minutosFormatados}`;

    const dados = {
      email: emailEnviado,
      horario: horario,
      horarioDeExpiracao: horarioDeExpiracao,
      codigo,
    };

    console.log("Dados a serem enviados:", dados);

    try {
      const response = await fetch("http://localhost:8080/confirmarCodigo/", {
        method: "POST",
        body: JSON.stringify(dados),
      });

      const resposta = await response.text();
      const respostaSemAspas = resposta.replace(/^"(.*)"$/, '$1');

      console.log("Resposta:", respostaSemAspas);

      if (respostaSemAspas === "Chave correta") {
        setNovaSenha(true);
        setInputCodigo(false);
        return;
      }

      setRespostaLocalhost(respostaSemAspas);
      setMensagemLogin(true);
    } catch (error) {
      console.error("Erro ao chamar a API:", error);
    }
  };

  const handleSubmitSenha = async (e) => {
    e.preventDefault();

    const dados = {
      email: emailEnviado,
      novaSenhaInput: md5(novaSenhaInput),
      confirmarNovaSenha: md5(confirmarNovaSenha),
    };

    console.log("Dados a serem enviados:", dados);

    try {
      const response = await fetch("http://localhost:8080/novaSenha/", {
        method: "POST",
        body: JSON.stringify(dados),
      });

      const resposta = await response.text();
      console.log("Resposta da API:", resposta);

      if (resposta !== '"Incorreto"') {
        irPara("/");
        return;
      }

      setRespostaLocalhost("Confirmação de senha está incorreta");
      setMensagemLogin(true);
    } catch (error) {
      console.error("Erro ao enviar os dados para a API:", error);
    }
  };

  useEffect(() => {
    document.title = "Recuperar Senha";

    if (codigo.length === 6 && buttonRef.current) {
      buttonRef.current.click();
    }

    if (codigo.length < 6) {
      setMensagemLogin(false);
    }
  }, [codigo]);

  return (
    <>
      <div className="login_container">
        <div className="login">
          <div className="login_conteudo">

            <div className="header_content">
              <div className="login_header">
                <Link to={`/`} className="login_logo">
                  <img className="login_logo" src={Logo} />
                </Link>

                <div className="login_header_texto">
                  <Link to={`/login`} className="link">
                    <div className="texto_claro">Fazer Login</div>
                  </Link>

                  <Link to={`/criarConta`} className="link">
                    <div className="texto_claro">Criar Conta</div>
                  </Link>
                </div>
                
              </div>
            </div>

            <div className="recuperar_senha_content">
              <div className="recuperar_senha_card_content">

                {inputEmail && (
                  <form onSubmit={handleSubmit}>
                    <div className="recuperar_senha">
                      <div className="titulo">Recuperando Senha</div>

                      <div className="enviar_email">
                        <CardInput
                          id={"email"}
                          value={email}
                          onChange={setEmail}
                          textoInput={"E-mail"}
                          placeholder={"E-mail..."}
                        />

                        <div className="recuperar_senha_botao">
                          {botaoEmail && (
                            <button className="botao_login" type="submit">
                              Enviar E-mail
                            </button>
                          )}

                          {botaoEmailEnviado && (
                            <button className="botao_login botao_hover" type="button">
                              Enviando...
                            </button>
                          )}
                        </div>

                        {mensagemLogin && (
                          <div className="mensagem_content">
                            <div className="mensagem_erro">
                              {respostaLocalhost}
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  </form>
                )}

                {inputCodigo && (
                  <form
                    onSubmit={handleSubmitCodigo}
                    className="enviar_email_content"
                  >
                    <div className="enviar_email">

                      <div className="texto_codigo_container">
                        <div className="titulo_codigo">
                          Verifique sua caixa principal ou de spam, o código irá ser expirado às {horarioDeExpiracao}
                        </div>
                      </div>

                      <div className="card_input">
                        <div className="input">
                          <div className="texto">Código</div>
                          <input
                            className="input_text"
                            type={"text"}
                            placeholder={"XXXXXX"}
                            value={codigo}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              if (inputValue.length <= 6) {
                                setCodigo(inputValue);
                              } else {
                                setCodigo(inputValue.slice(0, 6));
                              }
                            }}
                            required
                          />
                        </div>

                      </div>

                      <div className="recuperar_senha_botao">
                        <button ref={buttonRef} className="botao_login" type="submit">
                          Confirmar
                        </button>
                      </div>

                      <a onClick={recuperarSenha} className="mensagem_content">
                        <div className="mensagem_link">
                          Não recebeu? Envie novamente
                        </div>
                      </a>

                      {mensagemLogin && (
                        <div className="mensagem_content">
                          <div className="mensagem_erro">
                            {respostaLocalhost}
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                )}

                {novaSenha && (
                  <form onSubmit={handleSubmitSenha} className="nova_senha">
                    <InputSenha
                      value={novaSenhaInput}
                      onChange={setNovaSenhaInput}
                      texto={"Nova Senha"}
                      placeholder={"Nova Senha..."}
                    />

                    <InputSenha
                      value={confirmarNovaSenha}
                      onChange={setConfirmarNovaSenha}
                      texto={"Confirmar Nova Senha"}
                      placeholder={"Confirme..."}
                    />

                    <div className="nova_senha_botao_content">
                      <div className="recuperar_senha_botao">
                        <button className="botao_login" type="submit">
                          Salvar
                        </button>
                      </div>
                    </div>

                    {mensagemLogin && (
                      <div className="mensagem_content">
                        <div className="mensagem_erro">{respostaLocalhost}</div>
                      </div>
                    )}
                  </form>
                )}

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

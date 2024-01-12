import md5 from 'md5';
import React, { useEffect, useState } from 'react';

import Header from '../components/login/Header';
import BannerImagem from '../assets/img/banner.png';
import InputSenha from '../components/login/InputSenha';
import InputMaior from '../components/login/InputMaior';
import InputMetade from '../components/login/InputMetade';

function CriarConta() {

    useEffect(() => {
        document.title = "Criar Conta";
    });

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [mensagemLogin, setMensagemLogin] = useState(false);
    const [respostaLocalhost, setRespostaLocalhost] = useState('');
    const [emailEnviado, setEmailEnviado] = useState(false);
    const [botaoCriarConta, setBotaoCriarConta] = useState(true);
    const [botaoEnviandoEmail, setBotaoEnviandoEmail] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (senha.length < 6) {
            setEmailEnviado(false);
            setRespostaLocalhost("Senha deve ser maior que 6 caracteres");
            setMensagemLogin(true);
            return;
        }

        const dados = {
            email,
            senha: md5(senha),
            nome,
            sobrenome,
        };

        setMensagemLogin(false);
        setBotaoCriarConta(false);
        setBotaoEnviandoEmail(true);

        console.log('Dados a serem enviados:', dados);

        try {
            const response = await fetch('http://localhost:8080/criarConta/', {
                method: 'POST',
                body: JSON.stringify(dados),
            });

            const resposta = await response.text();
            console.log("Resposta da API: " + resposta);

            setBotaoEnviandoEmail(true);
            setBotaoCriarConta(false);

            if (resposta.length > 60) {
                setEmailEnviado(true);
                setMensagemLogin(false);
                setBotaoCriarConta(true);
                setBotaoEnviandoEmail(false);
                return;
            }

            setBotaoCriarConta(true);
            setBotaoEnviandoEmail(false);
            setEmailEnviado(false);
            setRespostaLocalhost(resposta);
            setMensagemLogin(true);
            
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
        }
    };

    return (
        <div className='login_container'>

            <div className='login'>
                <div className='content'>

                    <Header />

                    <div className='login_card_content'>
                        <div className='card_criar_conta'>
                            <div className='titulo'>Criar Conta</div>

                            <form onSubmit={handleSubmit}>
                                <div className='card_input_metade'>
                                    <InputMetade
                                        id={"nome"}
                                        value={nome}
                                        onChange={setNome}
                                        textoInput={"Nome"}
                                        placeholder={"Nome..."}
                                    />

                                    <InputMetade
                                        id={"sobrenome"}
                                        value={sobrenome}
                                        onChange={setSobrenome}
                                        textoInput={"Sobrenome"}
                                        placeholder={"Sobrenome..."}
                                    />
                                </div>

                                <InputMaior
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

                                <div className='login_botao'>

                                    {botaoCriarConta && (
                                        <input className='botao_login' type='submit' value={"Criar Conta"} id='submit' name='botao_criar_conta' />
                                    )}

                                    {botaoEnviandoEmail && (
                                        <input className='botao_login botao_hover' type='button' value={"Enviando E-mail..."} />
                                    )}
                                </div>

                                {mensagemLogin && (
                                    <div className='mensagem_content'>
                                        <div className="mensagem_erro">{respostaLocalhost}</div>
                                    </div>
                                )}

                                {emailEnviado && (
                                    <div className='mensagem_content'>
                                        <div className="mensagem_sucesso_email">E-mail para confirmação foi enviado, verifique sua caixa principal ou de spam.</div>
                                    </div>
                                )}

                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <div className='login_banner'>
                <img className='imagem_banner' src={BannerImagem} />
            </div>

        </div>
    );
}

export default CriarConta;
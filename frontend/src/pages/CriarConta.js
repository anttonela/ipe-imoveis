import React, { useEffect, useState } from 'react';

import Header from '../components/login/Header';
import InputMaior from '../components/login/InputMaior';
import InputMetade from '../components/login/InputMetade';
import BannerImagem from '../assets/img/banner.png';

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            email,
            senha,
            nome,
            sobrenome,
        };

        console.log('Dados a serem enviados:', dados);

        try {
            const response = await fetch('http://localhost:8080/criarConta/', {
                method: 'POST',
                body: JSON.stringify(dados),
            });

            const resposta = await response.text();
            console.log("Resposta da API" + resposta);

            if (
                resposta !== "Senha menor que 6 digitos" &&
                resposta !== "E-mail já cadastrado" &&
                resposta !== "E-mail inválido"
            ) {
                setRespostaLocalhost("E-mail para confirmação foi enviado, verifique sua caixa principal ou de spam.");
                setMensagemLogin(true);
                return;
            }

            setRespostaLocalhost(resposta);
            setMensagemLogin(true);
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
        }
    };

    return (
        <div className='login_container'>

            <div className='container_content'>
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

                                <InputMaior
                                    id={senha}
                                    type={"password"}
                                    value={senha}
                                    onChange={setSenha}
                                    textoInput={"Senha"}
                                    placeholder={"Senha..."}
                                />

                                <div className='login_botao'>
                                    <input className='botao_submit' type='submit' value={"Criar Conta"} id='submit' name='botao_criar_conta' />
                                </div>

                                {mensagemLogin && (
                                    <div className='mensagem_content'>
                                        <div className="mensagem_erro">{respostaLocalhost}</div>
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
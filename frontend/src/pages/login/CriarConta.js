import React, { useEffect } from 'react';

import '../../assets/css/login.css';
import '../../assets/fonts/fonts.css';

import Header from '../../components/login/Header';
import InputMaior from '../../components/login/InputMaior';
import InputMetade from '../../components/login/InputMetade';
import Banner from '../../components/login/Banner';

function CriarConta() {

    useEffect(() => {
        document.title = "Criar Conta"
    }, []);

    return (
        <div className='container'>

            <div className='container_content'>
                <div className='content'>

                    <Header />

                    <div className='card_content'>
                        <div className='card_criar_conta'>
                            <div className='titulo'>Criar Conta</div>

                            <div className='card_input_metade'>
                                <InputMetade
                                    textoInput={"Nome"}
                                    placeholder={"Nome..."}
                                    id={"nome"}
                                    name={"nome"} />

                                <InputMetade
                                    textoInput={"Sobrenome"}
                                    placeholder={"Sobrenome..."}
                                    id={"sobrenome"}
                                    name={"sobrenome"} />
                            </div>

                            <InputMaior
                                textoInput={"E-mail"}
                                placeholder={"E-mail..."}
                                id={"email"}
                                name={"email"} />

                            <InputMaior
                                textoInput={"Senha"}
                                placeholder={"Senha..."}
                                id={"senha"}
                                name={"name"} />

                            <div className='botao'>
                                <input className='botao_submit' type='submit' value={"Criar Conta"} id='submit' name='botao_criar_conta' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Banner />

        </div>
    );
}

export default CriarConta;
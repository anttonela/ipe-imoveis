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
                                    placeholder={"Nome..."} />
                                <InputMetade
                                    textoInput={"Sobrenome"}
                                    placeholder={"Sobrenome..."} />
                            </div>

                            <InputMaior
                                textoInput={"E-mail"}
                                placeholder={"E-mail..."} />
                            <InputMaior
                                textoInput={"Senha"}
                                placeholder={"Senha..."} />

                            <div className='botao'>
                                <button className='botao_submit' typeof='submit'>Criar Conta</button>
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
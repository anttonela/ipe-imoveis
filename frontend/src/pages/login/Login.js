import React, { useEffect } from 'react';

import '../../assets/css/login.css';
import '../../assets/fonts/fonts.css';

import CardInput from '../../components/login/CardInput';
import Logo from '../../assets/img/logo.png';
import Banner from '../../components/login/Banner';

function Login() {

    useEffect(() => {
        document.title = "Fazer Login"
    }, []);

    return (
        <>
            <div className='container'>
                <div className='container_content'>
                    <div className='content'>

                        <div className='header_content'>
                            <div className='header'>
                                <div className='logo'>
                                    <img className='logo' src={Logo} />
                                </div>

                                <div className='header_texto'>
                                    <div className='texto'>Fazer Login</div>
                                    <a className='link' href='#criar_conta'>
                                        <div className='texto_claro'>Criar Conta</div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='card_content'>
                            <div className='card'>
                                <div className='titulo'>Fazer Login</div>

                                <div className='card_subtitulo'>
                                    <div className='subtitulo'>
                                        <div className='texto'>Não tem uma conta?</div>
                                        <a href='#criar_conta' className='link'>
                                            <div className='texto_azul'>Criar Conta</div>
                                        </a>
                                    </div>
                                </div>

                                <CardInput
                                    textoInput={"E-mail"}
                                    placeholder={"E-mail..."}
                                />
                                <CardInput
                                    textoInput={"Senha"}
                                    placeholder={"Senha..."}
                                />

                                <div className='botao'>
                                    <a>
                                        <button className='botao_submit' type='submit'>Fazer Login</button>
                                    </a>
                                </div>

                                <div className='footer'>
                                    <div className='card_footer'>
                                        <div className='texto'>Esqueceu a senha?</div>
                                        <div className='texto_azul'>Recuperar Senha</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Banner />
            </div>
        </>
    );
}

export default Login;
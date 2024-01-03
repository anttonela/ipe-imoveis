import { useNavigate } from 'react-router-dom';

import IconFacebook from '../../assets/img/facebook.svg';
import IconWhatsapp from '../../assets/img/whatsapp.svg';
import LogoBranca from '../../assets/img/logo-branca.svg';
import IconInstagram from '../../assets/img/instagram.svg';

function Footer() {

    const irPara = useNavigate();

    const sairSessao = () => {
        irPara('/login');
    };

    return (
        <div className='footer_content'>
            <div className='footer'>
                <div className='footer_informacoes'>

                    <div className='footer_informacoes_texto'>
                        <div className='contato'>
                            <div className='footer_subtitulo'>Contato</div>
                            <div className='footer_texto'>(00) 0 0000-0000</div>
                            <div className='footer_texto'>e-mail@gmail.com</div>
                            <div className='footer_texto'>@ipemóveis</div>
                        </div>

                        <div className='endereco'>
                            <div className='footer_subtitulo'>Endereço</div>
                            <div className='footer_texto'>Estado</div>
                            <div className='footer_texto'>Cidade</div>
                            <div className='footer_texto'>Endereço</div>
                        </div>

                        <div className='geral'>
                            <div className='footer_subtitulo'>Geral</div>
                            <div className='footer_texto'>Termo de compromisso</div>
                            <div className='footer_texto'>Política de privacidade</div>
                            <button onClick={sairSessao} className='sair_sessao'>Sair</button>
                        </div>
                    </div>

                    <div className='redes_sociais'>
                        <img src={IconInstagram} className='rede_social_icon' />
                        <img src={IconFacebook} className='rede_social_icon' />
                        <img src={IconWhatsapp} className='rede_social_icon' />
                    </div>

                    <div className='logo_branca'>
                        <img src={LogoBranca} className='logo_branca' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
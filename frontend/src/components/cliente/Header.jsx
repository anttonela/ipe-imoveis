import { Link } from 'react-router-dom';

import IconEmail from '../../assets/img/email-icon.svg';
import LogoBranca from '../../assets/img/logo-branca.svg';
import IconTelefone from '../../assets/img/telefone-icon.svg';

function Header({ href, texto_botao }) {

    return (
        <div className='header'>
            <div className='header_informacoes'>

                <div className='logo'>
                    <img src={LogoBranca} className='imagem_logo' />
                </div>

                <div className='texto_banner_content'>
                    <div className='texto_banner'>
                        <div className='nome_empresa'>ARANTES IMÓVEIS</div>
                        <div className='header_texto'>Transformando desejos<br />em endereços.</div>

                        <div className='botao_content'>
                            <Link to={`${href}`} className='botao_header'>
                                {texto_botao}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='informacoes_pessoais'>
                    <div className='telefone'>
                        <img className='informacoes_pessoais_icon' src={IconTelefone} />
                        <div className='informacoes_pessoais_texto'>(00) 0 0000-0000</div>
                    </div>

                    <div className='email'>
                        <img className='informacoes_pessoais_icon' src={IconEmail} />
                        <div className='informacoes_pessoais_texto'>Email@gmail.com</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;
import LogoBranca from '../../assets/img/logo-branca.png';
import IconTelefone from '../../assets/img/telefone-icon.png';
import IconEmail from '../../assets/img/email-icon.png';

function Header({ href }) {
    return (
        <div className='header'>
            <div className='header_informacoes'>

                <div className='logo'>
                    <img src={LogoBranca} className='imagem_logo' />
                </div>

                <div className='texto_banner_content'>
                    <div className='texto_banner'>
                        <div className='nome_empresa'>IPÊ IMÓVEIS</div>
                        <div className='header_texto'>Transformando desejos<br />em endereços.</div>

                        <div className='botao_content'>
                            <button className='botao_header' type='submit' href={href}>
                                Ver Imóveis
                            </button>
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
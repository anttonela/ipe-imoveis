import Logo from '../../assets/img/logo.png';

function Header() {
    return (
        <div className="header_content">

            <div className="header">
                <div className="logo">
                    <img className="logo" src={Logo} />
                </div>

                <div className='header_texto'>
                    <a className='link'>
                        <div className='texto_claro'>Fazer Login</div>
                    </a>

                    <div className='texto'>Criar Conta</div>
                </div>
            </div>

        </div>
    );
}

export default Header;
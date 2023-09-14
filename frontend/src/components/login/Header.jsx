import Logo from '../../assets/img/logo.png';

function Header() {
    return (
        <div className="header_content">

            <div className="login_header">
                <div className="login_logo">
                    <img className="login_logo" src={Logo} />
                </div>

                <div className='login_header_texto'>
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
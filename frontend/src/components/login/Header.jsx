import React from 'react';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className="header_content">

            <div className="login_header">
                <div className="login_logo">
                    <img className="login_logo" src={Logo} />
                </div>

                <div className='login_header_texto'>
                    <Link to={`/login`} className='texto_claro link'>Fazer Login</Link>

                    <div className='texto'>Criar Conta</div>
                </div>
            </div>

        </div>
    );
}

export default Header;
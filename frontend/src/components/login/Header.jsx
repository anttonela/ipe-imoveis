import { Link, useNavigate } from 'react-router-dom';

import React from 'react';
import Logo from '../../assets/img/logo.png';

function Header() {

    const irPara = useNavigate();

    const voltarParaHome = () => {
        irPara("/home");
    };

    return (
        <div className="header_content">

            <div className="login_header">
                <div onClick={voltarParaHome} className="login_logo">
                    <img onClick={voltarParaHome} className="login_logo" src={Logo} />
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
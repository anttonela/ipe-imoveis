import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from '../../App';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import CriarConta from '../../pages/CriarConta';
import HomeAdministrativo from '../../pages/HomeAdministrativo';

function AppRoutes() {

    const [usuarioAdmin, setUsuarioAdmin] = useState(false);

    const PrivateRouteAdmin = ({ children }) => {
        const user = usuarioAdmin;
        return user ? children : <Navigate to={"/login"} />;
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="home" element={<Home />} />
                <Route path="login" element={
                    <Login
                        setUsuarioAdmin={setUsuarioAdmin}
                        redirecionarAdmin={'/home/administrador'}
                    />}
                />
                <Route path="criarConta" element={<CriarConta />} />
                <Route path="home/administrador" element={<PrivateRouteAdmin><HomeAdministrativo /></PrivateRouteAdmin>} />
            </Routes>
        </BrowserRouter>
    );

}

export default AppRoutes;

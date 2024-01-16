import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import CriarConta from '../../pages/CriarConta';
import RecuperarSenha from '../../pages/RecuperarSenha';
import HomeAdministrativo from '../../pages/HomeAdministrativo';

function AppRoutes() {

    const [usuarioAdmin, setUsuarioAdmin] = useState(false);
    const [atualizarHome, setAtualizarHome] = useState(false);

    const PrivateRouteAdmin = ({ children }) => {
        const user = usuarioAdmin;

        if (atualizarHome === true) {
            <Navigate to={children} />
            setAtualizarHome(false);
        }

        return user === true ? children : <Navigate to={"/login"} />;
    };

    const fecharModal = () => {
        setAtualizarHome(true);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="recuperarSenha"
                    element={<RecuperarSenha />}
                />

                <Route path="login" element={
                    <Login
                        setUsuarioAdmin={setUsuarioAdmin}
                        redirecionarAdmin={'/home/administrador'}
                    />}
                />

                <Route
                    path="criarConta"
                    element={<CriarConta />}
                />

                <Route
                    path="home/administrador"
                    element={
                        <PrivateRouteAdmin>
                            <HomeAdministrativo
                                fecharModal={fecharModal}
                                setAtualizarHome={setAtualizarHome}
                            />
                        </PrivateRouteAdmin>}
                />
                <Route
                    path='login/chave/*'
                    element={<Login />}
                />
            </Routes>
        </BrowserRouter>
    );

}

export default AppRoutes;

import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/style.css';
import './assets/fonts/fonts.css';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import CriarConta from './pages/CriarConta';
import HomeAdministrativo from './pages/HomeAdministrativo';
import RecuperarSenha from './pages/RecuperarSenha';
import Modal from './components/cliente/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
        <Route path="home" element={<Home />} />
        <Route path="home/administrador/*" element={<HomeAdministrativo />} />
        <Route path="login" element={<Login />} />
        <Route path="login/chave/*" element={<Login />} />
        <Route path="criarConta" element={<CriarConta />} />
        <Route path="recuperarSenha" element={<RecuperarSenha />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

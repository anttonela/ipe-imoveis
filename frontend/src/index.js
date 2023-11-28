import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/css/style.css';
import './assets/fonts/fonts.css';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import CriarConta from './pages/CriarConta';
import HomeAdministrativo from './pages/HomeAdministrativo';
import Card from './components/cliente/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        >
          <Route
            path=":classificacao/:idModal"
            element={<Card />}
          />
        </Route>
        <Route
          path="home"
          element={<Home />}
        />
        <Route
          path="administrador"
          element={<HomeAdministrativo />}
        />
        <Route
          path="login"
          element={<Login fetch="http://localhost:8080/login/" />}
        />
        <Route
          path="login/chave/*"
          element={<Login fetch="http://localhost:8080/chave" />}
        />
        <Route
          path="criarConta"
          element={<CriarConta />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import ReactDOM from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './assets/css/style.css';
import './assets/fonts/fonts.css';

import App from './App';
import Home from './pages/Home';
import Login from './pages/Login';
import CriarConta from './pages/CriarConta';
import HomeAdministrativo from './pages/HomeAdministrativo';
import Teste from './components/login/Teste';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "administrativo",
    element: <HomeAdministrativo />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "criarConta",
    element: <CriarConta />,
  },
  {
    path: "teste",
    element: <Teste />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
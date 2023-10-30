import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  let home = "/Home";
  let administrador = "/Administrador";
  let login = "/Login";
  let criarConta = "/CriarConta";

  return (
    <>
      <h1>Manual das Rotas</h1>
      <p>
        / - App<br></br>
        <a href={home} className="link">
          /home - Home Cliente<br></br>
        </a>

        <a href={administrador} className="link">
          /administrador - Home administrador<br></br>
        </a>

        <a href={login} className="link">
          /login - Login<br></br>
        </a>

        <a href={criarConta} className="link">
          /criarConta - Criar Conta
        </a>
      </p>
    </>

  );
}

export default App;
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  let home = "/Home";
  let administrativo = "/Administrativo";
  let login = "/Login";
  let criarConta = "/CriarConta";

  return (
    <div className="App">
      <>
        <h1>Manual das Rotas</h1>
        <p>
          / - App<br></br>
          <a href={home} className="link">
            /home - Home Cliente<br></br>
          </a>

          <a href={administrativo} className="link">
            /administrativo - Home administrador<br></br>
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
    </div>
  );
}

export default App;
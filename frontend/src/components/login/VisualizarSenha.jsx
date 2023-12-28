import React, { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

function VisualizarSenha({ inputRef }) {
  const [eyeIsClosed, setEyeState] = useState(false);

  const mostrarSenha = () => {
    if (inputRef.current.type === "password") {
      setEyeState(true);
      inputRef.current.type = "text";
    } else {
      setEyeState(false);
      inputRef.current.type = "password";
    }
  };

  return (
    <div className="visualizar_senha_content" onClick={mostrarSenha}>
      {eyeIsClosed ? (
        <VscEyeClosed className="visualizar_senha" />
      ) : (
        <VscEye className="visualizar_senha" />
      )}
    </div>
  );
}

export default VisualizarSenha;

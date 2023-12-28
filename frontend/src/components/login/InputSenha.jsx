import React, { useRef } from "react";

import VisualizarSenha from "./VisualizarSenha";

function InputSenha({ value, onChange, texto, placeholder }) {

    const inputRef = useRef(null);

    return (
        <div className="card_input" onSubmit={(event) => event.preventDefault()}>
            <div className="input">
                <div className="texto">{texto}</div>
                <div className="input_visualizar_content">
                    <input
                        ref={inputRef}
                        className="input_visualizar"
                        type={"password"}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => {
                            onChange(e.target.value);
                        }}
                        required
                    />
                    <VisualizarSenha inputRef={inputRef} />
                </div>
            </div>
        </div>
    );
}

export default InputSenha;
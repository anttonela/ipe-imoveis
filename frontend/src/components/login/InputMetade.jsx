function InputMetade({ textoInput, placeholder }) {
    return (
        <div className="input_metade">
            <div className="texto">{textoInput}</div>
            <input className="input_text_metade" type="text" placeholder={placeholder} />
        </div>
    );
}

export default InputMetade;
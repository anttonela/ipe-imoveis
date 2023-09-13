function InputMetade({ textoInput, placeholder, id, name }) {
    return (
        <div className="input_metade">
            <div className="texto">{textoInput}</div>
            <input className="input_text_metade" type="text" placeholder={placeholder} id={id} name={name} required />
        </div>
    );
}

export default InputMetade;
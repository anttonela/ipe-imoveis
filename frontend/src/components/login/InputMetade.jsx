function InputMetade({ id, value, onChange, textoInput, placeholder }) {
    return (
        <div className="input_metade">
            <div className="texto">{textoInput}</div>
            <input
                className="input_text_metade"
                type="text"
                placeholder={placeholder}
                id={id}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                required
            />
        </div>
    );
}

export default InputMetade;
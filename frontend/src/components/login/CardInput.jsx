function CardInput({ id, type, value, onChange, textoInput, placeholder }) {
    return (
        <div className="card_input">
            <div className="input">
                <div className="texto">{textoInput}</div>
                <input
                    className="input_text"
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                    required
                />
            </div>

        </div>
    );
}

export default CardInput;
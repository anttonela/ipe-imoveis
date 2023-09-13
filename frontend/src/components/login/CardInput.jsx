function CardInput({ textoInput, placeholder }) {
    return (
        <div className="card_input">
            <div className="input">
                <div className="texto">{textoInput}</div>
                <input className="input_text" type="text" placeholder={placeholder} />
            </div>
        </div>
    );
}

export default CardInput;
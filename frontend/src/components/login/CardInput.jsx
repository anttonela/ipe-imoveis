function CardInput({ id, value, onChange, textoInput, placeholder }) {
    return (
        <div className="card_input">
            <div className="input">
                <div className="texto">{textoInput}</div>
                <input className="input_text" type="text" placeholder={placeholder} id={id} value={value}
                    onChange={(e) => {
                        { onChange } (e.target.value);
                    }} />
            </div>

        </div>
    );
}

export default CardInput;
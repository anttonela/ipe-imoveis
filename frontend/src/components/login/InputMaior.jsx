function InputMaior({ id, type, value, onChange, textoInput, placeholder }) {
    return (
        <div className='card_input_maior'>
            <div className='input_maior'>
                <div className='texto'>{textoInput}</div>
                <input
                    className='input_text'
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

export default InputMaior;
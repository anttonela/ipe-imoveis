function InputMaior({ textoInput, placeholder }) {
    return (
        <div className='card_input_maior'>
            <div className='input_maior'>
                <div className='texto'>{textoInput}</div>
                <input className='input_text' type='text' placeholder={placeholder} />
            </div>
        </div>
    );
}

export default InputMaior;
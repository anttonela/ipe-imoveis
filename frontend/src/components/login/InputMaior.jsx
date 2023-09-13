function InputMaior({ textoInput, placeholder, id, name }) {
    return (
        <div className='card_input_maior'>
            <div className='input_maior'>
                <div className='texto'>{textoInput}</div>
                <input className='input_text' type='text' placeholder={placeholder} id={id} name={name} required />
            </div>
        </div>
    );
}

export default InputMaior;
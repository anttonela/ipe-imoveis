function Subtitulo({ id, nome }) {
    return (
        <div id={id} className='segundo_subtitulo_content'>
            <div className='segundo_subtitulo'>{nome}</div>
        </div>
    );
}

export default Subtitulo;
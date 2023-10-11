function PrimeiroSubtitulo({ id, nome }) {
    return (
        <div id={id} className='subtitulo_content'>
            <div className='subtitulo'>{nome}</div>
        </div>
    );
}

export default PrimeiroSubtitulo;
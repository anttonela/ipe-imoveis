import React, { useState } from 'react';
import ConteudoHome from '../components/cliente/ConteudoHome';
import Header from '../components/cliente/Header';
import ResultadoFiltro from '../components/cliente/ResultadoFiltro';

function Home() {
    const [resultadoFiltro, setResultadoFiltro] = useState();
    const [card, setCard] = useState(true);

    function mudandoTela() {
        setCard(!card);
        setResultadoFiltro(!resultadoFiltro);
    }

    return (
        <>
            {resultadoFiltro && (
                <>
                    <ResultadoFiltro onClick={mudandoTela}/>
                </>
            )}

            {card && (
                <>
                    <ConteudoHome onClick={mudandoTela} />
                </>
            )}
        </>
    );
}

export default Home;
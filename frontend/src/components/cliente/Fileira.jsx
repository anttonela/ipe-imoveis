import { useState } from "react";

import FileiraCard from "./FileiraCard";
import FileiraCardSombreado from "./FileiraCardSombreado";

function Fileira({ fetchUrl, href }) {

    const [cardSombreado, setCardSombreado] = useState();
    const [card, setCard] = useState(true);

    const descerParaImoveis = () => {
        const elemento = document.getElementById(`${href}`);

        if (elemento) {
            window.scrollTo({
                top: elemento.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    function expandindoCard() {
        setCard(!card);
        setCardSombreado(!cardSombreado);
    }

    return (
        <>
            {cardSombreado && (
                <FileiraCardSombreado
                    fetchUrl={fetchUrl}
                />
            )}

            {cardSombreado && (
                <div className='botao_ver_mais'>
                    <div onClick={descerParaImoveis}>
                        <button className="ver_mais" onClick={expandindoCard}>Ver Menos</button>
                    </div>
                </div>
            )}

            {card && (
                <FileiraCard
                    fetchUrl={fetchUrl}
                />
            )}

            {card && (
                <div className='botao_ver_mais'>
                    <button className="ver_mais" onClick={expandindoCard}>Ver Mais</button>
                </div>
            )}
        </>
    );
}

export default Fileira;
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import FileiraCard from "./FileiraCard";
import FileiraCardSombreado from "./FileiraCardSombreado";

function Fileira({ fetchUrl, href }) {

    const [cardSombreado, setCardSombreado] = useState();
    const [card, setCard] = useState(true);

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
                    <Link to={`${href}`}>
                        <button className="ver_mais" onClick={expandindoCard}>Ver Menos</button>
                    </Link>
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
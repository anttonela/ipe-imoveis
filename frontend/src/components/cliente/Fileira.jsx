import { useState } from "react";
import FileiraCard from "./FileiraCard";
import FileiraCardSombreado from "./FileiraCardSombreado";

function Fileira() {

    const [cardSombreado, setCardSombreado] = useState();
    const [card, setCard] = useState(true);

    function expandindoCard() {
        setCard(!card);
        setCardSombreado(!cardSombreado);
    }

    return (
        <>
            {cardSombreado && (
                <FileiraCardSombreado />
            )}

            {cardSombreado && (
                <div className='content_botao_ver_mais'>
                    <button class="botao_ver_mais" onClick={expandindoCard}>Ver Menos</button>
                </div>
            )}

            {card && (
                <FileiraCard />
            )}

            {card && (
                <div className='content_botao_ver_mais'>
                    <button class="botao_ver_mais" onClick={expandindoCard}>Ver Mais</button>
                </div>
            )}
        </>
    );
}

export default Fileira;
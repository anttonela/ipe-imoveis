import { useEffect, useState } from "react";
import FileiraCardSombreado from "./FileiraCardSombreado";
import Header from "./Header";
import values from 'lodash/values';
import PrimeiroSubtitulo from "./PrimeiroSubtitulo";

function ResultadoFiltro({ onClick }) {
    const [data, setData] = useState([]);

    const getProdutos = async () => {
        fetch("http://localhost:8080/filtroView/")
            .then((response) => response.json())
            .then((responseJson) => (
                setData(responseJson)
            ));
    }

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <>
            <Header
                onClick={onClick}
            />

            {values(data).map(produto => (
                <PrimeiroSubtitulo
                    key={produto.id_produto}
                    nome={produto.classificacao + " > " + produto.tipo + " > " + produto.cidade}
                />
            ))}

            <FileiraCardSombreado
                fetchUrl={"http://localhost:8080/filtroView/"}
            />
        </>
    );
}

export default ResultadoFiltro;

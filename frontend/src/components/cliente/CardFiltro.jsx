import values from 'lodash/values';
import React, { useState, useEffect } from 'react';

import CardSombreado from "./CardSombreado";

function CardFiltro() {
    const [data, setData] = useState([]);

    const getProdutos = async () => {
        fetch("http://localhost:8080/filtro")
            .then((response) => response.json())
            .then((responseJson) => (
                setData(responseJson)
            ));
    }

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <div className="card_content_administrativo">
            <div className="content_administrativo">

                {values(data).map(produto => (

                    <CardSombreado
                        dados=
                        {{
                            cidade: produto.cidade,
                            breve_descricao: produto.breve_descricao,
                            valor: produto.id,
                            quantidade_parcelas: produto.quantidade_parcelas
                        }}

                        informacoesModal=
                        {{
                            id: produto.id,
                            cidade: produto.cidade,
                            valor: "R$: " + produto.valor,
                            descricao: produto.descricao
                        }}
                    />

                ))}
            </div>
        </div>
    );
}

export default CardFiltro;
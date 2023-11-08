import values from 'lodash/values';
import React, { useState, useEffect } from 'react';

import CardSombreado from "./CardSombreado";

function FileiraCardSombreado({ fetchUrl }) {
    const [data, setData] = useState([]);

    const getProdutos = async () => {
        fetch(fetchUrl)
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
                        key={produto.id_produto}
                        dados=
                        {{
                            cidade: produto.cidade,
                            breve_descricao: produto.breve_descricao,
                            valor: produto.valor,
                            quantidade_parcelas: produto.quantidade_parcelas
                        }}

                        informacoesModal=
                        {{
                            id: produto.id_produto,
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

export default FileiraCardSombreado;
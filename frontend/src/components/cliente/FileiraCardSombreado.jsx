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
                        classificacao={produto.classificacao}
                        idCard={produto.id}
                        key={produto.id}
                        cidade={produto.cidade}
                        breve_descricao={produto.breve_descricao}
                        valor={produto.valor}
                        situacao={produto.situacao}

                        informacoes=
                        {{
                            id: produto.id,
                            cidade: produto.cidade,
                            valor: produto.valor,
                            descricao: produto.descricao,
                            link_whatsapp: produto.link_whatsapp,
                            link_facebook: produto.link_facebook,
                            link_instagram: produto.link_instagram,
                            link_olx: produto.link_olx,
                            classificacao: produto.classificacao,
                            tipo: produto.tipo,
                        }}
                    />
                ))}

            </div>
        </div>
    );
}

export default FileiraCardSombreado;
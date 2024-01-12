import values from 'lodash/values';
import React, { useState, useEffect } from 'react';

import Card from './Card';

function FileiraCardSombreado({ setAtualizarHome, fetchUrl }) {

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

                    <Card
                        setAtualizarHome={setAtualizarHome}
                        cidade={produto.cidade}
                        breve_descricao={produto.breve_descricao}
                        valor={produto.valor}
                        situacao={produto.situacao}
                        classificacao={produto.classificacao}
                        idCard={produto.id}
                        tipo={produto.tipo}
                        descricao={produto.descricao}
                        whatsapp={produto.link_whatsapp}
                        instagram={produto.link_instagram}
                        facebook={produto.link_facebook}
                        olx={produto.link_olx}
                    />

                ))}
            </div>
        </div>
    );
}

export default FileiraCardSombreado;
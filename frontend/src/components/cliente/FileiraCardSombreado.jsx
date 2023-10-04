import CardSombreado from "./CardSombreado";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import React, { useState, useEffect } from 'react';
import values from 'lodash/values';

function FileiraCardSombreado() {
    const [data, setData] = useState([]);

    const getProdutos = async () => {
        console.log('Listar Produtos');
        fetch("http://localhost:8080")
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
                            valor: produto.id_produto,
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
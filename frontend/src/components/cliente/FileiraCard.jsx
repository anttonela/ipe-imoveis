import values from 'lodash/values';
import Carousel from "react-elastic-carousel";
import React, { useState, useEffect } from 'react';

import Card from './Card';
import SetaDireita from '../../assets/img/seta-direita.png';
import SetaEsquerda from '../../assets/img/seta-esquerda.png';


function FileiraCard() {
    const [data, setData] = useState([]);

    const getProdutos = async () => {
        fetch("http://localhost:8080")
            .then((response) => response.json())
            .then((responseJson) => (
                setData(responseJson)
            ));
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 5 },
    ];

    useEffect(() => {
        getProdutos();
    }, []);

    return (
        <div className='espaco_card_content'>
            <div className="card_content">

                <Carousel
                    breakPoints={breakPoints}
                    renderArrow={({ type, onClick }) => (
                        <div className="arrow-container">
                            <img
                                src={type === 'PREV' ? SetaEsquerda : SetaDireita}
                                alt={type === 'PREV' ? 'Previous' : 'Next'}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    cursor: 'pointer',
                                }}
                                onClick={onClick}
                            />
                        </div>
                    )}
                    pagination={false}
                >
                    {values(data).map(produto => (

                        <Card
                            cidade={produto.id_produto + " - " + produto.cidade}
                            breve_descricao={produto.breve_descricao}
                            valor={produto.valor}
                            quantidade_parcelas={produto.quantidade_parcelas + "x de R$:" + produto.valor_mensal}

                            informacoesModal=
                            {{
                                id: produto.id_produto,
                                cidade: produto.cidade,
                                valor: "R$: " + produto.valor,
                                descricao: produto.descricao
                            }}
                        />

                    ))}
                </Carousel>

            </div>
        </div>
    );
}

export default FileiraCard;
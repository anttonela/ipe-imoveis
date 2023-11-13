import values from 'lodash/values';
import Carousel from "react-elastic-carousel";
import React, { useState, useEffect } from 'react';

import Card from './Card';
import SetaDireita from '../../assets/img/seta-direita.svg';
import SetaEsquerda from '../../assets/img/seta-esquerda.svg';

function FileiraCard({ fetchUrl }) {
    const [data, setData] = useState([]);

    const getProdutos = async () => {
        fetch(fetchUrl)
            .then((response) => response.json())
            .then((responseJson) => (
                setData(responseJson)
            ));
    }

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1000, itemsToShow: 4 },
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
                        <div className="setas">
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
                            classificacao={produto.classificacao}
                            key={produto.id_produto}
                            idCard={produto.id_produto}
                            cidade={produto.id_produto + " - " + produto.cidade}
                            breve_descricao={produto.breve_descricao}
                            valor={produto.valor}
                            situacao={produto.situacao}

                            informacoes=
                            {{
                                id: produto.id_produto,
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
                </Carousel>

            </div>
        </div>
    );
}

export default FileiraCard;
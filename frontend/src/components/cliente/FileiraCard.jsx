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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            id,
        };

        console.log('Dados a serem enviados:', dados);

        try {
            const response = await fetch('http://localhost:8080/novoImovel', {
                method: 'POST',
                body: JSON.stringify(dados),
            });

            const data = await response.text();
            console.log('Resposta da API:', data);

            setProdutoAdicionado(true);
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
        }
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
                    <form onSubmit={handleSubmit}>
                        {values(data).map(produto => (

                            <Card
                                idCard={produto.id_produto}
                                cidade={produto.id_produto + " - " + produto.cidade}
                                breve_descricao={produto.breve_descricao}
                                valor={produto.valor}
                            />

                        ))}
                    </form>
                </Carousel>

            </div>
        </div>
    );
}

export default FileiraCard;
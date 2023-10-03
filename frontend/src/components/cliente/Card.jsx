import axios from 'axios';
import { useEffect, useState } from 'react';
import FotoImovel from '../../assets/img/imoveis.png';
import ModalInformacoes from './ModalInformacoes';
import values from 'lodash/values';

function Card({ dados }) {
    return (
        <>
            <a href='#modal_informacoes' className='link'>

                <div className='card'>
                    <div className='card_imagem'>
                        <img src={FotoImovel} className='card_imagem' />
                    </div>

                    <div className='card_informacoes_content'>
                        <div className='card_informacoes'>
                            <div className='card_sobre'>
                                <div className='nome_produto inter_700'>{dados.cidade}</div>
                                <div className='card_texto'>{dados.breve_descricao}</div>
                            </div>

                            <div className='card_valor'>
                                <div className='valor_produto inter_700'>R$: {dados.valor}</div>
                                <div className='card_texto'>{dados.quantidade_parcelas}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </a>

            <div id='modal_informacoes' className="modal">

                <ModalInformacoes />

            </div>
        </>
    );
}

export default Card;
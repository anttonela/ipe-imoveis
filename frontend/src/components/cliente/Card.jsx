import values from 'lodash/values';
import { useEffect, useState } from 'react';
import FotoImovel from '../../assets/img/imoveis.png';
import ModalInformacoes from './ModalInformacoes';

function Card({ idCard, href, cidade, breve_descricao, valor, situacao, informacoes }) {

    return (
        <>
            <a
                className='link'
                href={idCard}
            >

                <div className='card'>

                    <div className='card_imagem'>
                        <img
                            src={FotoImovel}
                            className='card_imagem'
                        />
                    </div>

                    <div className='card_informacoes_content'>
                        <div className='card_informacoes'>
                            <div className='card_sobre'>
                                <div className='nome_produto inter_700'>{cidade}</div>
                                <div className='card_texto'>{breve_descricao}</div>
                            </div>

                            <div className='card_valor'>
                                <div className='valor_produto inter_700'>R$: {valor}</div>
                                <div className='card_texto'>{situacao}</div>
                            </div>
                        </div>
                    </div>

                </div>

            </a>

            <div className='modal' id={idCard}>
                <ModalInformacoes
                    id={informacoes.id}
                    cidade={informacoes.cidade}
                    valor={informacoes.valor}
                    descricao={informacoes.descricao}
                    linkWhatsapp={informacoes.link_whatsapp}
                    linkFacebook={informacoes.link_facebook}
                    linkInstagram={informacoes.link_instagram}
                    linkOlx={informacoes.link_olx}
                    classificacao={informacoes.classificacao}
                    tipo={informacoes.tipo}
                />
            </div>
        </>
    );
}

export default Card;
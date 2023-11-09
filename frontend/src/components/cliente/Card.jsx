import values from 'lodash/values';
import { useEffect, useState } from 'react';
import FotoImovel from '../../assets/img/imoveis.png';
import ModalInformacoes from './ModalInformacoes';

function Card({ idCard, cidade, breve_descricao, valor, situacao, informacoes }) {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => {
        console.log('Abrindo modal...');
        setModalAberto(true);
    };

    const fecharModal = () => {
        console.log('Fechando modal...');
        setModalAberto(false);
    };

    return (
        <>
            <div
                className='link'
                id={idCard}
                onClick={() => {
                    console.log('Link clicado...');
                    abrirModal();
                }}
            >

                <div className='card' id={idCard}>

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

            </div>

            {modalAberto && (
                <div className='modal'>
                    <ModalInformacoes
                        onClick={fecharModal}
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
            )}
        </>
    );
}

export default Card;
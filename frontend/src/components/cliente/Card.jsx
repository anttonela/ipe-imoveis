import { useState } from 'react';

import ModalInformacoes from './Modal';
import FotoImovel from '../../assets/img/imoveis.png';

function Card({ classificacao, idCard, cidade, breve_descricao, valor, situacao, informacoes }) {

    const [modalInformacoes, setModalInformacoes] = useState(false);

    const abrirModal = () => {
        setModalInformacoes(true);
    };

    const fecharModal = () => {
        setModalInformacoes(false);
    }

    switch (classificacao) {
        case "Imóvel":
            classificacao = "imovel";
            break;
        case "Máquinas Agrícolas":
            classificacao = "maquinasAgricolas";
            break;
        case "Outros":
            classificacao = "outros";
            break;
    }

    return (
        <>
            <div onClick={abrirModal} className='pointer'>

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
                                <div className='valor_produto inter_700'>{valor}</div>
                                <div className='card_texto'>{situacao}</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {modalInformacoes && (
                <ModalInformacoes
                    fecharModal={fecharModal}
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
            )}
        </>
    );
}

export default Card;
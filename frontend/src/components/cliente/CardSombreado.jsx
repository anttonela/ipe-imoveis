import { useState } from 'react';
import ImagemImoveis from '../../assets/img/imoveis.png';
import ModalInformacoes from './Modal';

function CardSombreado({ classificacao, idCard, cidade, breve_descricao, valor, situacao, informacoes }) {

    const [modalInformacoes, setModalInformacoes] = useState(false);

    const abrirModal = () => {
        setModalInformacoes(true);
    };

    const fecharModal = () => {
        setModalInformacoes(false);
    }

    return (
        <>
            <div className="espacamento_fileira">
                <div className='pointer' onClick={abrirModal}>

                    <div className="card card_administrativo" id={idCard}>
                        <div className="card_imagem">
                            <img className="card_imagem" src={ImagemImoveis} />
                        </div>

                        <div className='card_informacoes_content'>
                            <div className='card_informacoes'>

                                <div className='card_sobre'>
                                    <div className='card_editar'>
                                        <div className='nome_produto inter_700'>{idCard} - {cidade}</div>
                                    </div>

                                    <div className='card_texto inter_500'>{breve_descricao}</div>
                                </div>

                                <div className='card_valor'>
                                    <div className='valor_produto inter_700'>{valor}</div>
                                    <div className='card_situacao'>{situacao}</div>
                                </div>
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

export default CardSombreado;
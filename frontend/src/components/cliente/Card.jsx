import FotoImovel from '../../assets/img/imoveis.png';
import ModalInformacoes from './ModalInformacoes';

import UploadFotos from '../administrador/UploadFotos';

function Card({ cidade, breve_descricao, valor, informacoesModal }) {
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
                                <div className='nome_produto inter_700'>{cidade}</div>
                                <div className='card_texto'>{breve_descricao}</div>
                            </div>

                            <div className='card_valor'>
                                <div className='valor_produto inter_700'>R$: {valor}</div>
                            </div>
                        </div>
                    </div>

                </div>

            </a>

            <div id='modal_informacoes' className="modal">

                <ModalInformacoes
                    id={informacoesModal.id}
                    cidade={informacoesModal.cidade}
                    valor={informacoesModal.valor}
                    descricao={informacoesModal.descricao}
                    linkWhatsapp={informacoesModal.linkWhatsapp}
                    linkFacebook={informacoesModal.linkFacebook}
                    linkInstagram={informacoesModal.linkInstagram}
                    linkOlx={informacoesModal.linkOlx}
                />

            </div>
        </>
    );
}

export default Card;
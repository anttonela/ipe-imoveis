import axios from 'axios';
import { useEffect, useState } from 'react';
import values from 'lodash/values';

import IconSetaVoltar from '../../assets/img/seta-voltar-modal.png';
import IconWhatsapp from '../../assets/img/whatsapp.png';
import IconFacebook from '../../assets/img/facebook.png';
import IconInstagram from '../../assets/img/instagram.png';
import IconOlx from '../../assets/img/olx.png';

function Modal() {
    return (
        <>
            <div className="modal_content">
                <div className="sair_modal">
                    <a className="seta_voltar_modal" href="#">
                        <img src={IconSetaVoltar} />
                    </a>
                </div>

                <div className='imagem_modal_content'>
                    <div className='imagem_modal'>
                        <div className='container_passar_imagem'>
                            <div className='passar_imagem_cliente'>
                                <div className='botao_passa_imagem'></div>
                                <div className='botao_passa_imagem clicado'></div>
                                <div className='botao_passa_imagem'></div>
                                <div className='botao_passa_imagem'></div>
                                <div className='botao_passa_imagem'></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='modal_informacoes'>

                    <div className='modal_nome_produto inter_700'>id</div>

                    <div className='modal_valor'>
                        <div className='modal_cidade_produto inter_700'>cidade</div>
                        <div className='modal_preco inter_700'>valor</div>
                    </div>

                    <div className='modal_descricao inter_500'>
                        <div className='modal_texto inter_700'>Descrição</div>
                    </div>
                    <div className='modal_contatos inter_700'>Entre em Contato</div>

                    <div className='modal_redes_sociais_container'>
                        <button className='modal_rede_social modal_whatsapp'>
                            <img className='modal_icon' src={IconWhatsapp} />
                        </button>
                        <button className='modal_rede_social modal_facebook'>
                            <img className='modal_icon' src={IconFacebook} />
                        </button>
                        <button className='modal_rede_social modal_instagram'>
                            <img className='modal_icon' src={IconInstagram} />
                        </button>
                        <button className='modal_rede_social modal_olx'>
                            <img className='modal_olx_icon' src={IconOlx} />
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Modal;
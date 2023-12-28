import React from 'react';
import { useNavigate } from 'react-router-dom';

import IconOlx from '../../assets/img/olx.svg';
import IconWhatsapp from '../../assets/img/whatsapp.svg';
import IconFacebook from '../../assets/img/facebook.svg';
import IconInstagram from '../../assets/img/instagram.svg';
import IconSetaVoltar from '../../assets/img/seta-voltar.svg';

function Modal({ fecharModal, cidade, valor, descricao, linkWhatsapp, linkFacebook, linkInstagram, linkOlx, classificacao, tipo }) {

    return (
        <div className='modal_editar_produto'>
            <div className="modal_cliente_content">
                <div className="sair_modal">
                    <div className="seta_voltar_modal">
                        <img onClick={fecharModal} src={IconSetaVoltar} />
                    </div>
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

                    <div className='modal_nome_produto inter_700'>{classificacao} - {tipo}</div>

                    <div className='modal_valor'>
                        <div className='modal_cidade_produto inter_700'>{cidade}</div>
                        <div className='modal_preco inter_700'>{valor}</div>
                    </div>

                    <div className='modal_descricao inter_500'>
                        <div className='modal_texto inter_700'>Descrição</div>
                        {descricao}<br></br><br></br>
                    </div>

                    <div className='modal_contatos inter_700'>Entre em Contato</div>

                    <div className='modal_redes_sociais_container'>
                        {linkWhatsapp && (
                            <a className='modal_rede_social whatsapp' href={linkWhatsapp}>
                                <img className='modal_icon' src={IconWhatsapp} alt="WhatsApp" />
                            </a>
                        )}
                        {!linkWhatsapp && (
                            <div className='modal_rede_social whatsapp'>
                                <img className='modal_icon' src={IconWhatsapp} alt="WhatsApp" />
                            </div>
                        )}
                        {linkInstagram && (
                            <a className='modal_rede_social instagram' href={linkInstagram}>
                                <img className='modal_icon' src={IconInstagram} alt="Instagram" />
                            </a>
                        )}
                        {!linkInstagram && (
                            <div className='modal_rede_social instagram'>
                                <img className='modal_icon' src={IconInstagram} alt="Instagram" />
                            </div>
                        )}
                        {linkFacebook && (
                            <a className='modal_rede_social facebook' href={linkFacebook}>
                                <img className='modal_icon' src={IconFacebook} alt="Facebook" />
                            </a>
                        )}
                        {!linkFacebook && (
                            <div className='modal_rede_social facebook'>
                                <img className='modal_icon' src={IconFacebook} alt="Facebook" />
                            </div>
                        )}
                        {linkOlx && (
                            <a className='modal_rede_social olx' href={linkOlx}>
                                <img className='icon_olx' src={IconOlx} alt="Olx" />
                            </a>
                        )}
                        {!linkOlx && (
                            <div className='modal_rede_social olx'>
                                <img className='icon_olx' src={IconOlx} alt="Olx" />
                            </div>
                        )}
                    </div>
                </div>
                <div className='espacamento'></div>
            </div>
        </div>
    );
}

export default Modal;

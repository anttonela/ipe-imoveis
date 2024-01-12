import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

import maquinaAmarela1 from '/home/ipeweb/Documents/ipe_imoveis/frontend/src/assets/img/maquina_amarela.jpg';
import maquinaAmarela2 from '../../assets/img/maquina_amarela_2.avif';
import maquinaAmarela4 from '../../assets/img/maquina_amarela_4.webp';
import SetaDireita from '../../assets/img/seta-direita.svg';
import SetaEsquerda from '../../assets/img/seta-esquerda.svg';

import IconOlx from '../../assets/img/olx.svg';
import IconWhatsapp from '../../assets/img/whatsapp.svg';
import IconFacebook from '../../assets/img/facebook.svg';
import IconInstagram from '../../assets/img/instagram.svg';
import IconSetaVoltar from '../../assets/img/seta-voltar.svg';

function Modal({ fecharModal, cidade, valor, descricao, linkWhatsapp, linkFacebook, linkInstagram, linkOlx, classificacao, tipo }) {

    const [redeSocialSemLink, setRedeSocialSemLink] = useState('');

    const verificarLink = (redeSocial) => {
        setRedeSocialSemLink(redeSocial);
    };

    const images = [
        maquinaAmarela1,
        maquinaAmarela2,
        maquinaAmarela4,
    ];

    return (
        <div className='modal_editar_produto'>
            <div className="modal_cliente_content">

                <div className='sair_modal'>
                    <img className='sair_modal_seta' onClick={fecharModal} src={IconSetaVoltar} />
                    <div className='sair_modal_texto inter_500'>Voltar</div>
                </div>

                <div className='imagem_modal_content_cliente'>
                    <div className='imagem_modal_cliente'>
                        <Carousel
                            itemsToShow={1}
                            renderArrow={({ type, onClick }) => (
                                <div className="setas">
                                    <img
                                        src={type === 'PREV' ? SetaEsquerda : SetaDireita}
                                        alt={type === 'PREV' ? 'Previous' : 'Next'}
                                        style={{
                                            width: '3vh',
                                            height: '3.8vh',
                                            cursor: 'pointer',
                                        }}
                                        onClick={onClick}
                                    />
                                </div>
                            )}
                            renderPagination={({ pages, activePage, onClick }) => (
                                <div className="passar_imagem">
                                    {pages.map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => onClick(page)}
                                            className={activePage === page ? 'botao_passa_imagem clicado' : 'botao_passa_imagem'}
                                        >
                                        </button>
                                    ))}
                                </div>
                            )}
                        >
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Imagem ${index + 1}`}
                                    className='imagem_carousel'
                                />
                            ))}
                        </Carousel>
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
                            <div className='modal_rede_social whatsapp' onClick={() => verificarLink('whatsapp')}>
                                <img className='modal_icon' src={IconWhatsapp} alt="WhatsApp" />
                            </div>
                        )}
                        {linkInstagram && (
                            <a className='modal_rede_social instagram' href={linkInstagram}>
                                <img className='modal_icon' src={IconInstagram} alt="Instagram" />
                            </a>
                        )}
                        {!linkInstagram && (
                            <div className='modal_rede_social instagram' onClick={() => verificarLink('instagram')}>
                                <img className='modal_icon' src={IconInstagram} alt="Instagram" />
                            </div>
                        )}
                        {linkFacebook && (
                            <a className='modal_rede_social facebook' href={linkFacebook}>
                                <img className='modal_icon' src={IconFacebook} alt="Facebook" />
                            </a>
                        )}
                        {!linkFacebook && (
                            <div className='modal_rede_social facebook' onClick={() => verificarLink('facebook')}>
                                <img className='modal_icon' src={IconFacebook} alt="Facebook" />
                            </div>
                        )}
                        {linkOlx && (
                            <a className='modal_rede_social olx' href={linkOlx}>
                                <img className='olx_icon' src={IconOlx} alt="Olx" />
                            </a>
                        )}
                        {!linkOlx && (
                            <div className='modal_rede_social olx' onClick={() => verificarLink('OLX')}>
                                <img className='olx_icon' src={IconOlx} alt="Olx" />
                            </div>
                        )}
                    </div>
                </div>

                {redeSocialSemLink && (
                    <div className='mensagem_sem_link'>Não possue link para {redeSocialSemLink}</div>
                )}

                <div className='espacamento'></div>
            </div>
        </div>
    );
}

export default Modal;

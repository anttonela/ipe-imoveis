import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import IconSetaVoltar from '../../assets/img/seta-voltar.svg';
import IconWhatsapp from '../../assets/img/whatsapp.svg';
import IconFacebook from '../../assets/img/facebook.svg';
import IconInstagram from '../../assets/img/instagram.svg';
import IconOlx from '../../assets/img/olx.svg';

function Modal({ id, cidade, valor, descricao, linkWhatsapp, linkFacebook, linkInstagram, linkOlx, classificacao, tipo }) {

    const navegador = useNavigate();
    const [whatsapp, setWhatsapp] = useState(false);
    const [instagram, setInstagram] = useState(false);
    const [facebook, setFacebook] = useState(false);
    const [olx, setOlx] = useState(false);
    const [whatsappSemLink, setWhatsappSemLink] = useState(true);
    const [instagramSemLink, setInstagramSemLink] = useState(true);
    const [facebookSemLink, setFacebookSemLink] = useState(true);
    const [olxSemLink, setOlxSemLink] = useState(true);

    if (linkWhatsapp !== null) {
        setWhatsapp(true);
        setWhatsappSemLink(false);
    }

    if (linkFacebook !== null) {
        setFacebook(true);
        setFacebookSemLink(false);
    }

    if (linkInstagram !== null) {
        setInstagram(true);
        setInstagramSemLink(false);
    }

    if (linkOlx !== null) {
        setOlx(true);
        setOlxSemLink(false);
    }

    const fecharModal = () => {
        navegador(-1);
    };

    return (
        <div className="modal_cliente_content">
            <div className="sair_modal">
                <div className="seta_voltar_modal" onClick={fecharModal}>
                    <img src={IconSetaVoltar} />
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
                    {setWhatsapp && (
                        <a className='modal_rede_social modal_whatsapp' href={linkWhatsapp}>
                            <img className='modal_icon' src={IconWhatsapp} />
                        </a>
                    )}
                    {setWhatsappSemLink && (
                        <div className='modal_rede_social modal_whatsapp'>
                            <img className='modal_icon' src={IconWhatsapp} />
                        </div>
                    )}
                    {setFacebook && (
                        <a className='modal_rede_social modal_facebook' href={linkFacebook}>
                            <img className='modal_icon' src={IconFacebook} />
                        </a>
                    )}
                    {setFacebookSemLink && (
                        <div className='modal_rede_social modal_facebook'>
                            <img className='modal_icon' src={IconFacebook} />
                        </div>
                    )}
                    {setInstagram && (
                        <a className='modal_rede_social modal_instagram' href={linkInstagram}>
                            <img className='modal_icon' src={IconInstagram} />
                        </a>
                    )}
                    {setInstagramSemLink && (
                        <div className='modal_rede_social modal_instagram'>
                            <img className='modal_icon' src={IconInstagram} />
                        </div>
                    )}
                    {setOlx && (
                        <a className='modal_rede_social modal_olx' href={linkOlx}>
                            <img className='modal_olx_icon' src={IconOlx} />
                        </a>
                    )}
                    {setOlxSemLink && (
                        <div className='modal_rede_social modal_olx'>
                            <img className='modal_olx_icon' src={IconOlx} />
                        </div>
                    )}
                </div>
            </div>
            <div className='espacamento'></div>
        </div>
    );
}

export default Modal;

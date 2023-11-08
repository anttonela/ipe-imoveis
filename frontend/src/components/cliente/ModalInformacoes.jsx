import React from 'react';
import IconSetaVoltar from '../../assets/img/seta-voltar.svg';
import IconWhatsapp from '../../assets/img/whatsapp.svg';
import IconFacebook from '../../assets/img/facebook.svg';
import IconInstagram from '../../assets/img/instagram.svg';
import IconOlx from '../../assets/img/olx.svg';

function Modal({ id, cidade, valor, descricao, linkWhatsapp, linkFacebook, linkInstagram, linkOlx, classificacao, tipo }) {
    return (
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

                <div className='modal_nome_produto inter_700'>{classificacao} - {tipo}</div>

                <div className='modal_valor'>
                    <div className='modal_cidade_produto inter_700'>{cidade}</div>
                    <div className='modal_preco inter_700'>R$: {valor}</div>
                </div>

                <div className='modal_descricao inter_500'>
                    <div className='modal_texto inter_700'>Descrição</div>
                    {descricao}<br></br><br></br>
                    ID: {id}
                </div>
                <div className='modal_contatos inter_700'>Entre em Contato</div>

                <div className='modal_redes_sociais_container'>
                    <a className='modal_rede_social modal_whatsapp' href={linkWhatsapp}>
                        <img className='modal_icon' src={IconWhatsapp} />
                    </a>

                    <a className='modal_rede_social modal_facebook' href={linkFacebook}>
                        <img className='modal_icon' src={IconFacebook} />
                    </a>

                    <a className='modal_rede_social modal_instagram' href={linkInstagram}>
                        <img className='modal_icon' src={IconInstagram} />
                    </a>
                    
                    <a className='modal_rede_social modal_olx' href={linkOlx}>
                        <img className='modal_olx_icon' src={IconOlx} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Modal;

import IconSetaVoltar from '../../assets/img/seta-voltar-modal.png';
import IconPlus from '../../assets/img/plus.png';
import IconLapis from '../../assets/img/lapis.png';

import InformacoesModal from './InformacoesModal';
import SelectModal from './SelectModal';

function ModalEditar() {
    return (
        <>
            <div className='modal_content'>

                <div className='sair_modal'>
                    <a className='seta_voltar_modal' href='#'>
                        <img src={IconSetaVoltar} />
                    </a>
                    <div className='botao_fechar_modal inter_500'>Voltar</div>
                </div>

                <div className='imagem_modal_content'>
                    <div className='imagem_modal'>

                        <div className='modal_botoes_editar_content'>
                            <div className='modal_botoes_editar'>
                                <div className='botao_editar_imagem'>
                                    <img src={IconLapis} />
                                </div>
                                <div className='botao_editar_imagem'>
                                    <img src={IconPlus} />
                                </div>
                            </div>
                        </div>

                        <div className='container_passar_imagem'>
                            <div className='passar_imagem'>
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
                    <div className='modal_select'>
                        <SelectModal
                            categoria={"Cidade"}
                            option={{ hidden: 'Goiânia', um: 'Acreúna', dois: 'Goiânia', tres: 'Indiara' }} />

                        <SelectModal
                            categoria={"Tipo de Imóvel"}
                            option={{ hidden: 'Casa', um: 'Imóveis', dois: 'Máquinas', tres: 'Outros' }} />
                    </div>

                    <InformacoesModal
                        nomeInformacao={"Valor"}
                        placeholder={"R$ 1.000.000"}
                    />

                    <div className="input_content_descricao">
                        <div className="modalAd_texto inter_500">Descrição</div>
                        <textarea className="modal_input descricao" placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using" type="text" />
                    </div>

                    <InformacoesModal
                        nomeInformacao={"Link Whatsapp"}
                        placeholder={"Link..."}
                    />
                    <InformacoesModal
                        nomeInformacao={"Link Instagram"}
                        placeholder={"Link..."}
                    />
                    <InformacoesModal
                        nomeInformacao={"Link Facebook"}
                        placeholder={"Link..."}
                    />
                    <InformacoesModal
                        nomeInformacao={"Link OLX"}
                        placeholder={"Link..."}
                    />
                </div>

            </div>
            <div className='scroll'></div>
        </>
    );
}

export default ModalEditar;
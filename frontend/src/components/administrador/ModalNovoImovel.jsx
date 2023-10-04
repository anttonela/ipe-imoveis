import IconSetaVoltar from '../../assets/img/seta-voltar-modal.png';
import IconPlus from '../../assets/img/plus-branco.png';
import SelectModal from './SelectModal';
import InformacoesModal from './InformacoesModal';

function ModalNovoImovel() {
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
                    <div className='adicionar_foto_content'>
                        <div className='adicionar_foto'>

                            <div className='botao_adicionar_foto_content'>
                                <div className='botao_adicionar_foto'>
                                    <img src={IconPlus} />
                                </div>
                            </div>

                            <div className='texto_adicionar_foto inter_700'>Adicionar Fotos</div>
                            <div className='texto_quantidade_foto inter_500'>máx: 0</div>
                        </div>
                    </div>
                </div>

                <div className='modal_informacoes'>
                    <div className='modal_select'>
                        <SelectModal
                            categoria={"Cidade"}
                            option={{ hidden: 'Selecionar', um: 'Acreúna', dois: 'Goiânia', tres: 'Indiara' }} />

                        <SelectModal
                            categoria={"Tipo de Produto"}
                            option={{ hidden: 'Selecionar', um: 'Imóveis', dois: 'Máquinas', tres: 'Outros' }} />
                    </div>

                    <InformacoesModal
                        nomeInformacao={"Valor"}
                        placeholder={"R$ 0,00"}
                    />

                    <div className="input_content_descricao">
                        <div className="modalAd_texto inter_500">Descrição</div>
                        <input className="modal_input descricao" placeholder="Descrição" type="text" />
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

                    <div className='content_botao_confirmar'>
                        <button className='botao_confirmar_adicionar' type='submit'>Adicionar</button>
                    </div>
                </div>

            </div>
            <div className='scroll'></div>
        </>
    );
}

export default ModalNovoImovel;
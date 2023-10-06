import { useState } from 'react';

import IconPlus from '../../assets/img/plus-branco.png';
import SelectModal from './SelectModal';
import IconSetaVoltar from '../../assets/img/seta-voltar-modal.png';
import InformacoesModal from './InformacoesModal';

function ModalNovoImovel() {
    //const [imagem, setImagem] = useState('');
    const [cidade, setCidade] = useState('');
    const [tipoProduto, setTipoProduto] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [linkWhatsapp, setLinkWhatsapp] = useState('');
    const [linkInstagram, setLinkInstagram] = useState('');
    const [linkFacebook, setLinkFacebook] = useState('');
    const [linkOlx, setLinkOlx] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            cidade,
            tipoProduto,
            valor,
            descricao,
            linkWhatsapp,
            linkInstagram,
            linkFacebook,
            linkOlx,
        };

        try {
            console.log(dados);

            const response = await fetch('SUA_API_URL_AQUI', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });

            const data = await response.json();
            console.log('Resposta da API:', data);
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
        }
    };

    return (
        <>
            <div className='modal_content'>

                <div className='sair_modal'>
                    <a className='seta_voltar_modal' href='#'>
                        <img src={IconSetaVoltar} />
                    </a>
                    <div className='botao_fechar_modal inter_500'>Voltar</div>
                </div>

                <form onSubmit={handleSubmit}>
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
                                id={"cidade"}
                                value={cidade}
                                onChange={setCidade}
                                categoria={"Cidade"}
                                option=
                                {{
                                    hidden: 'Selecionar',
                                    um: 'Acreúna',
                                    dois: 'Goiânia',
                                    tres: 'Indiara'
                                }}
                            />

                            <SelectModal
                                id={"tipo_produto"}
                                value={tipoProduto}
                                onChange={setTipoProduto}
                                categoria={"Tipo de Produto"}
                                option=
                                {{
                                    hidden: 'Selecionar',
                                    um: 'Imóveis',
                                    dois: 'Máquinas',
                                    tres: 'Outros'
                                }}
                            />
                        </div>

                        <InformacoesModal
                            id={"valor"}
                            value={valor}
                            onChange={setValor}
                            nomeInformacao={"Valor"}
                            placeholder={"R$ 0,00"}
                        />

                        <div className="input_content_descricao">
                            <div className="modal_ad_texto inter_500">Descrição</div>
                            <input className="modal_input descricao" placeholder="Descrição" type="text" id='descricao' value={descricao}
                                onChange={(e) => {
                                    setDescricao(e.target.value);
                                }}
                            />
                        </div>

                        <InformacoesModal
                            id={"link_whatsapp"}
                            value={linkWhatsapp}
                            onChange={setLinkWhatsapp}
                            nomeInformacao={"Link Whatsapp"}
                            placeholder={"Link..."}
                        />
                        <InformacoesModal
                            id={"link_instagram"}
                            value={linkInstagram}
                            onChange={setLinkInstagram}
                            nomeInformacao={"Link Instagram"}
                            placeholder={"Link..."}
                        />
                        <InformacoesModal
                            id={"link_facebook"}
                            value={linkFacebook}
                            onChange={setLinkFacebook}
                            nomeInformacao={"Link Facebook"}
                            placeholder={"Link..."}
                        />
                        <InformacoesModal
                            id={"link_olx"}
                            value={linkOlx}
                            onChange={setLinkOlx}
                            nomeInformacao={"Link OLX"}
                            placeholder={"Link..."}
                        />

                        <div className='content_botao_confirmar'>
                            <button className='botao_confirmar_adicionar' type='submit'>Adicionar</button>
                        </div>

                    </div>
                </form>
            </div>

            <div className='scroll'></div>
        </>
    );
}

export default ModalNovoImovel;
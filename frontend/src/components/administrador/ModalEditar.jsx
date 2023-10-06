import IconSetaVoltar from '../../assets/img/seta-voltar-modal.png';
import IconPlus from '../../assets/img/plus.png';
import IconLapis from '../../assets/img/lapis.png';
import InformacoesModal from './InformacoesModal';
import SelectModal from './SelectModal';
import { useState } from 'react';

function ModalEditar() {
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

                <form onSubmit={handleSubmit}>
                    <div className='modal_informacoes'>
                        <div className='modal_select'>
                            <SelectModal
                                id={"cidade"}
                                value={cidade}
                                onChange={setCidade}
                                categoria={"Cidade"}
                                option=
                                {{
                                    hidden: 'Goiânia',
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
                                    hidden: 'Casa',
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
                            placeholder={"R$ 1.000.000"}
                        />

                        <div className='descricao_content'>
                            <div className="input_content_descricao">
                                <div className="modal_ad_texto inter_500">Descrição</div>
                                <textarea className="modal_input descricao" placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
                                    type="text" id='descricao' value={descricao} onChange={(e) => {
                                        setDescricao(e.target.value);
                                    }} />
                            </div>
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
                    </div>


                    <div className='content_botao_confirmar'>
                        <button className='botao_confirmar_adicionar' type='submit'>Salvar Alteração</button>
                    </div>
                </form>
            </div>
            <div className='scroll'></div>
        </>
    );
}

export default ModalEditar;
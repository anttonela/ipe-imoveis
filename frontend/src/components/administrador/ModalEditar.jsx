import IconSetaVoltar from '../../assets/img/seta-voltar.svg';
import SelectAtualiza from './SelectAtualiza';
import IconPlus from '../../assets/img/plus.png';
import IconLapis from '../../assets/img/lapis.svg';
import InformacoesModal from './InputModal';
import SelectModal from './SelectModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ModalEditar({ idCard, cidadeProduto, classificacaoProduto, tipoProduto, valorProduto, descricaoProduto, linkWhatsappProduto,  linkInstagramProduto, linkFacebookProduto, linkOlxProduto}) {
    const navegador = useNavigate();

    const [cidade, setCidade] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [linkWhatsapp, setLinkWhatsapp] = useState('');
    const [linkInstagram, setLinkInstagram] = useState('');
    const [linkFacebook, setLinkFacebook] = useState('');
    const [linkOlx, setLinkOlx] = useState('');

    const opcoesClassificacao = ['Imóvel', 'Máquinas Agrícolas', 'Outros'];

    const opcoesTipos = {
        'Imóvel': ['Apartamento', 'Casa', 'Fazenda', 'Terreno', 'Imóvel Comercial'],
        'Máquinas Agrícolas': ['Máquinas Agrícolas', 'Implementos Agrícolas'],
        'Outros': ['Outros'],
    }

    const atualizarOpcoesTipo = (classificacao) => {
        setTipo('');
        setClassificacao(classificacao);
    }

    const fecharModal = () => {
        navegador(-1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            cidade,
            classificacao,
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
                    <div className='seta_voltar_modal' onClick={fecharModal}>
                        <img src={IconSetaVoltar} />
                    </div>
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
                                setOnChange={setCidade}
                                categoria={"Cidade"}
                                option=
                                {{
                                    hidden: cidadeProduto,
                                    um: 'Acreúna',
                                    dois: 'Goiânia',
                                    tres: 'Indiara',
                                }}
                            />

                            <SelectAtualiza
                                id={"classificacao"}
                                value={classificacao}
                                setOnChange={setClassificacao}
                                categoria={"Classificação"}
                                hidden={classificacaoProduto}
                                option=
                                {
                                    opcoesClassificacao.map((classificacao) => (
                                        <option key={classificacao} value={classificacao}>
                                            {classificacao}
                                        </option>
                                    ))
                                }
                            />
                        </div>

                        <div className="modal_ad_texto inter_500">Tipo</div>
                        <div className='select_tipo_modal'>
                            <select
                                id={"tipo"}
                                value={tipo}
                                className="select_tipo"
                                onChange={(e) => {
                                    setTipo(e.target.value);
                                }}
                                required
                            >
                                <option hidden>{tipoProduto}</option>
                                {
                                    opcoesTipos[classificacao] &&
                                    opcoesTipos[classificacao].map((tipo) => (
                                        <option key={tipo} value={tipo}>
                                            {tipo}
                                        </option>
                                    ))
                                }

                            </select>
                        </div >

                        <InformacoesModal
                            id={"valor"}
                            value={valor !== '' ? valor : valorProduto}
                            onChange={setValor}
                            nomeInformacao={"Valor"}
                            placeholder={"R$ 1.000.000"}
                        />

                        <div className='descricao_content'>
                            <div className="input_content_descricao">
                                <div className="modal_ad_texto inter_500">Descrição</div>
                                <textarea
                                    className="modal_input descricao"
                                    placeholder={idCard}
                                    type="text"
                                    id='descricao'
                                    value={descricao !== '' ? descricao : descricaoProduto}
                                    onChange={(e) => {
                                        setDescricao(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <InformacoesModal
                            id={"link_whatsapp"}
                            value={linkWhatsapp !== '' ? linkWhatsapp : linkWhatsappProduto}
                            onChange={setLinkWhatsapp}
                            nomeInformacao={"Link Whatsapp"}
                            placeholder={"Link..."}
                        />

                        <InformacoesModal
                            id={"link_instagram"}
                            value={linkInstagram !== '' ? linkInstagram : linkInstagramProduto}
                            onChange={setLinkInstagram}
                            nomeInformacao={"Link Instagram"}
                            placeholder={"Link..."}
                        />

                        <InformacoesModal
                            id={"link_facebook"}
                            value={linkFacebook !== '' ? linkFacebook : linkFacebookProduto}
                            onChange={setLinkFacebook}
                            nomeInformacao={"Link Facebook"}
                            placeholder={"Link..."}
                        />

                        <InformacoesModal
                            id={"link_olx"}
                            value={linkOlx !== '' ? linkOlx : linkOlxProduto}
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
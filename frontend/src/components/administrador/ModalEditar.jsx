import { useEffect, useState } from 'react';
import SelectModal from './SelectModal';
import InformacoesModal from './InputModal';
import SelectAtualiza from './SelectAtualiza';
import { useNavigate } from 'react-router-dom';
import IconPlus from '../../assets/img/plus.png';
import IconLapis from '../../assets/img/lapis.svg';
import IconSetaVoltar from '../../assets/img/seta-voltar.svg';

function ModalEditar({ idCard, cidadeProduto, classificacaoProduto, tipoProduto, situacaoProduto, valorProduto, descricaoProduto, linkWhatsappProduto, linkInstagramProduto, linkFacebookProduto, linkOlxProduto }) {

    const navegador = useNavigate();

    const [cidade, setCidade] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');
    const [situacao, setSituacao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [linkWhatsapp, setLinkWhatsapp] = useState('');
    const [linkInstagram, setLinkInstagram] = useState('');
    const [linkFacebook, setLinkFacebook] = useState('');
    const [linkOlx, setLinkOlx] = useState('');
    const [produtoAlterado, setProdutoAlterado] = useState(false);

    function extrairUsuarioInstagram(linkInstagram) {
        const buscaString = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/([a-zA-Z0-9_]+)/;
        const match = linkInstagram.match(buscaString);
        if (match && match[1]) {
            return match[1];
        }
        return '';
    }

    function extrairNumeroWhatsapp(linkWhatsapp) {
        const buscaString = /(\+55)(\d+)/;
        const match = linkWhatsapp.match(buscaString);
        if (match && match[2]) {
            return match[2];
        }
        return '';
    }

    function extrairUsuarioFacebook(linkFacebook) {
        const buscaString = /(?:https?:\/\/)?(?:www\.)?facebook\.com\/([a-zA-Z0-9._-]+)/;
        const match = linkFacebook.match(buscaString);
        if (match && match[1]) {
            return match[1];
        }
        return '';
    }

    const opcoesClassificacao = ['Imóvel', 'Máquinas Agrícolas', 'Outros'];

    const opcoesTipos = {
        'Imóvel': ['Apartamento', 'Casa', 'Fazenda', 'Terreno', 'Imóvel Comercial'],
        'Máquinas Agrícolas': ['Máquinas Agrícolas', 'Implementos Agrícolas'],
        'Outros': ['Outros'],
    }

    const fecharModal = () => {
        navegador(-1);
    };

    useEffect(() => {
        setCidade(cidadeProduto);
        setClassificacao(classificacaoProduto);
        setValor(valorProduto);
        setTipo(tipoProduto);
        setSituacao(situacaoProduto)
        setDescricao(descricaoProduto);
        setLinkWhatsapp(extrairNumeroWhatsapp(linkWhatsappProduto));
        setLinkInstagram(extrairUsuarioInstagram(linkInstagramProduto));
        setLinkFacebook(extrairUsuarioFacebook(linkFacebookProduto));
        setLinkOlx(linkOlxProduto);
    }, [
        cidadeProduto,
        classificacaoProduto,
        valorProduto,
        tipoProduto,
        situacaoProduto,
        descricaoProduto,
        extrairNumeroWhatsapp(linkWhatsappProduto),
        extrairUsuarioInstagram(linkInstagramProduto),
        extrairUsuarioFacebook(linkFacebookProduto),
        linkOlxProduto,
    ]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            id: idCard,
            cidade,
            classificacao,
            tipo,
            situacao,
            valor,
            descricao,
            linkWhatsapp,
            linkInstagram,
            linkFacebook,
            linkOlx,
        };

        console.log('Dados a serem enviados:', dados);

        try {
            const response = await fetch('http://localhost:8080/alterar/', {
                method: 'POST',
                body: JSON.stringify(dados),
            });

            const data = await response.text();
            console.log('Resposta da API:', data);

            setProdutoAlterado(true);
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
        }
    }

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
                        </div>

                        <div className='situacao'>
                            <div className="modal_ad_texto inter_500">Situação</div>
                        </div>
                        <div className='select_tipo_modal'>
                            <select
                                id={"situacao"}
                                value={situacao}
                                className="select_tipo"
                                onChange={(e) => {
                                    setSituacao(e.target.value);
                                }}
                                required
                            >
                                <option hidden>Selecionar</option>
                                <option>Vendido</option>
                                <option>Não Vendido</option>
                            </select>
                        </div>

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
                            value={linkWhatsapp !== '' ? linkWhatsapp : extrairNumeroWhatsapp(linkWhatsappProduto)}
                            onChange={(value) => {
                                if (value.length <= 11) {
                                    setLinkWhatsapp(value);
                                }
                            }}
                            nomeInformacao={"Número Whatsapp"}
                            placeholder={"64912345678"}
                        />

                        <InformacoesModal
                            id={"link_instagram"}
                            value={linkInstagram !== '' ? linkInstagram : extrairUsuarioInstagram(linkInstagramProduto)}
                            onChange={setLinkInstagram}
                            nomeInformacao={"Usuário Instagram"}
                            placeholder={"@user"}
                        />

                        <InformacoesModal
                            id={"link_facebook"}
                            value={linkFacebook !== '' ? linkFacebook : extrairUsuarioFacebook(linkFacebookProduto)}
                            onChange={setLinkFacebook}
                            nomeInformacao={"Usuário Facebook"}
                            placeholder={"@user"}
                        />

                        <InformacoesModal
                            id={"link_olx"}
                            value={linkOlx !== '' ? linkOlx : linkOlxProduto}
                            onChange={setLinkOlx}
                            nomeInformacao={"Usuário OLX"}
                            placeholder={"@user"}
                        />

                    </div>

                    <div className='content_botao_confirmar'>
                        <button className='botao_confirmar_adicionar' type='submit'>Salvar Alteração</button>
                    </div>

                    {produtoAlterado && (
                        <div className='mensagem_sucesso'>
                            Produto alterado com sucesso
                        </div>
                    )}

                </form>

            </div>

            <div className='scroll'></div>
        </>
    );
}

export default ModalEditar;
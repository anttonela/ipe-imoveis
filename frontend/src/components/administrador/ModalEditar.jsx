import { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";

import IconPlus from '../../assets/img/plus.png';
import IconLapis from '../../assets/img/lapis.svg';
import IconLixeira from "../../assets/img/lixeira.svg";
import IconDone from "../../assets/img/done.svg";
import SetaDireita from '../../assets/img/seta-direita.svg';
import SetaEsquerda from '../../assets/img/seta-esquerda.svg';
import IconSetaVoltar from '../../assets/img/seta-voltar.svg';

import maquinaAmarela1 from '/home/ipeweb/Documents/ipe_imoveis/frontend/src/assets/img/maquina_amarela.jpg';
import maquinaAmarela2 from '../../assets/img/maquina_amarela_2.avif';
import maquinaAmarela3 from '../../assets/img/maquina_amarela_3.jpg';
import maquinaAmarela4 from '../../assets/img/maquina_amarela_4.webp';

import SelectModal from './SelectModal';
import InformacoesModal from './InputModal';
import SelectAtualiza from './SelectAtualiza';

function ModalEditar({ fecharModal, idCard, cidadeProduto, classificacaoProduto, tipoProduto, situacaoProduto, valorProduto, descricaoProduto, linkWhatsappProduto, linkInstagramProduto, linkFacebookProduto, linkOlxProduto }) {

    const [images, setImages] = useState([]);
    const [mostrarCarousel, setMostrarCarousel] = useState(false);
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
    const [editandoModal, setEditandoModal] = useState(true);

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

    let valorEmReais = (valorProduto / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const opcoesClassificacao = ['Imóvel', 'Máquinas Agrícolas', 'Outros'];

    const opcoesTipos = {
        'Imóvel': ['Apartamento', 'Casa', 'Fazenda', 'Terreno', 'Imóvel Comercial'],
        'Máquinas Agrícolas': ['Máquinas Agrícolas', 'Implementos Agrícolas'],
        'Outros': ['Outros'],
    }

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

    const formatarMoeda = (value) => {
        const numero = parseFloat(value.replace(/[^\d]/g, '')) / 100;
        return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const handleValorChange = (e) => {
        const novoValor = e.target.value;

        if (novoValor === '' || novoValor.match(/^\$/)) {
            setValor(novoValor);
        } else {
            setValor(formatarMoeda(novoValor));
        }
    };

    const handleImageUpload = (e) => {
        const imagemSelecionadas = e.target.files;

        if (imagemSelecionadas.length > 0) {
            const imageArray = Array.from(imagemSelecionadas).map((file) => URL.createObjectURL(file));
            setImages([...images, ...imageArray]);
            setMostrarCarousel(true);
        }
    };

    const ativarEditarImagem = () => {
        setEditandoModal(false);
    };

    const imagemMaquina = [
        maquinaAmarela1,
        maquinaAmarela2,
        maquinaAmarela4,
    ];

    const done = () => {
        setEditandoModal(true);
    }
    return (
        <>
            <div className='modal_editar_produto'>
                <div className='modal_content'>

                    <div className='sair_modal'>
                        <img className='sair_modal_seta' onClick={fecharModal} src={IconSetaVoltar} />
                        <div className='sair_modal_texto inter_500'>Voltar</div>
                    </div>

                    {editandoModal && (
                        <div className='imagem_modal_content'>
                            <div className='imagem_modal'>
                                <div className='modal_botoes_editar'>
                                    <div className='modal_editar'>
                                        <div className='botao_editar_imagem' onClick={ativarEditarImagem} >
                                            <img className='botao_editar_imagem_icon' src={IconLapis} />
                                        </div>

                                        <label className='botao_editar_imagem'>
                                            <img className='botao_editar_imagem_icon' src={IconPlus} />
                                            <input
                                                type="file"
                                                accept="image/videos"
                                                multiple
                                                className='input_upload'
                                                onChange={handleImageUpload}
                                            />
                                        </label>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {!editandoModal && (
                        <>
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
                                        {imagemMaquina.map((image, index) => (
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
                            <div className='modal_botoes_editar'>
                                <div className='modal_editar'>
                                    <div className='botao_editar_imagem' >
                                        <img className='icon_lixeira' src={IconLixeira} />
                                    </div>
                                    <div className='botao_editar_imagem' onClick={done}>
                                        <img className='botao_editar_imagem_icon' src={IconDone} />
                                    </div>

                                </div>
                            </div>
                        </>
                    )}


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

                            <div className="input_content">
                                <div className="modal_ad_texto inter_500">Valor</div>

                                <input
                                    className="modal_input"
                                    placeholder="R$ 1.000.000"
                                    type="text"
                                    value={valor !== '' ? valor : valorEmReais}
                                    onChange={handleValorChange}
                                />
                            </div>

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

                        <div className='botao_confirmar'>
                            <button className='botao_confirmar_adicionar' type='submit'>Salvar Alteração</button>
                        </div>
                        {produtoAlterado && (
                            <div className='mensagem_sucesso_produto'>
                                Produto alterado com sucesso
                            </div>
                        )}

                        <div className='espacamento'></div>

                    </form>

                </div>
            </div>
        </>
    );
}

export default ModalEditar;
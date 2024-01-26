import axios from 'axios';
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
    const [selectedFile, setSelectedFile] = useState(null);
    const [primeiraFotoSelecionada, setPrimeiraFotoSelecionada] = useState(false);
    const [primeiraFotoRemovida, setPrimeiraFotoRemovida] = useState(false);
    const [imagensParaCarousel, setImagensParaCarousel] = useState('');
    const [mensagemLimiteImagens, setMensagemLimiteImagens] = useState(false);
    //const [identificarQualImagem, setIdentificarQualImagem] = useState('');

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


    const handleFileChange = async (event) => {
        setMensagemLimiteImagens(false);
        const file = event.target.files[0];
        setSelectedFile(file);

        const imagemSelecionadas = event.target.files;

        if (imagensParaCarousel.length > 9) {
            setMensagemLimiteImagens(true);
            return;
        }

        if (imagemSelecionadas.length > 0) {
            const newImages = Array.from(imagemSelecionadas).map((file) => URL.createObjectURL(file));

            setImagensParaCarousel((prevImages) => [...prevImages, ...newImages]);
        }

        if (primeiraFotoSelecionada === false) {
            try {
                const formData = new FormData();
                formData.append('file', selectedFile);

                const response = await axios.post('http://localhost:8080/uploadImagem', formData);
                console.log('Resposta handleUpload:', response.data);
                //setIdImagem((prevIdImagens) => [...prevIdImagens, response.data]);
                setPrimeiraFotoSelecionada(true);
            } catch (error) {
                console.error('Erro em fazer upload da foto:', error);
            }
            return;
        }

        handleUpload();
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const response = await axios.post('http://localhost:8080/uploadImagem', formData);
            console.log('Resposta handleUpload:', response.data);
            //setIdImagem(data.response)
            setPrimeiraFotoSelecionada(true);
        } catch (error) {
            console.error('Erro em fazer upload da foto:', error);
        }
    };

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

        //('Dados a serem enviados:', dados);

        try {
            const response = await fetch('http://localhost:8080/alterar/', {
                method: 'POST',
                body: JSON.stringify(dados),
            });

            const data = await response.text();
            //console.log('Resposta da API:', data);

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
            return;
        }

        setValor(formatarMoeda(novoValor));
    };

    const ativarEditarImagem = () => {
        setEditandoModal(false);
        setImagensParaCarousel([...imagemMaquina, ...images]);
    };

    const imagemMaquina = [
        maquinaAmarela1,
        maquinaAmarela2,
        maquinaAmarela4,
    ];

    const terminouDeEditar = () => {
        setEditandoModal(true);
    };

    const removerImagem = (imagemParaRemover) => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = axios.post('http://localhost:8080/uploadImagem', formData);
        console.log('Resposta handleUpload:', response.data);
        const novasImagens = images.filter((_, index) => index !== imagemParaRemover);
        setImages([...novasImagens]);
        console.log("imagem para remover:" + imagemParaRemover);

        const imagensAtualizadas = imagensParaCarousel.filter((_, index) => index !== imagemParaRemover);
        setImages([...imagensAtualizadas]);
        setImagensParaCarousel([...imagensAtualizadas]);
    };

    const handleRemoverImagem = (imagemParaRemover, nomeDaFoto) => {
        removerImagem(imagemParaRemover);
        console.log("nome da foto: " + nomeDaFoto);

        if (primeiraFotoRemovida === false) {
            removerImagem(imagemParaRemover);
        }

        setPrimeiraFotoRemovida(true);
    };

    return (
        <>
            <div className='modal_editar_produto'>
                <div className='modal_content'>

                    <div className='sair_modal'>
                        <img className='sair_modal_seta' onClick={fecharModal} src={IconSetaVoltar} alt='icon' />
                        <div className='sair_modal_texto inter_500'>Voltar</div>
                    </div>

                    {editandoModal && (
                        <>
                            <div className='imagem_modal_content'>
                                <img src={maquinaAmarela1} className='imagem_modal' alt='icon' />
                            </div>

                            <div className='modal_botoes_editar'>

                                <div className='botao_editar_imagem pointer' onClick={ativarEditarImagem} >
                                    <img className='botao_editar_imagem_icon' src={IconLapis} alt='icon' />
                                </div>

                            </div>
                        </>
                    )}

                    {!editandoModal && (
                        <>
                            <div className='imagem_modal_content_administrador'>
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
                                                        className={activePage === page ? 'botao_passa_imagem clicado pointer' : 'botao_passa_imagem pointer'}
                                                    >
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    >
                                        {imagensParaCarousel.map((image, index) => (
                                            <>
                                                <img
                                                    className='imagem_selecionada'
                                                    src={image}
                                                    alt={`Image ${index + 1}`}
                                                    style={{ pointerEvents: editandoModal ? 'none' : 'auto' }}
                                                />

                                                <div>
                                                    <button onClick={() => handleRemoverImagem(index, image)}>Remover Foto Remover Foto</button>
                                                </div>
                                            </>
                                        ))}
                                    </Carousel>
                                </div>
                            </div>

                            <div className='modal_botoes_editar'>
                                <div className='modal_editar'>
                                    <label className='botao_editar_imagem pointer'>
                                        <img className='botao_editar_imagem_icon' src={IconPlus} alt='icon' />
                                        <input
                                            type="file"
                                            accept="image/videos"
                                            multiple
                                            className='input_upload'
                                            onChange={handleFileChange}
                                        />
                                    </label>

                                    <div className='botao_editar_imagem pointer'>
                                        <img className='icon_lixeira' src={IconLixeira} alt='icon' />
                                    </div>

                                    <div className='botao_editar_imagem pointer' onClick={terminouDeEditar}>
                                        <img className='botao_editar_imagem_icon' src={IconDone} alt='icon' />
                                    </div>

                                </div>
                            </div>
                            {mensagemLimiteImagens && (
                                <div className='imagem_nao_baixada'>Erro: O limite máximo de imagens são 10</div>
                            )}
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
import axios from 'axios';
import ImageSlider from './ImageSlider';
import Arrow from './Arrow';
import UploadImage from './UploadPreview';
import React, { useState } from 'react';
import Carousel from "react-elastic-carousel";

import IconPlus from '../../assets/img/plus-branco.svg';
import SetaDireita from '../../assets/img/seta-direita.svg';
import SetaEsquerda from '../../assets/img/seta-esquerda.svg';

import InputModal from './InputModal';
import SelectModal from './SelectModal';
import SelectAtualiza from './SelectAtualiza';
import IconSetaVoltar from '../../assets/img/seta-voltar.svg';

function ModalNovoImovel({ fecharModal }) {
    const [images, setImages] = useState([]);
    const [cidade, setCidade] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [tipo, setTipo] = useState('');
    const [situacao, setSituacao] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [linkWhatsapp, setLinkWhatsapp] = useState('');
    const [linkInstagram, setLinkInstagram] = useState('');
    const [linkFacebook, setLinkFacebook] = useState('');
    const [linkOlx, setLinkOlx] = useState('');
    const [produtoAdicionado, setProdutoAdicionado] = useState(false);
    const [mostrarImagens, setMostrarImagens] = useState(true);

    const defaultImg = "https://www.acko.com/static/images/acko_claims_page-02.png";

    const opcoesClassificacao = ['Imóvel', 'Máquinas Agrícolas', 'Outros'];

    const opcoesTipos = {
        'Imóvel': ['Apartamento', 'Casa', 'Fazenda', 'Terreno', 'Imóvel Comercial'],
        'Máquinas Agrícolas': ['Máquinas Agrícolas', 'Implementos Agrícolas'],
        'Outros': ['Outros'],
    }

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    let currentId = currentImageIndex;

    const previousSlide = () => {
        const lastIndex = images.length - 1;
        const shouldresetIndex = currentImageIndex === 0;
        const index = shouldresetIndex ? lastIndex : currentImageIndex - 1;
        setCurrentImageIndex(index);
    };
    const nextSlide = () => {
        const lastIndex = images.length - 1;
        const shouldresetIndex = currentImageIndex === lastIndex;
        const index = shouldresetIndex ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(index);
    };
    const getFileFromImage = img => {
        setImages([img, ...images]);
    };

    const handleSubmitImagem = async () => {
        const formData = new FormData();
        formData.append("imagem", images);

        console.log('Dados a serem enviados handleSubmitImagem:', formData);

        try {
            const response = await axios.post("http://localhost:8080/imagem", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            const data = response;
            console.log('Resposta da API handleSubmitImagem:', data);
        } catch (error) {
            console.error('Erro ao enviar os dados para a API handleSubmitImagem:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleSubmitImagem();

        const dados = {
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

        console.log('Dados a serem enviados handleSubmit:', dados);

        try {
            const response = await fetch("http://localhost:8080/novoProduto", {
                method: 'POST',
                body: JSON.stringify(dados),
            });

            const data = await response.text();
            console.log('Resposta da API handleSubmit:', data);

            setProdutoAdicionado(true);
        } catch (error) {
            console.error('Erro ao enviar os dados para a API handleSubmit:', error);
        }
    };

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

            setImages([...images, imageArray]);
            console.log("IMAGES: " + images);
            console.log("IMAGES ARRAY: " + imageArray);
            setMostrarImagens(false);
        }
    };

    return (
        <>
            <div className='modal_novo_imovel'>

                <div className='sair_modal'>
                    <img className='seta_sair_modal' onClick={fecharModal} src={IconSetaVoltar} alt="Seta de Voltar" />
                    <div className='botao_voltar_modal inter_500'>Voltar</div>
                </div>

                <form onSubmit={handleSubmit} method="post" encType='multipart/form-data'>

                    {!mostrarImagens && (
                        <div className='upload_imagem'>
                            <label className='card_imagem_content'>
                                <div className='adicionar_foto'>

                                    <div className='botao_adicionar_foto_content'>
                                        <div className='botao_adicionar_foto'>
                                            <img src={IconPlus} alt="Ícone de Adicionar" />
                                            <input
                                                type="file"
                                                accept="image/videos"
                                                multiple
                                                //onChange={handleImageUpload}
                                                className='input_upload'
                                            />
                                        </div>
                                    </div>

                                    <div className='texto_adicionar_foto inter_700'>Adicionar Fotos</div>
                                    <div className='texto_quantidade_foto inter_500'>máximo: 10</div>
                                </div>
                            </label>
                        </div>
                    )}

                    {mostrarImagens && (
                        <>
                            <header>
                                <h1>Image Carousel</h1>
                            </header>
                            <div className="wrapper">
                                <UploadImage getFileFromUploadedImage={getFileFromImage} />
                                <div className="carousel-container">
                                    <Arrow clickFunction={previousSlide} glyph="&#9664;" />
                                    <ImageSlider url={images[currentId]} />
                                    <Arrow clickFunction={nextSlide} glyph="&#9654;" />
                                </div>
                            </div>
                        </>
                    )}

                    <div className='modal_informacoes'>

                        <div className='modal_select'>
                            <SelectModal
                                id={"cidade"}
                                value={cidade}
                                setOnChange={setCidade}
                                categoria={"Cidade"}
                                option={{
                                    hidden: 'Selecionar',
                                    um: 'Goiânia',
                                    dois: 'Indiara',
                                    tres: 'Arantina'
                                }}
                            />

                            <SelectAtualiza
                                id={"classificacao"}
                                value={classificacao}
                                setOnChange={setClassificacao}
                                categoria={"Classificação"}
                                hidden={"Selecionar"}
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
                                <option hidden>Selecionar</option>
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
                                placeholder="R$ 0,00"
                                type="text"
                                value={valor}
                                onChange={handleValorChange}
                                required
                            />
                        </div>

                        <div className='descricao_content'>
                            <div className="input_content_descricao">
                                <div className="modal_ad_texto inter_500">Descrição</div>
                                <textarea
                                    className="modal_input descricao"
                                    placeholder='Descrição...'
                                    type="text"
                                    id='descricao'
                                    value={descricao}
                                    onChange={(e) => {
                                        setDescricao(e.target.value);
                                    }}
                                />
                            </div>
                        </div>

                        <InputModal
                            id={"link_whatsapp"}
                            value={linkWhatsapp}
                            onChange={(value) => {
                                if (value.length <= 11) {
                                    setLinkWhatsapp(value);
                                }
                            }}
                            nomeInformacao={"Número Whatsapp"}
                            placeholder={"64912345678"}
                        />

                        <InputModal
                            id={"link_instagram"}
                            value={linkInstagram}
                            onChange={setLinkInstagram}
                            nomeInformacao={"Usuário Instagram"}
                            placeholder={"@"}
                        />

                        <InputModal
                            id={"link_facebook"}
                            value={linkFacebook}
                            onChange={setLinkFacebook}
                            nomeInformacao={"Usuário Facebook"}
                            placeholder={"@"}
                        />

                        <InputModal
                            id={"link_olx"}
                            value={linkOlx}
                            onChange={setLinkOlx}
                            nomeInformacao={"Link perfil OLX"}
                            placeholder={"@"}
                        />

                        <div className='botao_confirmar'>
                            <button className='botao_confirmar_adicionar' name='adicionar' type="submit">Adicionar</button>
                        </div>


                        {produtoAdicionado && (
                            <div className='mensagem_sucesso_produto'>
                                Produto adicionado com sucesso
                            </div>
                        )}

                        <div className='espacamento'></div>

                    </div>
                </form>

            </div>
            <div className='scroll'></div>
        </>
    );
}

export default ModalNovoImovel;
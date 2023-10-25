import React, { useState } from 'react';
import Carousel from "react-elastic-carousel";

import IconPlus from '../../assets/img/plus-branco.svg';
import SetaDireita from '../../assets/img/seta-direita.svg';
import SetaEsquerda from '../../assets/img/seta-esquerda.svg';

function UploadFotos() {

    const [images, setImages] = useState([]);

    // const [clicar, setClicar] = useState(true);
    // const [clicado, setClicado] = useState();

    // function mudandoConteudo() {
    //     setClicar(!clicar);
    //     setClicado(!clicado);
    // }

    const handleImageUpload = (e) => {
        const imagemSelecionadas = e.target.files;

        if (imagemSelecionadas.length > 0) {
            const imageArray = Array.from(imagemSelecionadas).map((file) => URL.createObjectURL(file));
            setImages([...images, ...imageArray]);
        }
    }

    return (
        <>

            {/* {clicar && ( */}
            <div className='imagem_modal_content'>
                <label className='adicionar_foto_content'>
                    <div className='adicionar_foto'>
                        <div className='botao_adicionar_foto_content'>
                            <div className='botao_adicionar_foto'>
                                <img src={IconPlus} alt="Ícone de Adicionar" />
                                <input
                                    type="file"
                                    accept="image/videos"
                                    multiple
                                    onChange={handleImageUpload}
                                    className='input_upload'
                                />
                            </div>
                        </div>
                        <div className='texto_adicionar_foto inter_700'>Adicionar Fotos</div>
                        <div className='texto_quantidade_foto inter_500'>máximo: 10</div>
                    </div>
                </label>
            </div>
            {/* )} */}

            {/* {clicado && ( */}
            <div className='imagem_modal_content'>
                <div className='adicionar_foto_content'>
                    {images.length > 0 && (
                        <div className="content_foto_adicionada">
                            <Carousel
                                renderArrow={({ type, onClick }) => (
                                    <div className="arrow-container">
                                        <img
                                            src={type === 'PREV' ? SetaEsquerda : SetaDireita}
                                            alt={type === 'PREV' ? 'Previous' : 'Next'}
                                            style={{
                                                width: '48px',
                                                height: '48px',
                                                cursor: 'pointer',
                                            }}
                                            onClick={onClick}
                                        />
                                    </div>
                                )}
                                itemsToShow={1}
                                navigation=
                                {(
                                    style = {
                                        width: '48px',
                                        height: '48px',
                                        cursor: 'pointer',
                                    }
                                )}
                            >
                                {images.map((image, index) => (
                                    <div className='aqui' key={index}>
                                        <img className='foto_selecionada' src={image} alt={`Image ${index + 1}`} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>
            </div>
            {/* )} */}

        </>
    );
}

export default UploadFotos;

import React, { useState } from 'react';
import Carousel from "react-elastic-carousel";

import IconPlus from '../../assets/img/plus-branco.svg';
import SetaDireita from '../../assets/img/seta-direita.svg';
import SetaEsquerda from '../../assets/img/seta-esquerda.svg';

function UploadFotos({ images, setImages, form }) {
    const [mostrarImagens, setMostrarImagens] = useState(true);

    const handleImageUpload = (e) => {
        const imagemSelecionadas = (e) => setImages(e.target.files[0]);

        if (imagemSelecionadas.length > 0) {
            const imageArray = Array.from(imagemSelecionadas).map((file) => URL.createObjectURL(file));

            { setImages } ([...{ images }, ...imageArray]);
            setMostrarImagens(false);
        }
    }

    return (
        <>
            <form onSubmit={form}>
                {mostrarImagens && (
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
                                            onChange={handleImageUpload}
                                            className='input_upload'
                                            value={images}
                                        />
                                    </div>
                                </div>

                                <div className='texto_adicionar_foto inter_700'>Adicionar Fotos</div>
                                <div className='texto_quantidade_foto inter_500'>máximo: 10</div>
                            </div>
                        </label>
                    </div>
                )}
            </form>

            {!mostrarImagens && (
                <div className='upload_imagem'>
                    <div className='card_imagem_content'>
                        {{ images }.length > 0 && (
                            <div className="imagem_selecionada_content">
                                <Carousel
                                    renderArrow={({ type, onClick }) => (
                                        <div className="setas">
                                            <img
                                                src={type === 'PREV' ? SetaEsquerda : SetaDireita}
                                                alt={type === 'PREV' ? 'Previous' : 'Next'}
                                                style={{
                                                    width: '30px',
                                                    height: '38px',
                                                    cursor: 'pointer',
                                                }}
                                                onClick={onClick}
                                            />
                                        </div>
                                    )}
                                    itemsToShow={1}
                                    pagination={false}
                                >
                                    {{ images }.map((image, index) => (
                                        <div key={index}>
                                            <label className='alinhamento_imagem'>
                                                <input
                                                    type="file"
                                                    name='images'
                                                    accept="image/videos"
                                                    multiple
                                                    onChange={handleImageUpload}
                                                    className='input_upload'
                                                />
                                                <img
                                                    className='imagem_selecionada'
                                                    src={image}
                                                    alt={`Image ${index + 1}`}
                                                />
                                            </label>
                                        </div>
                                    ))}

                                </Carousel>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default UploadFotos;

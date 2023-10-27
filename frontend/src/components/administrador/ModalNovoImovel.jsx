import React, { useState } from 'react';

import SelectModal from './SelectModal';
import IconSetaVoltar from '../../assets/img/seta-voltar.svg';
import InputModal from './InputModal';
import UploadFotos from './UploadFotos';

function ModalNovoImovel() {
    const [imagens, setImagens] = useState('');
    const [cidade, setCidade] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [linkWhatsapp, setLinkWhatsapp] = useState('');
    const [linkInstagram, setLinkInstagram] = useState('');
    const [linkFacebook, setLinkFacebook] = useState('');
    const [linkOlx, setLinkOlx] = useState('');
    const [produtoAdicionado, setProdutoAdicionado] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            imagens,
            cidade,
            classificacao,
            valor,
            descricao,
            linkWhatsapp,
            linkInstagram,
            linkFacebook,
            linkOlx,
        };

        console.log('Dados a serem enviados:', dados);

        try {
            const response = await fetch('http://localhost:8080/novoImovel', {
                method: 'POST',
                body: JSON.stringify(dados),
            });

            const data = await response.text();
            console.log('Resposta da API:', data);

            setProdutoAdicionado(true);
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
        }
    };

    return (
        <>
            <div className='modal_content'>
                <div className='sair_modal'>
                    <a className='seta_voltar_modal' href='#'>
                        <img src={IconSetaVoltar} alt="Seta de Voltar" />
                    </a>
                    <div className='botao_fechar_modal inter_500'>Voltar</div>
                </div>

                <form onSubmit={handleSubmit}>

                    <UploadFotos
                        value={imagens}
                        setOnChange={setImagens}
                    />

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

                            <SelectModal
                                id={"classificacao"}
                                value={classificacao}
                                setOnChange={setClassificacao}
                                categoria={"Classificação"}
                                option={{
                                    hidden: 'Selecionar',
                                    um: 'Imóveis',
                                    dois: 'Máquinas Agrícolas',
                                    tres: 'Outros'
                                }}
                            />
                        </div>

                        <div className="input_content">
                            <div className="modal_ad_texto inter_500">Valor</div>
                            <input
                                className="modal_input"
                                placeholder={"R$ 0,00"}
                                type="text"
                                id={"valor"}
                                value={valor}
                                onChange={(e) => {
                                    setValor(e.target.value);
                                }}
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
                            nomeInformacao={"Usuário OLX"}
                            placeholder={"@"}
                        />

                        <div className='content_botao_confirmar'>
                            <button className='botao_confirmar_adicionar' type="submit">Adicionar</button>
                        </div>


                        {produtoAdicionado && (
                            <div className='mensagem_sucesso'>
                                Produto adicionado com sucesso
                            </div>
                        )}

                    </div>
                </form>

            </div>
            <div className='scroll'></div>
        </>
    );
}

export default ModalNovoImovel;

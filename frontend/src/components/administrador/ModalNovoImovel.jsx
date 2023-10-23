import React, { useState } from 'react';

import IconPlus from '../../assets/img/plus-branco.png';
import SelectModal from './SelectModal';
import IconSetaVoltar from '../../assets/img/seta-voltar-modal.png';
import InformacoesModal from './InformacoesModal';

function ModalNovoImovel() {
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

                <div className='imagem_modal_content'>
                    <div className='adicionar_foto_content'>
                        <div className='adicionar_foto'>
                            <div className='botao_adicionar_foto_content'>
                                <div className='botao_adicionar_foto'>
                                    <img src={IconPlus} alt="Ícone de Adicionar" />
                                </div>
                            </div>
                            <div className='texto_adicionar_foto inter_700'>Adicionar Fotos</div>
                            <div className='texto_quantidade_foto inter_500'>máx: 0</div>
                        </div>
                    </div>
                </div>

                <div className='modal_informacoes'>
                    <form onSubmit={handleSubmit}>

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

                        <InformacoesModal
                            id={"valor"}
                            value={valor}
                            onChange={setValor}
                            nomeInformacao={"Valor"}
                            placeholder={"R$ 0,00"}
                        />

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

                        <InformacoesModal
                            id={"link_whatsapp"}
                            value={linkWhatsapp}
                            onChange={setLinkWhatsapp}
                            nomeInformacao={"Número Whatsapp"}
                            placeholder={"64912345678"}
                        />

                        <InformacoesModal
                            id={"link_instagram"}
                            value={linkInstagram}
                            onChange={setLinkInstagram}
                            nomeInformacao={"Usuário Instagram"}
                            placeholder={"@"}
                        />

                        <InformacoesModal
                            id={"link_facebook"}
                            value={linkFacebook}
                            onChange={setLinkFacebook}
                            nomeInformacao={"Usuário Facebook"}
                            placeholder={"@"}
                        />

                        <InformacoesModal
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

                    </form>
                </div>
            </div>
            <div className='scroll'></div>
        </>
    );
}

export default ModalNovoImovel;

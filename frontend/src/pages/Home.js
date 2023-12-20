import values from 'lodash/values';
import React, { useEffect, useState } from 'react';

import Footer from '../components/cliente/Footer';
import Header from '../components/cliente/Header';
import Filtro from '../components/cliente/Filtro';
import Fileira from '../components/cliente/Fileira';
import IconTriste from '../assets/img/emoji_triste.svg'
import Subtitulo from '../components/cliente/Subtitulo';
import CardSombreado from '../components/cliente/CardSombreado';
import PrimeiroSubtitulo from '../components/cliente/PrimeiroSubtitulo';

function ConteudoHome() {

    const [data, setData] = useState([]);
    const [cidade, setCidade] = useState('');
    const [mensagemLogin, setMensagemLogin] = useState(false);
    const [filtroClicado, setFiltroClicado] = useState(false);
    const [tipoSelecionado, setTipoSelecionado] = useState('');
    const [classificacaoSelecionada, setClassificacaoSelecionada] = useState('');

    useEffect(() => {
        document.title = "Home";
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            classificacao: classificacaoSelecionada,
            tipo: tipoSelecionado,
            cidade,
        };

        try {
            const response = await fetch('http://localhost:8080/filtro/', {
                method: 'POST',
                body: JSON.stringify(dados),
            })

            const resposta = await response.json();

            setData(resposta);
            setMensagemLogin(true);
            setFiltroClicado(true)
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
        }
    };

    return (
        <div className='container'>

            {!filtroClicado && (
                < Header texto_botao="Ver imóveis" href="#imoveis" />
            )}

            {filtroClicado && (
                <Header texto_botao="Ver Todos os Produtos" href="/home" />
            )}

            <Filtro
                handleSubmit={handleSubmit}
                setFiltroClicado={setFiltroClicado}
                tipoSelecionado={tipoSelecionado}
                setTipoSelecionado={setTipoSelecionado}
                cidade={cidade}
                setCidade={setCidade}
                classificacaoSelecionada={classificacaoSelecionada}
                setClassificacaoSelecionada={setClassificacaoSelecionada}
            />

            {!filtroClicado && (
                <>
                    <div className='background_cinza'>
                        <PrimeiroSubtitulo
                            id={"imoveis"}
                            nome={"Imóveis"}
                        />

                        <Fileira
                            fetchUrl={"http://localhost:8080/imoveis/"}
                            href={"#imoveis"}
                        />
                    </div>

                    <Subtitulo
                        id={"maquinas_agricolas"}
                        nome={"Máquinas Agrícolas"}
                    />

                    <Fileira
                        fetchUrl={"http://localhost:8080/maquinasAgricolas/"}
                        href={"#maquinas_agricolas"}
                    />

                    <div className='background_cinza'>
                        <Subtitulo
                            id={"outros"}
                            nome={"Outros"}
                        />

                        <Fileira
                            fetchUrl={"http://localhost:8080/outros/"}
                            href={"#outros"}
                        />
                    </div>
                </>
            )}

            {filtroClicado && (
                <>
                    <div className='espacamento'></div>
                    {data.length > 0 ? (
                        <div className="card_content_administrativo">
                            <div className="content_administrativo">
                                {values(data).map(resposta => (
                                    <CardSombreado
                                        classificacao={resposta.classificacao}
                                        idCard={resposta.id}
                                        key={resposta.id}
                                        cidade={resposta.cidade}
                                        breve_descricao={resposta.breve_descricao}
                                        valor={resposta.valor}
                                        situacao={resposta.situacao}
                                        informacoes={{
                                            id: resposta.id,
                                            cidade: resposta.cidade,
                                            valor: resposta.valor,
                                            descricao: resposta.descricao,
                                            link_whatsapp: resposta.link_whatsapp,
                                            link_facebook: resposta.link_facebook,
                                            link_instagram: resposta.link_instagram,
                                            link_olx: resposta.link_olx,
                                            classificacao: resposta.classificacao,
                                            tipo: resposta.tipo,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className='resposta_filtro_content'>
                            <div className='resposta_filtro'>

                                <div className='filtro_imagem_emoji'>
                                    <img src={IconTriste} alt="Emoji triste" />
                                </div>

                                Nenhum produto foi encontrado
                            </div>
                        </div>
                    )}
                </>
            )}

            <Footer />

        </div>
    );
}

export default ConteudoHome;
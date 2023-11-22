import React, { useEffect, useState } from 'react';
import Filtro from '../components/cliente/Filtro';
import PrimeiroSubtitulo from '../components/cliente/PrimeiroSubtitulo';
import Fileira from '../components/cliente/Fileira';
import Subtitulo from '../components/cliente/Subtitulo';
import Footer from '../components/cliente/Footer';
import Header from '../components/cliente/Header';
import values from 'lodash/values';
import FileiraCardSombreado from '../components/cliente/FileiraCardSombreado';
import CardSombreado from '../components/cliente/CardSombreado';

function ConteudoHome({ onClick }) {
    const [filtroClicado, setFiltroClicado] = useState(false);
    const [classificacaoSelecionada, setClassificacaoSelecionada] = useState('');
    const [tipoSelecionado, setTipoSelecionado] = useState('');
    const [cidade, setCidade] = useState('');
    const [mensagemLogin, setMensagemLogin] = useState(false);
    const [respostaLocalhost, setRespostaLocalhost] = useState('');
    const [data, setData] = useState([]);

    const getProdutos = async (filtro) => {
        const response = await fetch('http://localhost:8080/filtro/', {
            method: 'POST',
            body: JSON.stringify(filtro),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const dataFiltrada = await response.json();

        setData(dataFiltrada);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            classificacao: classificacaoSelecionada,
            tipo: tipoSelecionado,
            cidade,
        };

        console.log('Dados a serem enviados para filtrar:', dados);

        try {
            await getProdutos(dados);

            const response = await fetch('http://localhost:8080/filtro/', {
                method: 'POST',
                body: JSON.stringify(dados),
            });

            const resposta = await response.text();
            console.log('Resposta da API AQUII:', resposta);

            setRespostaLocalhost(resposta);
            setMensagemLogin(true);

            setFiltroClicado(true)
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
        }
    };

    useEffect(() => {
        document.title = "Home Cliente";
        getProdutos();
    }, []);

    return (
        <div className='container'>

            {/* NÃO CLICADO */}
            {!filtroClicado && (
                < Header href="#imoveis" />
            )}

            {filtroClicado && (
                <Header href="/home" />
            )}

            <Filtro
                onClick={onClick}
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
                    {values(data).map(produto =>
                        <CardSombreado
                            classificacao={produto.classificacao}
                            idCard={produto.id_produto}
                            key={produto.id_produto}
                            cidade={produto.cidade}
                            breve_descricao={produto.breve_descricao}
                            valor={produto.valor}
                            situacao={produto.situacao}
                            informacoes={{
                                id: produto.id_produto,
                                cidade: produto.cidade,
                                valor: produto.valor,
                                descricao: produto.descricao,
                                link_whatsapp: produto.link_whatsapp,
                                link_facebook: produto.link_facebook,
                                link_instagram: produto.link_instagram,
                                link_olx: produto.link_olx,
                                classificacao: produto.classificacao,
                                tipo: produto.tipo,
                            }}
                        />
                    )}

                </>
            )}

            <Footer />

        </div>
    );
}

export default ConteudoHome;
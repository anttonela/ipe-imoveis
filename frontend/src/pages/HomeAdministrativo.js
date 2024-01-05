import React, { useEffect } from 'react';

import Header from '../components/cliente/Header';
import Footer from '../components/cliente/Footer';
import Subtitulo from '../components/cliente/Subtitulo';
import FileiraCard from '../components/administrador/FileiraCard';
import PrimeiroSubtitulo from '../components/cliente/PrimeiroSubtitulo';
import BotaoNovoImovel from '../components/administrador/BotaoNovoImovel';

function HomeAdministrativo() {

    const descerParaImoveis = () => {
        const elemento = document.getElementById('imoveis');

        if (elemento) {
            window.scrollTo({
                top: elemento.offsetTop,
                behavior: 'smooth',
            });
        }
    };
    
    const fecharModal = () => {
        window.location.href = '/home/administrador';
    }

    useEffect(() => {
        document.title = "Home Administrativo"
    }, []);

    return (
        <div className='container'>

            <Header botao={<div onClick={descerParaImoveis} className='botao_header'>Ver Imóveis</div>} />

            <BotaoNovoImovel fecharModal={fecharModal} />

            <PrimeiroSubtitulo
                id={"imoveis"}
                nome={"Imóveis"}
            />

            <FileiraCard
                fetchUrl={"http://localhost:8080/imoveis"}
            />

            <Subtitulo nome={"Máquinas Agrícolas"} />

            <FileiraCard
                fetchUrl={"http://localhost:8080/maquinasAgricolas"}
            />

            <Subtitulo nome={"Outros"} />

            <FileiraCard
                fetchUrl={"http://localhost:8080/outros"}
            />

            <Footer />

        </div>
    );
}

export default HomeAdministrativo;
import React, { useEffect } from 'react';

import Header from '../components/cliente/Header';
import Footer from '../components/cliente/Footer';
import Subtitulo from '../components/cliente/Subtitulo';
import FileiraCard from '../components/administrador/FileiraCard';
import BotaoNovoImovel from '../components/administrador/BotaoNovoImovel';
import PrimeiroSubtitulo from '../components/cliente/PrimeiroSubtitulo';

function HomeAdministrativo() {

    useEffect(() => {
        document.title = "Home Administrativo"
    }, []);

    return (
        <div className='container'>

            <Header />

            <BotaoNovoImovel />

            <PrimeiroSubtitulo nome={"Imóveis"} />

            <FileiraCard />
            <FileiraCard />

            <Subtitulo nome={"Máquinas Agrícolas"} />

            <FileiraCard />
            <FileiraCard />

            <Subtitulo nome={"Outros"} />

            <FileiraCard />
            <FileiraCard />

            <Footer />

        </div>
    );
}

export default HomeAdministrativo;
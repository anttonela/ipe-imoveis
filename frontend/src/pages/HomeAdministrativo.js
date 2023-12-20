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

            <Header texto_botao="Ver imóveis" href={"#imoveis"} />

            <BotaoNovoImovel />

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
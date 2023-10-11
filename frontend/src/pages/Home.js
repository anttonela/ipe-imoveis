import React, { useEffect } from 'react';

import Header from '../components/cliente/Header';
import Footer from '../components/cliente/Footer';
import Fileira from '../components/cliente/Fileira';
import Subtitulo from '../components/cliente/Subtitulo';
import FiltroFileira from '../components/cliente/FiltroFileira';
import PrimeiroSubtitulo from '../components/cliente/PrimeiroSubtitulo';

function Home() {

    useEffect(() => {
        document.title = "Home Cliente"
    }, []);

    return (
        <div className='container'>

            <Header href="#imoveis" />

            <FiltroFileira />

            <div className='background_cinza'>
                <PrimeiroSubtitulo id={"imoveis"} nome={"Imóveis"} />
                <Fileira href={"#imoveis"} />
            </div>

            <Subtitulo id={"maquinas_agricolas"} nome={"Máquinas Agrícolas"} />
            <Fileira href={"#maquinas_agricolas"} />

            <div className='background_cinza'>
                <Subtitulo id={"outros"} nome={"Outros"} />
                <Fileira href={"#outros"} />
            </div>

            <Footer />

        </div>
    );
}

export default Home;
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

            <Header />

            <FiltroFileira />

            <div className='background_cinza'>
                <PrimeiroSubtitulo nome={"Imóveis"} />
                <Fileira />
            </div>

            <Subtitulo nome={"Máquinas Agrícolas"} />

            <Fileira />

            <div className='background_cinza'>
                <Subtitulo nome={"Outros"} />
                <Fileira />
            </div>

            <Footer />

        </div>
    );
}

export default Home;
import React, { useEffect } from 'react';

import '../../assets/css/style.css';
import '../../assets/fonts/fonts.css';

import Header from '../../components/cliente/Header';
import Footer from '../../components/cliente/Footer';
import BotaoNovoImovel from '../../components/administrador/BotaoNovoImovel';
import FileiraCard from '../../components/administrador/FileiraCard';

function Home() {

    useEffect(() => {
        document.title = "Home Administrativo"
    }, []);

    return (
        <div className='container'>

            <Header />

            <BotaoNovoImovel />

            <div className='subtitulo_content'>
                <div className='subtitulo'>Imóveis</div>
            </div>

            <FileiraCard />
            <FileiraCard />

            <div className='segundo_subtitulo_content'>
                <div className='segundo_subtitulo'>Máquinas Agrícolas</div>
            </div>

            <FileiraCard />
            <FileiraCard />

            <div className='segundo_subtitulo_content'>
                <div className='segundo_subtitulo'>Outros</div>
            </div>

            <FileiraCard />
            <FileiraCard />

            <Footer />

        </div>
    );
}

export default Home;
import React, { useEffect } from 'react';

import '../../assets/css/style.css';
import '../../assets/fonts/fonts.css';

import Header from '../../components/cliente/Header';
import Footer from '../../components/cliente/Footer';
import Filtro from '../../components/cliente/Filtro';
import Fileira from '../../components/cliente/Fileira';

function Home() {

    useEffect(() => {
        document.title = "Home Cliente"
    }, []);

    return (
        <div className='container'>

            <Header />

            <div className='filtro'>
                <Filtro
                    categoria={"Tipo de Imóvel"}
                    option={{ um: '1', dois: '2', tres: '3' }} />
                <Filtro
                    categoria={"Produto"}
                    option={{ um: '1', dois: '2', tres: '3' }} />
                <Filtro
                    categoria={"Cidade"}
                    option={{ um: 'Acreúna', dois: 'Indiara', tres: 'Goiânia' }} />
                <div className='botao_filtro_content'>
                    <button className='botao_filtro inter_500'>Pesquisar</button>
                </div>
            </div>

            <div className='background_cinza'>
                <div className='subtitulo_content'>
                    <div className='subtitulo'>Imóveis</div>
                </div>
                <Fileira />
            </div>

            <div className='segundo_subtitulo_content'>
                <div className='segundo_subtitulo'>Máquinas Agrícolas</div>
            </div>
            <Fileira />

            <div className='background_cinza'>
                <div className='segundo_subtitulo_content'>
                    <div className='segundo_subtitulo'>Outros</div>
                </div>
                <Fileira />
            </div>

            <Footer />

        </div>
    );
}

export default Home;
import React, { useEffect, useState } from 'react';

import Header from './/Header';
import Footer from './Footer';
import Fileira from './/Fileira';
import Subtitulo from './Subtitulo';
import Filtro from './Filtro';
import PrimeiroSubtitulo from './PrimeiroSubtitulo';

function ConteudoHome({ onClick }) {

    useEffect(() => {
        document.title = "Home Cliente"
    }, []);

    return (
        <div className='container'>

            <Header href="#imoveis" />

            <Filtro onClick={onClick} />

            <div className='background_cinza'>
                <PrimeiroSubtitulo
                    id={"imoveis"}
                    nome={"Imóveis"}
                />

                <Fileira
                    fetchUrl={"http://localhost:8080/imoveis"}
                    href={"#imoveis"}
                />
            </div>

            <Subtitulo
                id={"maquinas_agricolas"}
                nome={"Máquinas Agrícolas"}
            />

            <Fileira
                fetchUrl={"http://localhost:8080/maquinasAgricolas"}
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

            <Footer />

        </div>
    );
}

export default ConteudoHome;
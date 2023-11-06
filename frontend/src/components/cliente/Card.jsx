import values from 'lodash/values';
import { useEffect, useState } from 'react';
import FotoImovel from '../../assets/img/imoveis.png';
import ModalInformacoes from './ModalInformacoes';

function Card({ idCard, cidade, breve_descricao, valor, situacao }) {
    const [data, setData] = useState([]);

    const getModal = async () => {
        fetch("http://localhost:8080/modal/")
            .then((response) => response.json())
            .then((responseJson) => (
                setData(responseJson)
            ));
    }

    useEffect(() => {
        getModal();
    }, []);

    return (
        <>

            <a
                href='#modal_informacoes'
                className='link'
            >

                <div className='card'>

                    <div className='card_imagem'>
                        <img
                            src={FotoImovel}
                            className='card_imagem'
                        />
                    </div>

                    <div className='card_informacoes_content'>
                        <div className='card_informacoes'>
                            <div className='card_sobre'>
                                <div className='nome_produto inter_700'>{cidade}</div>
                                <div className='card_texto'>{breve_descricao}</div>
                            </div>

                            <div className='card_valor'>
                                <div className='valor_produto inter_700'>R$: {valor}</div>
                                <div className='card_texto'>{situacao}</div>
                            </div>
                        </div>
                    </div>

                </div>

            </a>

            {values(data).map(produto => (

                <div id='modal_informacoes' className="modal">

                    <ModalInformacoes
                        id={produto.id_produto}
                        cidade={produto.cidade}
                        valor={produto.valor}
                        descricao={produto.descricao}
                        linkWhatsapp={produto.link_whatsapp}
                        linkFacebook={produto.link_facebook}
                        linkInstagram={produto.link_instagram}
                        linkOlx={produto.link_olx}
                    />

                </div>

            ))}
        </>
    );
}

export default Card;
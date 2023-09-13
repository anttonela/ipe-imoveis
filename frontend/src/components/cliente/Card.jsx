import FotoImovel from '../../assets/img/imoveis.png';
import ModalInformacoes from './ModalInformacoes';

function Card({ descricao_produto }) {
    return (
        <>
            <a href='#modal_informacoes' className='link'>

                <div className='card'>
                    <div className='card_imagem'>
                        <img src={FotoImovel} className='card_imagem' />
                    </div>

                    <div className='card_informacoes_content'>
                        <div className='card_informacoes'>
                            <div className='card_sobre'>
                                <div className='nome_produto inter_700'>Goiânia</div>
                                <div className='card_texto'>{descricao_produto}</div>
                            </div>

                            <div className='card_valor'>
                                <div className='valor_produto inter_700'>R$: 1.000.000</div>
                                <div className='card_texto'>28x de R$ 0.000,00</div>
                            </div>
                        </div>
                    </div>
                </div>

            </a>

            <div id='modal_informacoes' className="modal">

                <ModalInformacoes />

            </div>
        </>
    );
}

export default Card;
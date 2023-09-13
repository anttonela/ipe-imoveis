import FotoImovel from '../../assets/img/imoveis.png';
import ModalInformacoes from './ModalInformacoes';

function CardCentral({ descricao_produto }) {
    return (
        <>
            <a href='#modal_informacoes' className='link'>

                <div className='card_central'>
                    <div className='card_central_imagem'>
                        <img src={FotoImovel} className='card_central_imagem' />
                    </div>

                    <div className='card_central_informacoes_content'>
                        <div className='card_central_informacoes'>
                            <div className='card_central_sobre'>
                                <div className='nome_produto_central inter_700'>Goiânia</div>
                                <div className='card_central_texto inter_500'>{descricao_produto}</div>
                            </div>

                            <div className='card_central_valor'>
                                <div className='valor_produto_central inter_700'>R$: 1.000.000</div>
                                <div className='card_central_texto inter_500'>28x de R$ 0.000,00</div>
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

export default CardCentral;
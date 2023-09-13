import ImagemImoveis from '../../assets/img/imoveis.png';
import IconLapis from '../../assets/img/lapis.png';
import IconLixeira from '../../assets/img/lixeira.png';
import ModalEditar from './ModalEditar';

function Card() {
    return (
        <>
            <div className="card card_administrativo">

                <div className="card_imagem">
                    <img className="card_imagem" src={ImagemImoveis} />
                </div>

                <div className='card_informacoes_content'>
                    <div className='card_informacoes'>

                        <div className='card_sobre'>
                            <div className='card_editar'>
                                <div className='nome_produto inter_700'>Goiânia</div>
                                <div className='card_editar_icons'>
                                    <a href='#modal_editar' className='link'>
                                        <img className='editar_icon' src={IconLapis} />
                                    </a>
                                    <img className='editar_icon' src={IconLixeira} />
                                </div>
                            </div>

                            <div className='card_texto inter_500'>Setor Fulano, Número 60, Lote 08, Quadra 04</div>
                        </div>

                        <div className='card_valor'>
                            <div className='valor_produto inter_700'>R$: 1.000.000</div>
                            <div className='card_texto'>28x de R$ 0.000,00</div>
                        </div>
                    </div>
                </div>

            </div>

            <div id='modal_editar' className='modal'>
                <ModalEditar />
            </div>
        </>
    );
}

export default Card;
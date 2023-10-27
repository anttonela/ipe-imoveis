import IconLapis from '../../assets/img/lapis.svg';
import ModalEditar from './ModalEditar';
import IconLixeira from '../../assets/img/lixeira.svg';
import ImagemImoveis from '../../assets/img/imoveis.png';

function Card({ cidade, breve_descricao, valor, quantidade_parcelas, valor_mensal }) {
    return (
        <div className="espacamento_fileira">

            <div className="card card_administrativo">

                <div className="card_imagem">
                    <img className="card_imagem" src={ImagemImoveis} />
                </div>

                <div className='card_informacoes_content'>
                    <div className='card_informacoes'>

                        <div className='card_sobre'>
                            <div className='card_editar'>
                                <div className='nome_produto inter_700'>{cidade}</div>
                                <div className='content-card_editar_icons'>
                                    <div className='card_editar_icons'>
                                        <a href='#modal_editar' className='link'>
                                            <img className='editar_icon' src={IconLapis} />
                                        </a>
                                        <img className='editar_icon' src={IconLixeira} />
                                    </div>
                                </div>
                            </div>

                            <div className='card_texto inter_500'>{breve_descricao}</div>
                        </div>

                        <div className='card_valor'>
                            <div className='valor_produto inter_700'>R$: {valor}</div>
                            <div className='card_texto'>{quantidade_parcelas}x de R$ {valor_mensal}</div>
                        </div>
                    </div>
                </div>

            </div>

            <div id='modal_editar' className='modal'>
                <ModalEditar />
            </div>
        </div>
    );
}

export default Card;
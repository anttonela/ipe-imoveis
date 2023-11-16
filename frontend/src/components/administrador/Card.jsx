import IconLapis from '../../assets/img/lapis.svg';
import ModalEditar from './ModalEditar';
import IconLixeira from '../../assets/img/lixeira.svg';
import ImagemImoveis from '../../assets/img/imoveis.png';

function Card({ cidade, breve_descricao, valor, situacao, classificacao, idCard, tipo, descricao, whatsapp, instagram, facebook, olx }) {

    const handleDeleteClick = () => {
        const apagar = window.confirm('Você deseja apagar este produto?');

        if (apagar) {
            fetch('http://localhost:8080/apagar', {
                method: 'POST',
                body: JSON.stringify({ cidade }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

                .catch(error => {
                    console.error('Erro ao apagar o produto:', error);
                });
        }
    }

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
                                        <a
                                            className='link'
                                            href={`#${classificacao}/${idCard}`}
                                        >
                                            <img className='editar_icon' src={IconLapis} />
                                        </a>
                                        <img className='editar_icon' src={IconLixeira} onClick={handleDeleteClick} />
                                    </div>
                                </div>
                            </div>

                            <div className='card_texto inter_500'>{breve_descricao}</div>
                        </div>

                        <div className='card_valor'>
                            <div className='valor_produto inter_700'>R$: {valor}</div>
                            <div className='card_texto'>{situacao}</div>
                        </div>
                    </div>
                </div>

            </div>

            <div
                id={`${classificacao}/${idCard}`}
                className='modal'
            >
                <ModalEditar
                    idCard={idCard}
                    cidadeProduto={cidade}
                    classificacaoProduto={classificacao}
                    tipoProduto={tipo}
                    valorProduto={valor}
                    descricaoProduto={descricao}
                    linkWhatsappProduto={whatsapp}
                    linkInstagramProduto={instagram}
                    linkFacebookProduto={facebook}
                    linkOlxProduto={olx}
                />
            </div>

        </div>
    );
}

export default Card;
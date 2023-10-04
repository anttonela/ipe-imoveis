import ImagemImoveis from '../../assets/img/imoveis.png';
import ModalInformacoes from './ModalInformacoes';

function CardSombreado({ dados, informacoesModal }) {
    return (
        <>
            <a href='#modal_informacoes' className='link'>

                <div className="card card_administrativo">

                    <div className="card_imagem">
                        <img className="card_imagem" src={ImagemImoveis} />
                    </div>

                    <div className='card_informacoes_content'>
                        <div className='card_informacoes'>

                            <div className='card_sobre'>
                                <div className='card_editar'>
                                    <div className='nome_produto inter_700'>{dados.cidade}</div>
                                </div>

                                <div className='card_texto inter_500'>{dados.breve_descricao}</div>
                            </div>

                            <div className='card_valor'>
                                <div className='valor_produto inter_700'>R$: {dados.valor}</div>
                                <div className='card_texto'>{dados.quantidade_parcelas}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </a>

            <div id='modal_informacoes' className="modal">

                <ModalInformacoes
                    dados=
                    {{
                        id: informacoesModal.id,
                        cidade: informacoesModal.cidade,
                        valor: informacoesModal.valor,
                        descricao: informacoesModal.descricao
                    }}
                />

            </div>
        </>
    );
}

export default CardSombreado;
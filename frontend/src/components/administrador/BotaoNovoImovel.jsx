import IconPlus from '../../assets/img/plus.svg';
import ModalNovoImovel from './ModalNovoImovel';

function BotaoNovoImovel() {
    return (
        <>
            <div className='novo_imovel'>
                <a href='#modal_novo_imovel' className='link'>
                    <div className='botao_novo_imovel' type='button'>

                        <div className='conteudo_adicionar_imovel'>
                            <div className='botao_adicionar_content'>
                                <button type='button' className='botao_adicionar'>
                                    <img className='icon_plus' src={IconPlus}></img>
                                </button>
                            </div>

                            <div className='texto_novo_imovel'>Cadastrar novo imóvel</div>
                        </div>

                    </div>
                </a>
            </div>

            <div id='modal_novo_imovel' className='modal'>
                <ModalNovoImovel />
            </div>
        </>
    );
}

export default BotaoNovoImovel;
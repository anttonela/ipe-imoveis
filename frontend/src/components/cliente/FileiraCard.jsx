import Card from './Card';
import CardCentral from './CardCentral'
import SetaEsquerda from '../../assets/img/seta-esquerda.png';
import SetaDireita from '../../assets/img/seta-direita.png';

function FileiraCard() {
    return (
        <div className="card_content">
            <img src={SetaEsquerda} />

            <Card />
            <Card />
            <CardCentral descricao_produto={"Setor Fulano, Número 60, Lote 08, Quadra 04"} />
            <Card />
            <Card />

            <img src={SetaDireita} />
        </div>
    );
}

export default FileiraCard;
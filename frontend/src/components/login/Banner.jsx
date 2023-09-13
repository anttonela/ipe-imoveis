import BannerImagem from '../../assets/img/banner.png';

function Banner() {
    return (
        <div className='banner'>
            <img className='imagem_banner' src={BannerImagem} />
        </div>
    );
}

export default Banner;
import Filtro from '../cliente/Filtro';

function FiltroFileira() {
    return (
        <div className='filtro'>
            <Filtro
                categoria={"Tipo de Imóvel"}
                
                option=
                {{
                    um: '1',
                    dois: '2',
                    tres: '3'
                }}
            />

            <Filtro
                categoria={"Produto"}

                option=
                {{
                    um: '1',
                    dois: '2',
                    tres: '3'
                }}
            />

            <Filtro
                categoria={"Cidade"}

                option=
                {{
                    um: 'Acreúna',
                    dois: 'Indiara',
                    tres: 'Goiânia'
                }}
            />

            <div className='botao_filtro_content'>
                <button className='botao_filtro inter_500'>Pesquisar</button>
            </div>
        </div>
    );
}

export default FiltroFileira;
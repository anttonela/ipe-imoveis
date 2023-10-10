import { useState } from 'react';
import Filtro from '../cliente/Filtro';

function FiltroFileira() {
    const [tipo, setTipo] = useState('');
    const [produto, setProduto] = useState('');
    const [cidade, setCidade] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const dados = {
            tipo,
            produto,
            cidade,
        };
    
        console.log('Dados a serem enviados:', dados);
    
        try {
            const response = await fetch('http://localhost:8080/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });
    
            const data = await response.text();
            console.log('Resposta da API:', data);
        } catch (error) {
            console.error('Erro ao enviar os dados para a API:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>

            <div className='filtro'>
                <Filtro
                    id={"select_tipo"}
                    name={"select_tipo"}
                    value={tipo}
                    onChange={setTipo}
                    categoria={"Tipo"}
                    option=
                    {{
                        um: 'Imóvel',
                        dois: 'Máquinas Agrícolas',
                        tres: 'Outros'
                    }}
                />

                <Filtro
                    id={"select_produto"}
                    name={"select_produto"}
                    value={produto}
                    onChange={setProduto}
                    categoria={"Produto"}
                    option=
                    {{
                        um: '1',
                        dois: '2',
                        tres: '3'
                    }}
                />

                <Filtro
                    id={"select_cidade"}
                    name={"select_cidade"}
                    value={cidade}
                    onChange={setCidade}
                    categoria={"Cidade"}
                    option=
                    {{
                        um: 'Acreúna',
                        dois: 'Indiara',
                        tres: 'Goiânia'
                    }}
                />

                <div className='botao_filtro_content'>
                    <button className='botao_filtro inter_500' type="submit">Pesquisar</button>
                </div>
            </div>
        </form>
    );
}

export default FiltroFileira;
import Filtro from '../cliente/Filtro';
import React, { useState } from 'react';
import FiltroAtualiza from './FiltroAtualiza';
import CardFiltro from './CardFiltro';

function FiltroFileira() {
    const [classificacaoSelecionada, setClassificacaoSelecionada] = useState('');
    const [tipoSelecionado, setTipoSelecionado] = useState('');
    const [cidade, setCidade] = useState('');
    const opcoesClassificacao = ['Imóvel', 'Máquinas Agrícolas', 'Outros'];

    const opcoesTipos = {
        'Imóvel': ['Apartamento', 'Casa', 'Fazenda', 'Terreno', 'Imóvel Comercial'],
        'Máquinas Agrícolas': ['Máquinas Agrícolas', 'Implementos Agrícolas'],
        'Outros': ['Outros'],
    }

    const atualizarOpcoesTipo = (classificacao) => {
        setTipoSelecionado('');
        setClassificacaoSelecionada(classificacao);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            classificacao: classificacaoSelecionada,
            tipo: tipoSelecionado,
            cidade,
        };

        console.log('Dados a serem enviados:', dados);

        try {
            const response = await fetch('http://localhost:8080/filtro', {
                method: 'POST',
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

                <FiltroAtualiza
                    id={"select_classificacao"}
                    name={"select_classificacao"}
                    value={classificacaoSelecionada}
                    onChange={atualizarOpcoesTipo}
                    hidden={"Classificação"}
                    option=
                    {
                        opcoesClassificacao.map((classificacao) => (
                            <option key={classificacao} value={classificacao}>
                                {classificacao}
                            </option>
                        ))
                    }
                />

                <FiltroAtualiza
                    id={"select_tipo"}
                    name={"select_tipo"}
                    value={tipoSelecionado}
                    onChange={setTipoSelecionado}
                    hidden={"Tipo"}
                    option=
                    {
                        opcoesTipos[classificacaoSelecionada] &&
                        opcoesTipos[classificacaoSelecionada].map((tipo) => (
                            <option key={tipo} value={tipo}>
                                {tipo}
                            </option>
                        ))
                    }
                />

                <Filtro
                    id={"select_cidade"}
                    name={"select_cidade"}
                    value={cidade}
                    onChange={setCidade}
                    option=
                    {{
                        hidden: 'Cidade',
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

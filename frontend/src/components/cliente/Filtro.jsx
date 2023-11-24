import InputFiltro from './InputFiltro';
import React, { useState } from 'react';
import FiltroAtualiza from './FiltroAtualiza';

function Filtro({ handleSubmit, setFiltroClicado, tipoSelecionado, setTipoSelecionado, cidade, setCidade, classificacaoSelecionada, setClassificacaoSelecionada }) {

    const [mensagemLogin, setMensagemLogin] = useState(false);
    const [respostaLocalhost, setRespostaLocalhost] = useState('');
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

                <InputFiltro
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
                    <button
                        className='botao_filtro inter_500'
                        type="submit"
                    >
                        Pesquisar
                    </button>
                </div>

            </div>

        </form>
    );
}

export default Filtro;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ModalEditar from "./ModalEditar";
import IconLapis from "../../assets/img/lapis.svg";
import IconLixeira from "../../assets/img/lixeira.svg";
import ImagemImoveis from "../../assets/img/imoveis.png";

function Card({
  cidade,
  breve_descricao,
  valor,
  situacao,
  classificacao,
  idCard,
  tipo,
  descricao,
  whatsapp,
  instagram,
  facebook,
  olx,
}) {
  switch (classificacao) {
    case "imovel":
      classificacao = "Imóvel";
      break;
    case "maquinasAgricolas":
      classificacao = "Máquinas Agrícolas";
      break;
    case "outros":
      classificacao = "Outros";
      break;
  }

  const [classificacaoRota, setClassificacaoRota] = useState("");
  const [modalApagar, setModalApagar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const navigate = useNavigate();

  const fecharModalApagar = () => {
    setModalApagar(false);
  };

  const abrirModalApagar = () => {
    setModalApagar(true)
  }

  const abrirModalEditar = () => {
    setModalEditar(true);
  }

  const fecharModalEditar = () => {
    setModalEditar(false);
  };

  const handleDeleteClick = async (e) => {
    e.preventDefault();

    const dados = {
      id: idCard,
    };

    console.log("Dados a serem enviados:", dados);

    try {
      const response = await fetch("http://localhost:8080/apagar/", {
        method: "POST",
        body: JSON.stringify(dados),
      });

      if ((await response.text()) === '"Apagado"') {
        window.location.href = "/home/administrador";
      }
    } catch (error) {
      console.error("Erro ao enviar os dados para a API:", error);
    }
  };

  useEffect(() => {
    switch (classificacao) {
      case "Imóvel":
        setClassificacaoRota("imovel");
        break;
      case "Máquinas Agrícolas":
        setClassificacaoRota("maquinas");
        break;
      case "Outros":
        setClassificacaoRota("outros");
        break;
      default:
        setClassificacaoRota("");
    }
  }, [classificacao]);

  return (
    <div className="espacamento_fileira">
      <div className="card card_administrativo">
        <div className="card_imagem">
          <img className="card_imagem" src={ImagemImoveis} />
        </div>

        <div className="card_informacoes_content">
          <div className="card_informacoes">

            <div className="card_sobre">
              <div className="card_editar">
                <div className="nome_produto inter_700">{cidade}</div>
                <div className="card_editar_icons">

                  <div className="editar_icons">
                    <img onClick={abrirModalEditar} className="editar_icon" src={IconLapis} />
                    <img onClick={abrirModalApagar} className="editar_icon" src={IconLixeira} />
                  </div>

                </div>
              </div>

              <div className="card_texto inter_500">{breve_descricao}</div>
            </div>

            <div className="card_valor">
              <div className="valor_produto inter_700">{valor}</div>
              <div className="card_texto">{situacao}</div>
            </div>
          </div>
        </div>
      </div>

      {modalEditar && (
        <ModalEditar
          fecharModal={fecharModalEditar}
          idCard={idCard}
          cidadeProduto={cidade}
          classificacaoProduto={classificacao}
          tipoProduto={tipo}
          situacaoProduto={situacao}
          valorProduto={valor}
          descricaoProduto={descricao}
          linkWhatsappProduto={whatsapp}
          linkInstagramProduto={instagram}
          linkFacebookProduto={facebook}
          linkOlxProduto={olx}
        />
      )}

      {modalApagar && (
        <div className="modal_apagar_content">
          <div className="modal_apagar">
            <div className="apagar_conteudo">
              <div className="apagar_texto">Você deseja apagar este produto?</div>
              <div className="botoes_apagar">
                <button onClick={fecharModalApagar} className="botao_cancelar_apagar pointer">Cancelar</button>
                <button onClick={handleDeleteClick} className="botao_apagar pointer">Apagar</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Card;

import IconLapis from "../../assets/img/lapis.svg";
import ModalEditar from "./ModalEditar";
import IconLixeira from "../../assets/img/lixeira.svg";
import ImagemImoveis from "../../assets/img/imoveis.png";
import { useEffect, useState } from 'react';

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


  const handleDeleteClick = async (e) => {
    const apagar = window.confirm("Você deseja apagar este produto?");

    if (apagar) {
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
                <div className="nome_produto inter_700">{idCard}</div>
                <div className="content-card_editar_icons">

                  <div className="card_editar_icons">
                    <a href={`#${classificacaoRota}/${idCard}`}>
                      <img className="editar_icon" src={IconLapis} />
                    </a>
                    <img className="editar_icon" src={IconLixeira} onClick={handleDeleteClick} />
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

      <div id={`${classificacaoRota}/${idCard}`} className="modal">
        <ModalEditar
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
      </div>
    </div>
  );
}

export default Card;

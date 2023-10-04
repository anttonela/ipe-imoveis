import React, { useState } from 'react';
import IconSetaVoltar from '../assets/img/seta-voltar-modal.png';
import IconPlus from '../assets/img/plus-branco.png';
import SelectModal from '../components/administrador/SelectModal';
import InformacoesModal from '../components/administrador/InformacoesModal';

function IndexTeste() {
  const [formData, setFormData] = useState({
    cidade: '',
    tipoProduto: '',
    valor: '',
    descricao: '',
    linkWhatsapp: '',
    linkInstagram: '',
    linkFacebook: '',
    linkOLX: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert('Cadastro realizado com sucesso!');
        setFormData({
          cidade: '',
          tipoProduto: '',
          valor: '',
          descricao: '',
          linkWhatsapp: '',
          linkInstagram: '',
          linkFacebook: '',
          linkOLX: '',
        });
      } else {
        console.error('Erro ao cadastrar');
        alert('Ocorreu um erro ao cadastrar.');
      }
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao cadastrar.');
    }
  };

  return (
    <>
      <div className='modal_content'>
        <div className='sair_modal'>
          <a className='seta_voltar_modal' href='#'>
            <img src={IconSetaVoltar} alt="Seta Voltar" />
          </a>
          <div className='botao_fechar_modal inter_500'>Voltar</div>
        </div>
        <div className='imagem_modal_content'>
          <div className='adicionar_foto_content'>
            <div className='adicionar_foto'>
              <div className='botao_adicionar_foto_content'>
                <div className='botao_adicionar_foto'>
                  <img src={IconPlus} alt="Adicionar Foto" />
                </div>
              </div>
              <div className='texto_adicionar_foto inter_700'>Adicionar Fotos</div>
              <div className='texto_quantidade_foto inter_500'>máx: 0</div>
            </div>
          </div>
        </div>
        <div className='modal_informacoes'>
          <form onSubmit={handleSubmit}>
            <div className='modal_select'>
              <SelectModal
                categoria={"Cidade"}
                option={{ hidden: 'Selecionar', um: 'Acreúna', dois: 'Goiânia', tres: 'Indiara' }}
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
              />

              <SelectModal
                categoria={"Tipo de Produto"}
                option={{ hidden: 'Selecionar', um: 'Imóveis', dois: 'Máquinas', tres: 'Outros' }}
                name="tipoProduto"
                value={formData.tipoProduto}
                onChange={handleChange}
              />
            </div>
            <InformacoesModal
              nomeInformacao={"Valor"}
              placeholder={"R$ 0,00"}
              name="valor"
              value={formData.valor}
              onChange={handleChange}
            />

            <div className="input_content_descricao">
              <div className="modalAd_texto inter_500">Descrição</div>
              <input
                className="modal_input descricao"
                placeholder="Descrição"
                type="text"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
              />
            </div>

            <InformacoesModal
              nomeInformacao={"Link Whatsapp"}
              placeholder={"Link..."}
              name="linkWhatsapp"
              value={formData.linkWhatsapp}
              onChange={handleChange}
            />
            <InformacoesModal
              nomeInformacao={"Link Instagram"}
              placeholder={"Link..."}
              name="linkInstagram"
              value={formData.linkInstagram}
              onChange={handleChange}
            />
            <InformacoesModal
              nomeInformacao={"Link Facebook"}
              placeholder={"Link..."}
              name="linkFacebook"
              value={formData.linkFacebook}
              onChange={handleChange}
            />
            <InformacoesModal
              nomeInformacao={"Link OLX"}
              placeholder={"Link..."}
              name="linkOLX"
              value={formData.linkOLX}
              onChange={handleChange}
            />

            <div className='content_botao_confirmar'>
              <button className='botao_confirmar_adicionar' type='submit'>Adicionar</button>
            </div>
          </form>
        </div>
      </div>
      <div className='scroll'></div>
    </>
  );
}

export default IndexTeste;

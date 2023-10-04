function InformacoesModal({ nomeInformacao, placeholder }) {
    return (
        <div className="input_content">
            <div className="modal_ad_texto inter_500">{nomeInformacao}</div>

            <input className="modal_input" placeholder={placeholder} type="text" />
        </div>
    );
}

export default InformacoesModal;
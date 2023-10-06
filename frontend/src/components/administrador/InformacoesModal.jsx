function InformacoesModal({ id, value, onChange, nomeInformacao, placeholder }) {
    return (
        <div className="input_content">
            <div className="modal_ad_texto inter_500">{nomeInformacao}</div>

            <input className="modal_input" placeholder={placeholder} type="text" id={id} value={value}
                onChange={(e) => {
                    { onChange }(e.target.value);
                }} />
        </div>
    );
}

export default InformacoesModal;
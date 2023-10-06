function SelectModal({ id, value, onChange, categoria, option }) {
    /*
    id = "sexo"
    value = { sexo }
    onChange = {(e) => {
        setSexo(e.target.value);
    }
    */

    return (
        <div className="select_content">
            <div className="modal_ad_texto inter_500">{categoria}</div>
            <select id={id} value={value} className="select_modal"
                onChange={(e) => {
                    { onChange }(e.target.value);
                }}
            >
                <option hidden>{option.hidden}</option>
                <option>{option.um}</option>
                <option>{option.dois}</option>
                <option>{option.tres}</option>
            </select>
        </div>
    );
}

export default SelectModal;
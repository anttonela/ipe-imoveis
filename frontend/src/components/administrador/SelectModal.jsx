function SelectModal({ id, value, setOnChange, categoria, option }) {
    return (
        <div className="select_content">
            <div className="modal_ad_texto inter_500">{categoria}</div>
            <select
                id={id}
                value={value}
                className="select_modal"
                onChange={(e) => {
                    setOnChange(e.target.value);
                }}
            >
                <option hidden>{option.hidden}</option>
                <option>{option.um}</option>
                <option>{option.dois}</option>
                <option>{option.tres}</option>
            </select>
        </div >
    );
}

export default SelectModal;
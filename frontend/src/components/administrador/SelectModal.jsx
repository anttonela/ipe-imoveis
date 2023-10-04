function SelectModal({ categoria, option }) {
    return (
        <div className="select_content">
            <div className="modal_ad_texto inter_500">{categoria}</div>
            <select className="select_modal">
                <option hidden>{option.hidden}</option>
                <option>{option.um}</option>
                <option>{option.dois}</option>
                <option>{option.tres}</option>
            </select>
        </div>
    );
}

export default SelectModal;
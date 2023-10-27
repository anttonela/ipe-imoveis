function SelectAtualiza({ categoria, id, value, setOnChange, hidden, option }) {
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
                required
            >
                <option hidden>{hidden}</option>
                {option}
            </select>
        </div >
    );
}

export default SelectAtualiza;
function InputFiltro({ id, name, value, onChange, option }) {
    return (
        <>
            <div className="filtro_card">
                <select
                    className="select inter_400"
                    id={id}
                    name={name}
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                >
                    <option hidden>{option.hidden}</option>
                    <option>{option.um}</option>
                    <option>{option.dois}</option>
                    <option>{option.tres}</option>
                </select>
            </div>

            <div className="linha_divisora"></div>
        </>
    );
}

export default InputFiltro;

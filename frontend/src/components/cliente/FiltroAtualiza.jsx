function FiltroAtualiza({ id, name, value, onChange, hidden, option }) {
    return (
        <>
            <div className="filtro_card">

                <select
                    className="select inter_400"
                    id={id}
                    name={name}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required
                >
                    <option hidden>{hidden}</option>
                    {option}
                </select>
            </div>

            <div className="linha_divisora"></div>
        </>
    );
}

export default FiltroAtualiza;
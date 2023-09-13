function Filtro({ categoria, option }) {
    return (
        <>
            <div className="filtro_card">
                <select className="select inter_400">
                    <option hidden>{categoria}</option>
                    <option>{option.um}</option>
                    <option>{option.dois}</option>
                    <option>{option.tres}</option>
                </select>
            </div>

            <div className="linha_divisora"></div>
        </>
    );
}

export default Filtro;
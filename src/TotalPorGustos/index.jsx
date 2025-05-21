import "./TotalPorGustos.css";

const TotalPorGustos = ({ listaGustos, listaTotales }) => {
    return(
        <>
            <h2>Totales por gusto</h2>
            <ul>
            {listaGustos.map((gusto) => (
                <li key={gusto}>{gusto}: {listaTotales[gusto]}</li>
            ))}
            </ul>
        </>
    )
}

export default TotalPorGustos

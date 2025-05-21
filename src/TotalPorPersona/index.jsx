import "./TotalPorPersona.css";

const TotalPorPersona = ({listaPedidos}) => {
    return(
        <>
            <h2>Pedidos por persona</h2>
            <ul>
                {listaPedidos.map((pedido, index) => (
                <li key={index}>
                    <strong>{pedido.nombre}</strong> ({pedido.sector})
                    <ul>
                    {pedido.empanadas.map((item, i) => (
                        <li key={i}>{item.gusto}: {item.cantidad}</li>
                    ))}
                    </ul>
                </li>
                ))}
            </ul>
        </>
    )
}

export default TotalPorPersona

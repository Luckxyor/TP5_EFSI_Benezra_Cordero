import './App.css'
import { useState } from 'react'
import Formulario from './Formulario'

function App() {
  // Estado para almacenar los pedidos
  const [pedidos, setPedidos] = useState([])

  // Función para calcular el total de empanadas por gusto
  const calcularTotales = () => {
    const totales = {}
    pedidos.forEach(pedido => {
      pedido.empanadas.forEach(item => {
        if (totales[item.gusto]) {
          totales[item.gusto] += +item.cantidad
        } else {
          totales[item.gusto] = +item.cantidad
        }
      })
    })
    return totales
  }

  const totales = calcularTotales()


  const gustos = []
  for (const key in totales) {
    gustos.push(key)
  }

  return (
    <>
      <Formulario setPedidos={setPedidos} />
      <h2>Totales por gusto</h2>
      <ul>
        {gustos.map((gusto) => (
          <li key={gusto}>{gusto}: {totales[gusto]}</li>
        ))}
      </ul>

      <h2>Pedidos por persona</h2>
      <ul>
        {pedidos.map((pedido, index) => (
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

export default App

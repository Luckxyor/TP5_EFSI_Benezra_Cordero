import './App.css'
import { useState } from 'react'
import Formulario from './Formulario'
import TotalPorGustos from './TotalPorGustos'
import TotalPorPersona from './TotalPorPersona'

function App() {
  const [pedidos, setPedidos] = useState([])

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
      <div class="ListaPedidos">
        <TotalPorGustos listaGustos={gustos} listaTotales={totales}/>
        <TotalPorPersona listaPedidos={pedidos}/>
      </div>
    </>
  )
}

export default App

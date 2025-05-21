import { useState } from "react";
import "./Formulario.css";

const Formulario = ({ setPedidos }) => {
  const sectoresEmpresa = [
    "Sistemas",
    "Finanzas",
    "Ventas",
    "Recursos Humanos",
    "Soporte",
    "Depósito",
  ];
  const gustosEmpanadas = [
    "Carne",
    "Pollo",
    "Jamon y Queso",
    "CheeseBurguer",
  ];

  const [empanadas, setEmpanadas] = useState([
    { gusto: gustosEmpanadas[0], cantidad: 1 },
  ]);

  const cambiarEmpanada = (indice, campo, valor) => {
    const nuevosEmpanadas = empanadas.slice();
    if (campo === "cantidad") {
      const cantidadNum = parseInt(valor);
      if (cantidadNum > 0) {
        nuevosEmpanadas[indice][campo] = cantidadNum;
      } else {
        nuevosEmpanadas[indice][campo] = 1;
      }
    } else {
      nuevosEmpanadas[indice][campo] = valor;
    }
    setEmpanadas(nuevosEmpanadas);
  };

  const agregarEmpanada = () => {
    const nuevaLista = empanadas.concat({ gusto: gustosEmpanadas[0], cantidad: 1 });
    setEmpanadas(nuevaLista);
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    const formulario = e.target;
    const nombre = formulario.nombre.value;
    const sector = formulario.sector.value;
    const pedido = {
      nombre: nombre,
      sector: sector,
      empanadas: empanadas.filter(function(item) {
        return item.cantidad > 0;
      }),
    };
    setPedidos(function(pedidos) {
      return pedidos.concat(pedido);
    });
    formulario.reset();
    setEmpanadas([{ gusto: gustosEmpanadas[0], cantidad: 1 }]);
  };

  return (
    <form id="formulario" onSubmit={enviarDatos}>
      <h2>Ingrese sus datos</h2>

      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          placeholder="Ingrese su nombre"
          required
        />
      </label>

      <label>
        Sector:
        <select name="sector" defaultValue={sectoresEmpresa[0]}>
          {sectoresEmpresa.map(function(sector) {
            return (
              <option key={sector} value={sector}>
                {sector}
              </option>
            );
          })}
        </select>
      </label>

      <div>
        <h3>Pedidos de empanadas</h3>
        {empanadas.map(function(item, index) {
          return (
            <div key={index} className="empanada-pedido">
              <label>
                Gusto:
                <select
                  value={item.gusto}
                  onChange={function(e) {
                    cambiarEmpanada(index, "gusto", e.target.value);
                  }}
                >
                  {gustosEmpanadas.map(function(gusto) {
                    return (
                      <option key={gusto} value={gusto}>
                        {gusto}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label>
                Cantidad:
                <input
                  type="number"
                  min="1"
                  value={item.cantidad}
                  onChange={function(e) {
                    cambiarEmpanada(index, "cantidad", e.target.value);
                  }}
                  required
                />
              </label>
            </div>
          );
        })}
        <button type="button" onClick={agregarEmpanada}>
          Agregar otra empanada
        </button>
      </div>

      <button type="submit">Agregar pedido</button>
    </form>
  );
};

export default Formulario;

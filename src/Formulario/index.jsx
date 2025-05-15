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

  const handleEmpanadaChange = (index, field, value) => {
    const nuevosEmpanadas = [...empanadas];
    if (field === "cantidad") {
      const cantidadNum = Number(value);
      nuevosEmpanadas[index][field] = cantidadNum > 0 ? cantidadNum : 1;
    } else {
      nuevosEmpanadas[index][field] = value;
    }
    setEmpanadas(nuevosEmpanadas);
  };

  const agregarEmpanada = () => {
    setEmpanadas([...empanadas, { gusto: gustosEmpanadas[0], cantidad: 1 }]);
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    const formulario = e.target;
    const nombre = formulario.nombre.value;
    const sector = formulario.sector.value;
    const pedido = {
      nombre,
      sector,
      empanadas: empanadas.filter((item) => item.cantidad > 0),
    };
    setPedidos((pedidos) => [...pedidos, pedido]);
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
          {sectoresEmpresa.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </label>

      <div>
        <h3>Pedidos de empanadas</h3>
        {empanadas.map((item, index) => (
          <div key={index} className="empanada-pedido">
            <label>
              Gusto:
              <select
                value={item.gusto}
                onChange={(e) =>
                  handleEmpanadaChange(index, "gusto", e.target.value)
                }
              >
                {gustosEmpanadas.map((gusto) => (
                  <option key={gusto} value={gusto}>
                    {gusto}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Cantidad:
              <input
                type="number"
                min="1"
                value={item.cantidad}
                onChange={(e) =>
                  handleEmpanadaChange(index, "cantidad", e.target.value)
                }
                required
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={agregarEmpanada}>
          Agregar otra empanada
        </button>
      </div>

      <button type="submit">Agregar pedido</button>
    </form>
  );
};

export default Formulario;

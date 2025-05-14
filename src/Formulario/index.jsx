import "./Formulario.css";

const Formulario = ({ setCitas }) => {
  const enviarDatos = (e) => {
    e.preventDefault();
    const formulario = e.target;
    const eleccion=confirm('Querés mandar los datos?');
    if(eleccion){
      const cita = {
      Mascota: formulario.mascota.value,
      Dueno: formulario.propietario.value,
      Fecha: formulario.fecha.value,
      Hora: formulario.hora.value,
      Sintomas: formulario.sintomas.value,
      };
      setCitas(function(citas) {
        const nuevasCitas = citas.slice();
        nuevasCitas.push(cita);
        return nuevasCitas;
      });
    }
    formulario.reset();
  };
  const sectoresEmpresa=['Sistemas', 'Finanzas', 'Ventas', 'Recursos Humanos', 'Soporte', 'Depósito'];
  let gustosEmpanadas = ['Carne', 'Pollo', 'Jamon y Queso', 'CheeseBurguer'];

  return (
    <form id="formulario" onSubmit={enviarDatos}>
      <h2>Ingrese sus datos</h2>

      <label>
        Nombre:
        <input type="text" name="nombre" placeholder="Ingrese su nombre" required />
      </label>

      <label>
        Sector:
        <select name="">
            {sectoresEmpresa.map(sector=>(
                <option value={sector}>{sector}</option>
            ))}
        </select>
      </label>

      <label>
        Gusto de empanada:
        <select name="gusto">
          {gustosEmpanadas.map(gusto => (
            <option value={gusto}>{gusto}</option>
          ))}
        </select>
        Cantidad: <input type="number"/>
      </label>

      <button type="submit">Agregar pedido</button>
    </form>
  );
};

export default Formulario;
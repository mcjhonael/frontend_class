import React, { useState } from "react";

const Formulario = () => {
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    pais: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, apellido, pais } = form;
    if (nombre !== "" && apellido !== "" && pais !== "") {
      console.log("Bien! formulario correcto");
      return;
    }
    setError(true);
  };
  return (
    <div>
      <h2>Registro de Alumnos</h2>
      <form className="shadow" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="nombre: "
            name="nombre"
            onChange={handleChange}
            value={form.nombre}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            className="form-control"
            placeholder="Apellido: "
            name="apellido"
            onChange={handleChange}
            value={form.apellido}
          />
          {error ? (
            <small className="text-muted">INGRESE UN NOMBRE</small>
          ) : (
            "cuidado"
          )}
        </div>
        <div className="form-group">
          <label htmlFor="">Lugar de Residencia</label>
          <select
            className="form-control"
            name="pais"
            onChange={handleChange}
            value={form.pais}
          >
            <option value="01">-- Seleccione Pais --</option>
            <option value="01">Peru</option>
            <option value="02">Bolivia</option>
            <option value="03">Uruguay</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-outline-success">
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;

import React, { useState } from "react";

const Formulario = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    pais: "",
  });
  const { nombre, apellido, pais } = form;
  const [error, setError] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (nombre !== "" && apellido !== "" && pais !== "") {
      setError(false);
      setForm({
        nombre: "",
        apellido: "",
        pais: "",
      });
      console.log("bien ningun error");
      return;
    }
    setError(true);
  };

  return (
    <div>
      {error ? (
        <div
          class="alert alert-primary alert-dismissible fade show"
          role="alert"
        >
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          <strong>llenar todos los campos!</strong>
        </div>
      ) : (
        ""
      )}
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
            value={nombre}
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
            value={apellido}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Lugar de Residencia</label>
          <select
            className="form-control"
            name="pais"
            onChange={handleChange}
            value={pais}
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

import React, { useEffect, useState } from "react";
import { getCategorias, postPlato } from "../services/services";
import Swal from "sweetalert2";
const initialState = {
  plato_nom: "",
  plato_img: "",
  plato_pre: 0,
  categoria_id: "",
};
const FormCrearPlato = () => {
  const [categoria, setCategoria] = useState([]);
  const [plato, setPlato] = useState(initialState);
  const { plato_nom, plato_img, plato_pre, categoria_id } = plato;

  useEffect(() => {
    getCategorias().then((resp) => {
      setCategoria(resp.data);
      console.log(resp.data);
    });
  }, []);
  const handleChange = ({ target: { name, value } }) => {
    setPlato({
      ...plato,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // hay que validar el formulario
    postPlato(plato).then((resp) => {
      console.log(resp);
      if (resp.status ===201) {
        setPlato(initialState)
        Swal.fire({
          icon: "success",
          timer: 1500,
          title: "Creado!",
          text: "Texto creado exitosamente",
          showConfirmButton:false
        })
      }
    })
  };
  return (
    <div className="card shadow">
      <div className="card-body">
        <h2>Registro de Alumnos</h2>
        <form className="shadow" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Nombre_plato</label>
            <input
              type="text"
              className="form-control"
              placeholder="nombre: "
              name="plato_nom"
              onChange={handleChange}
              value={plato_nom}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">URL</label>
            <textarea
              name="plato_img"
              cols="30"
              rows="10"
              value={plato_img}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="">Precio_plato</label>
            <input
              type="text"
              className="form-control"
              placeholder="precio del plato: "
              name="plato_pre"
              onChange={handleChange}
              value={plato_pre}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Lugar de Residencia</label>
            <select
              className="form-control"
              name="categoria_id"
              onChange={handleChange}
              value={categoria_id}
            >
              <option value="">--Seleccione una categoria --</option>
              {categoria.map((objCategoria) => {
                return (
                  <option
                    key={objCategoria.categoria_id}
                    value={objCategoria.categoria_id}
                  >
                    {objCategoria.categoria_nom}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-outline-primary">
              Crear Plato
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCrearPlato;

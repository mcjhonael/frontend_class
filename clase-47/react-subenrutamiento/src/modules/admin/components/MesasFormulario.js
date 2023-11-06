import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { postMesa, putMesas } from "../../../services/services";
import Button from "./Button";

const MesasFormulario = ({ obtenerMesas, modo, mesa, setModo, setMesa }) => {
  const [form, setForm] = useState({
    mesa_nro: "",
    mesa_cap: 0,
  });
  // si la variable mesa cambia su valor la funcion useeffect se vuelve a ejecutar
  //aqui nos manda un error diciendo que hayq ue incluir modo en el arreglo de dependencias o quitarlo de alli
  //el arreglo de depencias se lee asi asi cambie la variable mesa o modo se va efectuar lo  que esta dentro del useEffect 
  useEffect(() => {
    if (modo === "editar") {
      setForm(mesa);
    }
  }, [mesa,modo]);
  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleClick = () => {
    setForm({
      mesa_nro: "",
      mesa_cap: 0,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mesa_cap > 0 && mesa_nro.trim() !== "") {
      if (modo === "crear") {
        postMesa(form).then((res) => {
          console.log(res);
          if (res.mesa_id) {
            setForm({
              mesa_nro: "",
              mesa_cap: 0,
            });
            obtenerMesas();
            Swal.fire({
              title: "creado",
              icon: "success",
              text: "creado exitosamente",
              showConfirmButton: false,
              timer: 1000,
              position: "center",
            });
          }
        });
      } else {
        putMesas(form).then((res) => {
          if (res.mesa_id) {
            setForm({
              mesa_nro: "",
              mesa_cap: 0,
            });
            obtenerMesas();
            setModo("crear");
            setMesa({});
            Swal.fire({
              title: "Actualizado",
              icon: "success",
              text: "Registro correctamente actualizado",
              showConfirmButton: false,
              timer: 1000,
              position: "center",
            });
          }
        });
      }
    }
  };
  const { mesa_nro, mesa_cap } = form;
  return (
    <div className="row ">
      <div className="col">
        <div className="card shadow">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Nro Mesa</label>
                <input
                  type="text"
                  className="form-control"
                  value={mesa_nro}
                  name="mesa_nro"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Capacidad Mesa</label>
                <input
                  type="number"
                  className="form-control"
                  value={mesa_cap}
                  name="mesa_cap"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group text-center">
                {modo === "crear" ? (
                  <Button texto={`${modo} Mesa`} clase="success" />
                ) : (
                  <Button texto="Guardar Mesa" clase="info" />
                )}

                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={handleClick}
                >
                  Cancelar Mesa
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesasFormulario;

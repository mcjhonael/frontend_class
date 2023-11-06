import React from "react";

const Persona = ({ objPersona, setPersonaseleccionada }) => {
  console.log(objPersona);
  return (
    <div className="col-md-3 mb-3">
      <div className="card shadow">
        <img src={objPersona.avatar} alt="foto" className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            <strong>Nombre: </strong>
            {objPersona.first_name}
          </p>
          <p>
            <strong>Apellido</strong>
            {objPersona.last_name}
          </p>
          <p>
            <strong>Email</strong>
            {objPersona.email}
          </p>
          {/* si hay una persona seleccionada renderiza este boton */}
          {setPersonaseleccionada ? (
            <button
              className="btn btn-outline-success btn-block"
              onClick={() => {
                setPersonaseleccionada(objPersona);
              }}
            >
              Ver mas
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Persona;

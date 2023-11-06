import React, { useState } from "react";
import Persona from "./Persona";

const Personas = (props) => {
  const [personaID, setPersonaID] = useState(0);
  return (
    <>
      <h5>Lista de personas a la fecha {props.fecha}</h5>
      <table border="1">
        <thead className="table-header">
          <tr>
            <th>#ID</th>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>EMAIL</th>s
            <th>FOTO</th>
          </tr>
        </thead>
        <tbody>
          {props.arreglo.map((objPersona) => (
            <Persona
              persona={objPersona}
              key={objPersona.id}
              personaID={personaID}
              setPersonaID={setPersonaID}
            ></Persona> 
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Personas;

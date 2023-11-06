import React from "react";

const Persona = (props) => {
  console.log(props.personaID);
  const clickFila = () => {
    props.setPersonaID(props.persona.id)
  }
  return (
    <tr className={props.personaID === props.persona.id ? "row-active" : ""} onClick={clickFila}>
      <td>{props.persona.id}</td> 
      <td>{props.persona.first_name}</td>
      <td>{props.persona.last_name}</td>
      <td>{props.persona.email}</td>
      <td>
        <img src={props.persona.avatar} alt="imagen" />
      </td>
    </tr>
  );
};

export default Persona;

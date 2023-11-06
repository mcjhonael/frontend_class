import React from "react";
import Personas from "./components/Personas";
import "./estlos/estlos.css"
const App = () => {
  const libros = ["mateo", "marcos", "jean", "solana"];
  const personas = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ];

  // const arreglo = libros.map((objLibro) => <li>{objLibro}</li>);
  return (
    <div>
      <h3>lista de libros</h3>
      <ul>
        {libros.map((objLibro) => (
          <li key={objLibro}>{objLibro}</li>
        ))}
      </ul>
      <hr />
      <h4>Lista de Personas</h4>
      <Personas arreglo={personas} fecha={"18-22-14"}></Personas>
    </div>
  );
};

export default App;

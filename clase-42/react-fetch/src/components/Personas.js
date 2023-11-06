import React, { useEffect, useState } from "react";
import { getPersonas } from "../services/services";
import Persona from "./Persona";

const Personas = ({ setPersonaSeleccionada }) => {
  const [personas, setPersonas] = useState([]);
  const [page, setPage] = useState(1);
  const [total_pages, setTotal_Pages] = useState(0);
  // cual es el ciclo visioso es que el cuando se ejecuta getPersonas() por 1ra vez entonces entra y actualiza serPersonas con un valor nuevo y como dice react cuando actualizar una variable de estado vuelves a dibujar el componente entonces vuelves a llamar a la funcion getPersonas y esta a su vez entra y vuelve a atualizar setPersonas por lo cual otra vez debemos ejecutar el componente y asi sucesivamente
  useEffect(() => {
    // colocar aqui el codigo que no se ejecutara necesariamente todo vez que una variable de estado sea actulizada
    // en el arreglo de variables que cuando sean modificadas, provocaran que la uncion de arriba se ejecute nuevamente
    //cuando el arreglo de dependencia esta vacia el useEffect solo se ejecuta 1 sola vez
    // nota useEffect solo se ejecuta una sola vez cuadno el componente carge por primera vez
    getPersonas(page).then((resp) => {
      setPersonas(resp.data);
      setPage(resp.page);
      setTotal_Pages(resp.total_pages);
    });
  }, [page]);

  const anterior = () => {
    setPage(page - 1);
  };
  const siguiente = () => {
    if (page < total_pages) {
      setPage(page + 1);
    }
  };
  return (
    <>
      {/* mostramos card de personas nada mas */}
      <div className="col-md-8">
        <div className="row justify-content-center mb-3">
          <div className="col-md-2">
            <button
              className="btn btn-outline-danger btn-block"
              onClick={anterior}
              disabled={page===1}
            >
              anterior
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-outline-success btn-block"
              onClick={siguiente}
              disabled={total_pages===page}
            >
              siguiente
            </button>
          </div>
        </div>
        <div className="row">
          {personas.map((objPersona) => (
            <Persona
              objPersona={objPersona}
              key={objPersona.id}
              setPersonaseleccionada={setPersonaSeleccionada}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Personas;

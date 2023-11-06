import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import PosCargando from "./PosCargando";
import PosMesaItem from "./PosMesaItem";

//? recuerda que todas las dependencias que dependan una variable de estado se van a volver a redibujar nuevamente  o tactualizarse nuevamente
//?recuerda cuando una variable de estado cambia y su componente depende de ello entonces lo que componente de renderiza de nuevo y si una vista depende de una ve entonces esa vista se renderiza tbm
//todo lo que dependa de una ve es nuevamente renderizado ya sea componente o vista
//observer rjxs hay que leer
const PosMesas = () => {
  const { result, loading } = useFetch("/mesas");
  return (
    <div className="mesas">
      <ul className="mesas__lista mt-2">
        {loading && <PosCargando />}
        {!loading &&
          result.map((objMesa) => {
            return <PosMesaItem objMesa={objMesa} key={objMesa.mesa_id} />;
          })}
      </ul>
      <div className="mesas__info"></div>
    </div>
  );
};

export default PosMesas;

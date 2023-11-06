import React, { useContext } from "react";
import PosContext from "../../../context/pos/posContext";
import { useFetch } from "../../../hooks/useFetch";
import PosCargando from "./PosCargando";

const PosCategoria = () => {
  const { result, loading } = useFetch("/categoria");
  const localPosContext = useContext(PosContext);
  const { seleccionarCategoria, globalObjCategoria } = localPosContext;
  return (
    <div className="carta__categorias">
      {loading && <PosCargando />}
      {!loading &&
        result.map((objCategoria) => {
          const activo =
            globalObjCategoria?.categoria_id === objCategoria.categoria_id
              ? "activo"
              : "";
          return (
            <button
              className={`boton boton-outline-primary ${activo}`}
              key={objCategoria.categoria_id}
              onClick={() => {
                seleccionarCategoria(objCategoria);
              }}
            >
              {objCategoria.categoria_nom}
            </button>
          );
        })}
    </div>
  );
};

export default PosCategoria;

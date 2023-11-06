import React, { useReducer } from "react";
import PosContext from "./posContext";
import PosReducer from "./posReduce";

const PosState = (props) => {
  const [state, dispatch] = useReducer(PosReducer, {
    globalObjMesa: null,
    globalObjCategoria: null,
  });
  //? el children va tener toda la informacion que esta dentro del componente padre osea va inf de todos los hijos del componente padre (no se usa el children)
  //! Lista de funciones que intentaran modificar el estado

  const seleccionarMesa = (objMesa) => {
    dispatch({
      type: "SELECCIONAR_MESA",
      data: { ...objMesa },
    });
  };
  const seleccionarCategoria = (objCategoria) => {
    dispatch({
      type: "SELECCIONAR_CATEGORIA",
      data: { ...objCategoria },
    });
  };

  return (
    <PosContext.Provider
      value={{
        globalObjMesa: state.globalObjMesa,
        seleccionarMesa,
        globalObjCategoria: state.globalObjCategoria,
        seleccionarCategoria,
      }}
    >
      {props.children}
    </PosContext.Provider>
  );
};

export default PosState;

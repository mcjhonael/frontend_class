const PosReducer = (stateActual, action) => {
  switch (action.type) {
    case "SELECCIONAR_MESA":
      return {
        ...stateActual,
        globalObjMesa: action.data,
      };
      break;
    case "SELECCIONAR_CATEGORIA":
      return {
        ...stateActual,
        globalObjCategoria: action.data,
      };
      break;
    default:
      break;
  }
};
export default PosReducer;

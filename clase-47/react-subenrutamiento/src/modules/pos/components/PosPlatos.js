import React, { useContext, useEffect, useState } from "react";
import PosContext from "../../../context/pos/posContext";
import { getPlatos } from "../../../services/categoria";
import PosPlatoItem from "./PosPlatoItem";

const PosPlatos = () => {
  const [platos, setPlatos] = useState([]);
  const localPosContext = useContext(PosContext);
  const { globalObjCategoria } = localPosContext;
  useEffect(() => {
    if (globalObjCategoria) {
      getPlatos(globalObjCategoria?.categoria_id).then((rpta) => {
        // if (rpta.ok) {
        //   setPlatos(rpta.content.platos)
        // }
        console.log(rpta)
        setPlatos(rpta);
      });
    }
  }, [globalObjCategoria]);
  return (
    <div className="carta__platos">
      <PosPlatoItem />
      <PosPlatoItem />
      <PosPlatoItem />
    </div>
  );
};

export default PosPlatos;

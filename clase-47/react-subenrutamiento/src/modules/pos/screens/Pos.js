import React from "react";
import PosMesas from "../components/PosMesas";
import PosPedido from "../components/PosPedido";
//pos es el punto de venta
//en la carpeta assets se guarda todos los archivos que no son multimedia o audiovisuales archivos que no son programables
const Pos = () => {
  return (
    <section className="tabla">
      <PosMesas />
      <PosPedido />
    </section>
  );
};

export default Pos;

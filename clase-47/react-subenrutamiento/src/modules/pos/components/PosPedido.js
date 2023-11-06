import React, { useContext } from "react";
import PosContext from "../../../context/pos/posContext";
import PosCategoria from "./PosCategoria";
import PosComandaLista from "./PosComandaLista";
import PosPlatos from "./PosPlatos";

const PosPedido = () => {
  //& recuerda que cada vez que queramos sacar lo utlilzar los datos de globalObjMesa este nos dara null por que al inicio es null el valor cuando recien lo seleccionamos va cambair su valor a cualquier valor por cual debemos colarle al objto el ? para que nos mande igual la pantalla xk no manda nada y rechaza la visualizacion
  const localPosContext = useContext(PosContext);
  const { globalObjMesa } = localPosContext;
  return (
    <div className="pedido">
      <div className="carta">
        <PosCategoria />
        <PosPlatos />
      </div>
      <div className="boleta">
        <h3>Pedido</h3>
        <div className="comanda">
          {/* la realida des cambiar a mensa_nro y no a mesa_id */}
          {globalObjMesa ? (
            <>
              <h4 className="comanda__mesa">Mesa {globalObjMesa.mesa_id}</h4>
              <p className="comanda__usuario">Carlos Jimenez</p>
              <hr />
              <PosComandaLista />
              <button className="boton boton-success boton-block">PAGAR</button>
            </>
          ) : (
            <strong>NO HAY NINGUNA MESA SELECCIONADA :) </strong>
          )}
        </div>
      </div>
    </div>
  );
};

export default PosPedido;

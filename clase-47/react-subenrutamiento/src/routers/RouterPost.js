import React from "react";
import { Route, Switch } from "react-router-dom";
import PosState from "../context/pos/posState";
import PosHeader from "../modules/pos/components/PosHeader";
import PosNavegation from "../modules/pos/components/PosNavegation";
import Pos from "../modules/pos/screens/Pos";
import "./../modules/pos/styles/pos.css";
//! se lee asi donde me encuentro salgo a la raiz voy a module de sigo
//? esto es el punto de venta osea la aplicacion a mostrar para poder operar realizar cualquier tipo de operacion
//?aqui en la ruta principal le colocamos todos los estilos
const RouterPost = () => {
  return (
    <PosState>
      <PosHeader/>
      <main className="pos-container">
        <PosNavegation/>
        <Switch>
          <Route path={"/pos"} component={Pos} />
        </Switch>
      </main>
    </PosState>
  );
};

export default RouterPost;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Platos from "./screen/platos/Platos";
import Home from "./screen/home/Home";
import Pos from "./screen/pos/Pos";
import NotFound from "./screen/404/NotFound";
const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/pos"}>Punto de Venta</Link>
            </li>
            <li>
              <Link to={"/platos"}>Lista de Platos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <Switch>
        {/* exact={true} ==== exact es lo mismo  */}
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/pos"} component={Pos} />
        <Route exact path={"/platos"} component={Platos} />
        <Route component={NotFound} />
        {/* si no esta la pagina lo podemos rediregir al home */}
        {/* <Route component={Home}/> */}
      </Switch>
    </Router>
  );
};

export default App;

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AdminHeader from "../modules/admin/components/AdminHeader";
import AdminCategorias from "../modules/admin/screen/AdminCategorias";
import AdminDashboard from "../modules/admin/screen/AdminDashboard";
import AdminMesas from "../modules/admin/screen/AdminMesas";
import AdminPedidos from "../modules/admin/screen/AdminPedidos";
import AdminPedidosDetalle from "../modules/admin/screen/AdminPedidosDetalle";
import AdminPlatos from "../modules/admin/screen/AdminPlatos";


const RouterAdmin = () => {
  return (
    <>
      <AdminHeader />
      <main className="container">
        <Switch>
          {/* colocamos un comodin para poder agregar automaticamente el pedido_id que le vamos a a envar 
          - consideramos mas al que tienes comodin xk es mas especifico despues lo mas general
          * recuerda que el enrutador de react busca de arriba hacia abajo si hubieramos ponido admin/pedios 1ro y le hubieramos mandado el id lo que pasaria es que me hubiera mandado a al pantalla pedido y no al detalle x eso 1ro lo especifico 2do general
          */}
          <Route path={"/admin/dashboard"} component={AdminDashboard} />
          <Route path={"/admin/categorias"} component={AdminCategorias} />
          <Route path={"/admin/mesas"} component={AdminMesas} />
          <Route
            path={"/admin/pedidos/:pedido_id"}
            component={AdminPedidosDetalle}
          />
          <Route path={"/admin/pedidos"} component={AdminPedidos} />
          <Route path={"/admin/platos"} component={AdminPlatos} />
          <Redirect to={"/admin/dashboard"} />
        </Switch>
      </main>
    </>
  );
};

export default RouterAdmin;

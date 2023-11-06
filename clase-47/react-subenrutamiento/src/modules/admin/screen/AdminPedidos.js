import React from "react";
import PedidosTabla from "../components/PedidosTabla";
//? este recibe las props por que sta metdo en otro archivo con route y eso le garantiza tener los props para luego pasarlo a su hijo PedidosTabla
// la funcion q nos permite navegar de una pagina a otra es el history
const AdminPedidos = (props) => {
  // console.log(props);
  // history sirve para navegar en navegador
  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <h1 className="text-center">Lista de Pedidos ORIENTAL - CHINOS</h1>
        </div>
      </div>
      {/* 1 manera de hacerlo */}
      <PedidosTabla history={props.history}/>
      {/* 2da manera de hacerlo podemos hacerle una copia de todos los valores de las props que tiene*/}
      {/* <PedidosTabla {...props}/> */}
    </>
  );
};

export default AdminPedidos;

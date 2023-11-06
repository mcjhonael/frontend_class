import React, { useEffect } from "react";
import { useState } from "react";
import {  useParams } from "react-router-dom";
import { getPedidoDetalle } from "../../../services/pedidos";
import Cargando from "../components/Cargando";

//useHistory es un hook es que puede usar en vez de usar props.history al parecer no podemos usarlo en un calback de onclick x eso nos vamos a props.history
const AdminPedidosDetalle = ({ history }) => {
  // console.log(props.match.params.pedido_id);
  //useParams() es un hooks que defrente te da el objeto que tiene todos loa parametros que hemos enviado por la url
  // es una forma mas facil de acceder
  // console.log(useParams());
  //otra manera de usar extrayendo el parametro enviado | lo mejor que no necesitamos enviar los props del papa
  //una vez obtenido tengo que llamar al servicio para acceder a los datos
  const { pedido_id } = useParams();
  const [pedidoDetalle, setPedidoDetalle] = useState({});
  const [loading, setLoading] = useState(true);
  // console.log("params" + pedido_id);
  useEffect(() => {
    getPedidoDetalle(pedido_id).then((resp) => {
      console.log(resp);
      //?esto quiere decir que si la respuesta tiene un ok va ser true de alli la funcion es una asignacion por lo cual siempre va ser verdad
      //ahora si es ok es false entonces nunca se va setear el valor de setPedidoDetalle
      // resp.ok && setPedidoDetalle(resp.pedido)
      //ala antigua
      if (resp.ok) {
        setPedidoDetalle(resp.pedido);
        console.log(resp);
      }
      setLoading(false);
      //lo pongo antes por que ya cargo el resultado y rapido debe cambiarse antes era diferente pero para ello vamos a a manajar un arto mas los errores que surgen en es todo esto
      // setPedidoDetalle(resp);
    });
  }, [pedido_id]);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <h1 className="text-center">Detalle de Pedido</h1>
          {loading && (
            <Cargando tipo="success" texto="Cargando detalle de pedido" />
          )}
        </div>
      </div>

      {!loading && (
        <>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Pedido</h5>
                </div>
                <div className="card-body ">
                  <p className="card-text">
                    <strong>Nro Pedido: </strong>
                    {pedidoDetalle.pedido_id}
                  </p>
                  <p className="card-text">
                    <strong>Estado: </strong>
                    {pedidoDetalle.pedido_est === "pagado" ? (
                      <span className="badge badge-success">pagado</span>
                    ) : (
                      <span className="badge badge-danger">anulado</span>
                    )}
                  </p>
                  <p className="card-text">
                    <strong>fecha: </strong>
                    {pedidoDetalle.pedido_fech}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Mesa</h5>
                </div>
                <div className="card-body ">
                  <p className="card-text">
                    <strong>Nro Mesa: </strong>
                    {pedidoDetalle.Mesa.mesa_nro}
                  </p>
                  <p className="card-text">
                    <strong>Capacidad Mesa: </strong>
                    {pedidoDetalle.Mesa.mesa_cap} personas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Colaborador</h5>
                </div>
                <div className="card-body ">
                  {/* aqui podriamos colocar apellidos y todos los datos del trabajador que atencion */}
                  <p className="card-text">
                    <strong>Nombre: </strong>
                    {pedidoDetalle.usuario.usu_nom}
                  </p>
                  <p className="card-text">
                    <strong>apellido: </strong>
                    {pedidoDetalle.usuario.usu_ape}
                  </p>
                  <p className="card-text">
                    <strong>tipo: </strong>
                    {pedidoDetalle.usuario.usu_tipo}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Detalle de pedido</h4>
                </div>
                <div className="card-body">
                  <table className="table table-hover table-striped table-bordered text-center">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Cantidad</th>
                        <th>Descripcion</th>
                        <th>P. Unitario</th>
                        <th>P. Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* iterar el arreglo de pedidosPlatos todos los pedidos de una mesa con diferentes pedidos no se puede hacer que el back ya no existe*/}
                      {/* sacaremos el arreglo pedido de todos  recordar con mockapi es limitado x eso no podiamos solucionar  */}
                      {/* recuerda que cuando hacemos calculos tenemos que tenerlo en number para elloo colocamos el + adelante y ya podemos operar sin nungin problema */}
                      {pedidoDetalle.PedidoPlato.map((objPedido, i) => {
                        return (
                          //recuerda que en key no se debe repetir nada y ese caso seria el
                          <tr key={objPedido.pedidoplato_id}>
                            <td>{i + 1}</td>
                            <td>{objPedido.pedidoplato_cant}</td>
                            <td>{objPedido.Plato.plato_nom}</td>
                            <td>
                              <img
                                src="{objPedido.Plato.plato_img}"
                                alt="imagen del plato"
                                height="100px"
                              />
                            </td>
                            <td>S/ {objPedido.Plato.plato_pre}</td>
                            <td>
                              {(
                                +objPedido.pedidoplato_cant *
                                +objPedido.Plato.plato_pre
                              ).toFixed(2)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 justify-content-end">
            <div className="col-md-3">
              <button
                className="btn btn-dark btn-block"
                onclick={() => {
                  // por eso estan importante mandarle al pare el history para que cuando entremos a otras rutas podramos retornar al padre al padre con el metodo que estamos viendo
                  // con esto podemos mandar a la ruta anterior pero digamos que hemos abierto google de alli nos vamor x la url al detallepedido y le damos goBack entonces nos mandara al anterior que hemos visitado para estar mas seguro usamos el push()
                  //  history.goBack();
                  history.push("/admin/pedidos");
                }}
              >
                <i class="fas fa-hand-point-left"></i> Regresar
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminPedidosDetalle;

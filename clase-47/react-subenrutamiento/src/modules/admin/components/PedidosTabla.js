import React, { useEffect, useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import { getPedidos } from "../../../services/pedidos";

// el papa es el que recibe los props listos para mandar a este hijo
const PedidosTabla = ({ history }) => {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    getPedidos().then((resp) => {
      console.log(resp)
      setPedidos(resp)
    });
  }, []);
  // console.log(pedidos)
  const verPedido = (pedido_id) => {
    console.log(pedido_id);
    //? dee esta manera mandamos objetos por la url
    //?la funcion push sirve para que yo le pase una nueva url despues del localhost:3000/lanuevaruta
    history.push(`/admin/pedidos/${pedido_id}`);
  };
  const datatable = {
    columns: [
      { label: "ID", field: "pedido_id" },
      { label: "Nro. Mesa", field: "pedido_nro" },
      { label: "Fecha", field: "pedido_fech" },
      { label: "Estado", field: "pedido_est" },
      { label: "Nro Mesa", field: "mesa_nro" },
      { label: "Acciones", field: "acciones" },
    ],
    rows: pedidos.map((objPedido) => ({
      // pedido_id: objPedido.pedido.pedido_id,
      // pedido_nro: objPedido.pedido.pedido_dnro,
      // pedido_fech: objPedido.pedido_fech,
      ...objPedido,
      pedido_est:
        objPedido.pedido_est === "pagado" ? (
          <span className="badge badge-success">Pagado</span>
        ) : (
          <span className="badge badge-danger">Anulado</span>
        ),
      mesa_nro: objPedido.pedido.Mesa.mesa_nro,
      acciones: (
        <button
          className="btn btn-block btn-outline-dark"
          onClick={() => {
            verPedido(objPedido.pedido.pedido_id);
          }}
        >
          Ver Detalles
        </button>
      ),
    })),
  };
  return (
    <div className="row mt-4">
      <div className="col">
        {pedidos}
        <div className="card shadow">
          <div className="card-body">
            <MDBDataTableV5
              responsive
              hover
              entriesOptions={[5, 20, 25]}
              entries={5}
              pagesAmount={4}
              data={datatable}
              paginationLabel={["antes", "siguiente"]}
              infoLabel={["mostrando", "al", "de", "registros"]}
              searchLabel={"Buscar"}
              entriesLabel={"cantidad de registros"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosTabla;

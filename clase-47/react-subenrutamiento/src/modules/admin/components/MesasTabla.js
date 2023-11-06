import React from "react";
import { MDBDataTableV5 } from "mdbreact";
import { deleteMesa } from "../../../services/services";
import Swal from "sweetalert2";
import Cargando from "./Cargando";

const MesasTabla = ({ loading, mesas, obtenerMesas, setMesa, setModo }) => {
  const eliminarMesa = (mesa_id) => {
    Swal.fire({
      title: "Seguro que deseas Eliminar",
      text: "Lo cambios son irreversibles",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#de0a0a",
    }).then((rpta) => {
      if (rpta.value) {
        deleteMesa(mesa_id).then((res) => {
          if (res.mesa_id) {
            obtenerMesas();
            Swal.fire({
              icon: "success",
              title: "Eliminado Correctamente",
              timer: 1500,
              position: "center",
              showConfirmButton: false,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Hubieron errores en el servidor",
              timer: 1500,
              position: "center",
              showConfirmButton: false,
            });
          }
        });
      }
    });
  };

  const actualizarMesa = (mesa) => {
    console.log(mesa);
    setMesa(mesa);
    setModo("editar");
  };

  const datatable = {
    columns: [
      {
        label: "ID",
        field: "mesa_id",
      },
      {
        label: "NRO Mesa",
        field: "mesa_nro",
      },
      {
        label: "capacidad",
        field: "mesa_cap",
      },
      {
        label: "Acciones",
        field: "mesa_acciones",
      },
    ],
    rows: mesas.map((objMesa) => {
      return {
        ...objMesa,
        mesa_cap: objMesa.mesa_cap + " personas",
        mesa_acciones: (
          <>
            <button
              class="btn btn-outline-danger"
              onClick={() => {
                eliminarMesa(objMesa.mesa_id);
              }}
            >
              Eliminar
            </button>
            <button
              class="btn btn-outline-warning ml-4"
              onClick={() => {
                actualizarMesa(objMesa);
              }}
            >
              Editar
            </button>
          </>
        ),
        // mesa_id: objMesa.mesa_id,
        // mesa_nro: objMesa.mesa_nro,
        // mesa_cap:objMesa.mesa_cap
      };
    }),
  };
  return (
    <div className="row mt-4">
      <div className="col">
        <div className="card">
          <div className="card-body">
            {loading ? (
              <Cargando texto="Cargando los datos" />
            ) : (
              <MDBDataTableV5
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MesasTabla;

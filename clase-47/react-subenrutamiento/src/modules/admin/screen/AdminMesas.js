import React, { useEffect, useState } from "react";
import { getMesas } from "../../../services/services";
import MesasFormulario from "../components/MesasFormulario";
import MesasTabla from "../components/MesasTabla";

const AdminMesas = () => {
  const [mesas, setMesas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modo, setModo] = useState("crear");
  const [mesa, setMesa] = useState({});

  const obtenerMesas = () => {
    getMesas().then((resp) => {
      setMesas(resp);
      console.log(resp);
      setLoading(false);
    });
  };
  useEffect(() => {
    obtenerMesas();
  }, []);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <h1 className="text-center">Mantenimiento de Mesasitas</h1>
        </div>
      </div>
      <MesasFormulario
        obtenerMesas={obtenerMesas}
        modo={modo}
        mesa={mesa}
        setMesa={setMesa}
        setModo={setModo}
      />
      <MesasTabla
        mesas={mesas}
        obtenerMesas={obtenerMesas}
        loading={loading}
        setMesa={setMesa}
        setModo={setModo}
      />
    </>
  );
};

export default AdminMesas;

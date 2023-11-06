import { useEffect, useState } from "react";
import { URL_BACKEND } from "./../enviroments/enviroments";
//^ creamos una hooks para poder llamarlo y se ejcute deacuerdo a lo que necesitemos por ejmeplo hacer una llamada con fetch
//?tiene una variables de estado que va ser modificada cada vez que la llamemos al inicio sera con un resultado nulo y un espera con true
//? tbm tenemos una funcion asincrona la cual va ser usada para ser llamada la api de consumo por lo cual todo se ejecutara pero despues de unos segundo recien mandara el resultado la api
//? por lo cual lo que retornara sera el valor inicial ya que la asincronia nos permite traer el consumo despues de unos segundos y la variable despues se va actualizar pero lo que va pasar es que recien se va modificar la vgariables  de estado trayendo los resultados completos y un loading false xk ya que termino la espera y

console.log(URL_BACKEND);
export const useFetch = (url) => {
  const [estado, setEstado] = useState({ result: null, loading: true });
  useEffect(() => {
    const hacerFetch = async () => {
      const response = await fetch(`${URL_BACKEND}${url}`);
      const json = await response.json();
      setEstado({ result: json, loading: false });
    };
    hacerFetch();
  }, [url]);
  //retorna el estado inicial o el modificado
  return estado;
};

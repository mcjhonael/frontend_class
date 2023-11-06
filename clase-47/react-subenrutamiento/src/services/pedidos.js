import { URL_BACKEND } from "../enviroments/enviroments"
//? se encarga de traer todos los pedidos


export const getPedidos = async () => {
  const response = await fetch(`${URL_BACKEND}/pedidos`);
  const json = await response.json();
  return json;
}


export const getPedidoDetalle = async (pedido_id) => {
  const response = await fetch(`${URL_BACKEND}/pedidos/${pedido_id}`);
  const json = await response.json();
  return json;
}

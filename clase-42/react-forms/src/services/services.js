import axios from "axios";
const URL_BACKEND = "https://5fa13d5d2541640016b6aba9.mockapi.io/";

// export const getCategorias = async () => {
//   const response = await fetch(`URL_BACKEND/categoria`);
//   const json = response.json();
//   return json;
// };
export const getCategorias = async () => {
  const response = axios.get(`${URL_BACKEND}/categoria`);
  return response;
};
export const postPlato = async (plato) => {
  const response = await axios({
    method: "POST",
    data: {
      ...plato,
      plato_pre: +plato.plato_pre
    },
    url: `${URL_BACKEND}/platos`,
    headers: {
      "Content-type": "application/json",
    },
  });
  return response;
};

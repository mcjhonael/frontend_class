/**
 * function que obtiene los platos de una categoria
 * dado el id de la categoria
 * @param {*} categoria_id 
 */

import { URL_BACKEND } from "../enviroments/enviroments"


export const getPlatos = async(categoria_id) => {
  const response = await fetch(`${URL_BACKEND}/categoria/${categoria_id}/platos`);
  const json = await response.json();
  return json;
} 
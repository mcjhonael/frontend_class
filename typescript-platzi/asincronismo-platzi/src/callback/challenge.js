const API = require('../utils/enviroment')
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  // para hacer llamado a una url (method,url,active_sincoronismo(true|false))
  xhttp.open("GET", url_api, true);
  //una vez conectado tengo que escuchar lo que a hacer esa conexion
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error(`Error ${url_api}`);
        return  callback(error,null)
      }
    }
  };
  // al final mandamos la solicitud
  xhttp.send();
}
fetchData(API, function (error1,data1) {
  if (error1) return console.error(error1)
  fetchData(`${API}   ${data1.results[0].id}`, function (error2, data2) {
    if (error2) return console.error(error2)
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    })
  })
})

// los estados de XmlHtppRequest

// Mantiene el estado de XMLHttpRequest.
// 0: solicitud no inicializada
// 1: conexión al servidor establecida
// 2: solicitud recibida
// 3: solicitud de procesamiento
// 4: solicitud finalizada y respuesta lista

// el stande que maneja un callback dentro del entorno de node es
// 1er valor es el error y 2 es la info que se desencadena
// recuerda que el servido manda info que es en texto por que es asi como recibe osea
// mandar datos al servidor = enviados en formato texto
// extrar datos del servidor = debemos transformarlo a json

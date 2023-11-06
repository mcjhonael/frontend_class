let formulario = document.getElementById("formulario");
let inputCodigo = document.getElementById("inputCodigo");
let inputNombre = document.getElementById("inputNombre");
let tbody = document.getElementById("tbody");
let inputColor = document.getElementById("inputColor");
let body = document.querySelector("body");

inputColor.onchange = () => {
  localStorage.setItem("color", inputColor.value);
  body.style.backgroundColor = inputColor.value;
};

//?funcion que se encarga de pintar los datos
const llenarTable = (prod) => {
  let contenido = "";
  prod.forEach(({ codigo, nombre }) => {
    contenido += `
    <tr>
    <td>${codigo}</td>
    <td>${nombre}</td>
    </tr>
    `;
  });
  tbody.innerHTML = contenido;
};

//? la manera mas practica de usar losformularios con el evento onsubmt
//?funcion que se encarga de capturar los datos y guardarlo en localStorage
let productos = [];
formulario.onsubmit = (e) => {
  e.preventDefault();
  let objProducto = {
    codigo: inputCodigo.value,
    nombre: inputNombre.value,
  };
  productos.push(objProducto);
  let prodString = JSON.stringify(productos);
  localStorage.setItem("listaproductos", prodString);

  llenarTable(objProducto);
};
//?funcion que se encarga de verificar si hay datos en localStorage
const verificarSorage = () => {
  let prodStorage = localStorage.getItem("listaproductos");
  let colorStorage = localStorage.getItem("color");
  if (prodStorage) {
    let prodJson = JSON.parse(prodStorage);
    llenarTable(prodJson);
    if (colorStorage) {
      body.style.backgroundColor = colorStorage;
      inputColor.value = colorStorage;
    }
    return;
  }
  s;
};

verificarSorage();

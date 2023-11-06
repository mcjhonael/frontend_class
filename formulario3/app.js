//! recuerda que los name son campos propios de los formularios siempre de los siempre tendras que usarlo
let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputFecha = document.getElementById("inputFecha");
let turnoManana=document.getElementById("turnoManana")
let turnoTarde=document.getElementById("turnoTarde")
let turnoNoche=document.getElementById("turnoNoche")

let objUser = {
  Nombre: "",
  Apellido: "",
  Fecha: "",
  Turno:""
};
const updateObjFormulario = ({target:{name,value}}) =>objUser[name] = value;
formulario.onsubmit = () => {
  
}
inputNombre.onkeyup = updateObjFormulario;
inputApellido.onkeyup = updateObjFormulario;
inputFecha.onchange = updateObjFormulario;
turnoManana.onchange=updateObjFormulario;
turnoTarde.onchange=updateObjFormulario;
turnoNoche.onchange=updateObjFormulario;



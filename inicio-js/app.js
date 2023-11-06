let modoLight = document.getElementById("modoLight");
let modoDark = document.getElementById("modoDark");
let modoToggle = document.getElementById("modoToggle");
let container = document.getElementById("container");
const cambiarFocus = (id) => {
  if (id === "modoLight") {
    container.setAttribute("class", id);
  }else if (id==="modoDark") {
    container.setAttribute("class", id);
  } else { 
    container.setAttribute("class", id);
  }
};
modoLight.onclick = ({ target: { id } }) => cambiarFocus(id);
modoDark.onclick = ({ target: { id } }) => cambiarFocus(id);
modoToggle.onclick = ({ target: { id } }) => cambiarFocus(id);
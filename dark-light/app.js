let modoLight = document.getElementById("modoLight");
let modoDark = document.getElementById("modoDark");
let linkDark = document.getElementById("linkDark");

const cambiarModo = id => linkDark.setAttribute("href", `./${id}.css`);
modoLight.onclick = ({ target: { id } }) => cambiarModo(id);
modoDark.onclick = ({ target: { id } }) => cambiarModo(id);

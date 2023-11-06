window.onload = () => {
  let selectPais = document.getElementById("selectPais");
  let selectDepartamento = document.getElementById("selectDepartamento");
  const getPaises = () => {
    let contenido = `<option value="0">-- Seleccione un Pais --</option>`;
    paises.forEach(
      ({ nombre, id }) =>
        (contenido += `<option value="${id}">${nombre}</option>`)
    );
    selectPais.innerHTML = contenido;
  };

  const getDepartamentos = (id) => {
    let contenido = `<option value="0">-- Seleccione un Departamento --</option>`;
    let depas = departamento.filter(({ paisId }) => paisId === id);
    if (depas.length > 0) {
      depas.forEach(
        ({ id, nombre }) =>
          (contenido += `<option value="${id}">${nombre}</option>`)
      );
      selectDepartamento.innerHTML = contenido;
      selectDepartamento.removeAttribute("disabled");
    } else {
      selectDepartamento.innerText = "";
      selectDepartamento.setAttribute("disabled", "disabled");
    }
  };
  //& ejercicio de traer datos y solo  mostrar los datos que coinciden con el anterior super buenazo!!!
  selectPais.onchange = () => {
    getDepartamentos(+selectPais.value);
  };
  getPaises();
};

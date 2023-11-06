window.onload = () => {
  let formulario = document.getElementById("formulario");
  let inputNombre = document.getElementById("inputNombre");
  let inputPassword = document.getElementById("inputPassword");
  let enlace = document.getElementById("enlace");
  let helperNombre = document.getElementById("helperNombre");
  let helperPassword = document.getElementById("helperPassword");

  const validarEmail = (email) => {
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(email)) {
      let User = usuario.filter((objUser) => objUser.correo === email);
      console.log(User);
      if (User.length > 0) {
        helperNombre.innerText = "Este correo si Existe";
        helperNombre.setAttribute("class", "helperDanger");
        console.log(inputNombre.classList);
      } else {
        helperNombre.innerText = "Correo disponible";
        helperNombre.setAttribute("class", "helperSuccess");
          if (email.length === 0) {
            helperNombre.innerText = "";
            helperNombre.removeAttribute("class");
          }
      }
    } else {
    }
  };

  inputNombre.onkeyup = (e) => {
  console.log(inputNombre.value);
    validarEmail(inputNombre.value.trim());
  };

  /**el evento onsubmit se ejecuta cuando hace el formulario onsubmit
   *cuando envio un submit hace  los datos se envien al servidor y producto a eso genera que la pagina se actualice
   * el evento es del formulario
   */

  //? el prevent previene todas las accionesa utomaticas disparadas por cualquier evento evita actualizar el navegador por lo cual decimos que los datos no van a ser enviados al servidor
  //? como enviamos datos al servidor con la arquitectura api rest asi creando un objeto ya listo para envarlo
  //?observacion para hacer el onsubmit usamos el inputNombre.value

  formulario.onsubmit = (e) => {
    e.preventDefault();
    let objUser = {
      usuario: inputNombre.value,
      password: inputPassword.value,
    };
    console.log(objUser);
  }; 
};

const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Uff!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

// una promesa se dice que es cuando algo va suceder ahora?, manana?, o nunca?
//partiendo de aqui vamos a ver como podemos resolver o rechazar esto
//recuerda que toda promesa devuelve un valor reject o resol x eso es que lo guardarmos en una funcion fecha para puego ser llamado y consumirlo

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whooooops!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));


  // como correr muchas promise en una sola 
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => console.log('Array of results',response))
  .catch(error=>console.error(error))
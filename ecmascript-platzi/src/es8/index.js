//! devolver la clave y valor de una matriz object model

const data = {
  frontend: 'jhonael',
  backend: 'jhonael',
  design:'elizabeth'
}
//?podemos usar la propiedad lenght normal
//?convierte un objeto en array cadda propiedad y valor sera un arreglo de cada uno
const entries = Object.entries(data);
console.log(entries);
//?converte un objeto en un araglo y junta todos los values del objeto en un arreglo
const values = Object.values(data);
console.log(values);

const string = 'hellow';
//?agrega al inicio del hellow la palabra hi ero 1ro hay que pasarle cuando caracteres va ver 
console.log(string.padStart(7,'hi'));
//?agrega al final del hellow la palabra hi ero 1ro hay que pasarle cuando caracteres va ver 
console.log(string.padEnd(8, 'hi'));





const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true) ? setTimeout(() => {
      resolve('hello World')
    }, 2000) : reject(new Error('Test Erro'))
}
helloWorld()
.then((resolve) => console.log(resolve))
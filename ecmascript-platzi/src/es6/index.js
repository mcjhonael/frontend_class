//&  import y export trabajar con modulos en ese archivo podre tener logica separada de mi app principal

//! de esta manera puedo traer mi logica del otro archivo a ese principal para usarlo
// lo importamos con llame y con el nombre de la funcion y desde la ubicacion del modulo
import { hello } from './module';
console.log(hello());


//?generator => function especial retorna una serie de valores segun el algoritmo definido

function* helloWorld() {
  if (true) {
    //retorna algo y guardar el estado de forma interna
    yield 'hello, pacola';
  }
  if (true) {
    //retorna algo y guardar el estado de forma interna

    yield 'wordl pacola';
  }
}
const generatorHello = helloWorld();
//permite sacar el 1er yiel y el2do el 2do yield respuesta
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


// es7 include



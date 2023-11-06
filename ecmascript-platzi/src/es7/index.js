//? include => para ver si hay un elmento dentro de un array
//?es mejor que usar el indexOf 
//?para buscar numeros o string lo que sea dentro de un array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
if (numbers.includes(9)) {
  console.log('si esta');
} else {
  console.log('no stas');
}

//?elevar a la potencia
let base = 4;
let exponent = 3;
let result = base ** 3;
console.log(result);
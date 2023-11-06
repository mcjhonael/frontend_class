//tipo explicito

let idUser: any;
idUser = 1 //number
idUser = '1'//string
console.log(idUser)

// tipo inferido
let otherId;

// tipo void
// ausencia de valor  se usa mas que todo en los retornos de valores en las funciones

//uso de funcione sen ts

// void explicito
// recibe un obj del tipo any
// con esto no retorno nada show no retorna nada
function show(user: any) {
  console.log('user info', user.id, user.username, user.firstname)
}
// con esto show1 retorna un string
function show1(user: any) {
return 'holitas'
}
// tipo explicito
function show2(user: any):any {
  console.log('user info', user.id, user.username, user.firstname)
}
show2({
  id:1,firstname:'solana',username:'maquera cohaila',
})

// tipo inferido es lo mismo solamente k a la function no se le coloca  :any si no nada

// tipo void, como tipo de datos en variable

let nombre: void;
// nombre = null;
nombre = undefined;


// tipo null y undefined

let nunca: null; //entonces solo acepta de ese mismo valor no otro
// si lo hacemos de inferido pues le asgina any xk puede ser modificadble

// lo mismo pasa con undefined 

//  "strictNullChecks": true,   lo usamos para poder decirle a ts que me muestre lo errores que a ocurrido con con la asignacion de null o undefined



let user: object;
user = {} //Object

user = {
  id:1, user, username:"jhonael"
}

// arraglos ts

let use: string[];
use = [
  'pacola',
  'solana'
]

let otherUser = [
    'pacola',
  'solana'
]
// otra manera de acceder a los arreglo
// declaracion
let picture: Array<string>;
picture=['solana','tiolas']
// acceder a los valores de los arreglos
console.log(picture[0]);


// tuplas en ts tipos de datos diferentes
// [1,'nombre']
let usuario: [number, string];

usuario = [1, 'titolas']
console.log(usuario[1])

//enumerados
// orientacion para fotografias

// const landscape = 0;
// const portait = 1;
// const square = 2;
// const panorama = 3;


// despues del peor llando llega la mejor sonrisa
// podemos representar todo estas variables como un nuevo tipo de dato
// adentro va los posibles valor que hace referencia al contesto del problema que andamos resolviendo
enum PhotoOrientation {
Landscape,
Portait,
Square,
Panorama  
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log(landscape)

// type-union
// puede tomar cualquiera de estos 2 valores

let userid: number | string;
userid = 10
userid = '10'


// usamos loa alias para evitar la renundancia en los tipos
type IdUser = number | string;
type userma=string
let useri: IdUser;
let
userids = 10
// userids = '10'
function getUsernameByID(id: number | string):userma {
  // la logia del negocio
  return "hola amigo"
}

// tipos literales
//100x100  500x500 1000x1000
//no hay nada  mas grande que yo y mi vida
// solamente puede aceder a esos 3 vvalores si pones otro te rechaza
type SquareSize = '100x100' | '200x200' | '1000x1000'

let smallPicture: SquareSize = '100x100';
let MediumPicture: SquareSize = '200x200';

// aserciones de tipo/conversion de tipos de datos
//<tipo> // angle bracke syntax
let username: any;
username = 'pacola'

//tenemos una cadena /confia en nosotros
// username tiene el tipo any entonces si queremos saber cuantos caracteres tiene ese variable entonces podemos agregar normalmente ahora lo keremos convetir a una cadena de esa manera para poder utilizarlo

let message:string=(<string>username).length >5 ? `welcome ${username}` : 'Username es too short'

console.log(message)

//otro ejemplo
let name: any = 'solana'
name = (<string>name).substring(0, 2)
console.log(name)

// otro ejemplo para cambiar el tipo de variable es
let mensaje = (name as string).length > 5 ? 'hola' : 'nohola'
console.log(mensaje)




export { }
// funciones con typescript
type SquareSize1='100x100'|'500x500'|'1000x1000'
function createPicture(title:string,date:string,size:SquareSize1) {
  console.log(title,date,size)
}

createPicture('solana', '2020-03-10', '500x500')

// cuando solo mandamos 2 parametros de las 3 que me pide
// aqui usamos los parametros opcionales

// type SquareSize1='100x100'|'500x500'|'1000x1000'
// function createPicture(title?:string,date?:string,size?:SquareSize1) {
//   console.log(title,date,size)
// }

// createPicture('bardy','2020-12-14','500x500')
// createPicture('bardy','2020-12-14')
// createPicture('bardy')
// createPicture()

//flat array function
// tipado de ts en los parametros de nuestras funciones
let createPic = (title:string,date:string,size:SquareSize1):object => {
  return {
    title,date,size
  }
}

const pict = createPic('titolas', '2012-25-14', '100x100');
console.log(pict)


// tipos de retorno en funciones con ts
// never retorna un error 
// string retorna una cadena
// eso es lo que hace esta funcion en retorno

function handleError(code: number, message: string):never|string {
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`)
  } else {
    return 'An error has occurred'
  }
}

let result = handleError(200, 'ok');
console.log(result);
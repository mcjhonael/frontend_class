// tipo de datos en typescript
//explicito
let phone: number;
phone = 54125;
console.log(`este es mi numero ${phone}`)


//inferido
// una vez dado ese valor de tipo cualquiera automticamente se le asigna el tipo k va tener entonces no puedes colocar otro tipo que no sea el k decimos
let phoneNumber = 14521;
console.log(phoneNumber)
//para hex siempre antes colocar 0x
let hex: number = 0xf00d;
//para binary siempre antes colocar 0b

let binary: number = 0b0101;
//para 0o siempre antes colocar 0x

let octal: number = 0o744;


//Boolean

let isPro: boolean;
isPro = false;

//string podemos usar '' o ""

let username: string = "luis";
username = 'sarmiento'
console.log(username)

// template string back-ticks
// convierte un conjunto de cadenas en texto

let userInfo = `
username: ${username},
isPro: ${isPro}
`
console.log(userInfo)


// tipos diferente en ts
// any  = cuando queremos cambiar el valor dinamico de una variable o cuando una variable va cambiar de tipo de dato
// lo utilizamos como ultimo recurso ejm cuando traemos datos de una api y no saber k mandara 

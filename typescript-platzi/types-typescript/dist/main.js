"use strict";
// tipo de datos en typescript
//explicito
var phone;
phone = 54125;
console.log("este es mi numero " + phone);
//inferido
// una vez dado ese valor de tipo cualquiera automticamente se le asigna el tipo k va tener entonces no puedes colocar otro tipo que no sea el k decimos
var phoneNumber = 14521;
console.log(phoneNumber);
//para hex siempre antes colocar 0x
var hex = 0xf00d;
//para binary siempre antes colocar 0b
var binary = 5;
//para 0o siempre antes colocar 0x
var octal = 484;
//Boolean
var isPro;
isPro = false;
//string podemos usar '' o ""
var username = "luis";
username = 'sarmiento';
console.log(username);
// template string back-ticks
// convierte un conjunto de cadenas en texto
var userInfo = "\nusername: " + username + ",\nisPro: " + isPro + "\n";
console.log(userInfo);
// tipos diferente en ts
// any  = cuando queremos cambiar el valor dinamico de una variable o cuando una variable va cambiar de tipo de dato
// lo utilizamos como ultimo recurso ejm cuando traemos datos de una api y no saber k mandara 

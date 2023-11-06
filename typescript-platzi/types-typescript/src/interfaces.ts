// dentro del paradigma de POO se encuentra las interfaces

//funcion para mostrar fotografia


export { }
enum PhotoOrientation {
  Landscape,//position 0
  Portrait,//position 1
  Square,//position 2
  Panorama//position 3
}

interface Picture {
  title:string,date:string,orientation:PhotoOrientation
}
function showPicture(picture: Picture) {
  console.log(`title: ${picture.title} date:${picture.date} orientacion: ${picture.orientation}`);
}

let myPic = {
  title: 'titolascomillas',
  date: '2012',
  orientation: PhotoOrientation.Landscape,
} 
showPicture(myPic)

// atributos opcionales para nuestra interface

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = {
    title:'Default',date:'2012-36146'
  }
  if (config.title) {
    pic.title=config.title
  }
  if (config.date) {
    pic.date=config.date
  }
  return pic;
}
// retorna un valor por defecto que esta dentro d la funcion
// const picture = generatePicture({});

const picture = generatePicture({
title:'elizabeth',date:'1889'
})
console.log(picture);

// cuando no queremos que un atributo cambie de valor si que k se quede asi usamos readonly

//new interfaces ==== new contrato
interface User {
  readonly id: number; //solo de escritura que una vez dado el valor no se puede modificar
  username: string;
  isPro: boolean;
}

let user: User;
user = { id: 10, username: 'titolas', isPro: true }
console.log(user)
user.username = "elizabetha"
// user.id=20
console.log(user)


// extensiones en interfaces herencia de interfaces
interface Entity {
    id: number;
  title: string;
}

interface Album extends Entity {
  // copiando los tributos de la interface Entity
  description: string;
}

interface Pictures extends Entity{
  orientation: PhotoOrientation;
}
const album: Album = {
  id:1,title:'solama',description:'todo mi corazon'
}

const pictures: Pictures = {
  id: 1,title:'family',orientation:PhotoOrientation.Landscape
}
console.log(pictures)

// let new_picture = {} as Picture;
let new_picture: Pictures = {
  id: 1,title:'family',orientation:PhotoOrientation.Landscape
}
console.log(new_picture)
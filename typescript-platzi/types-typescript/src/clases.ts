export { }
enum PhotoOrientation {
  Landscape,//position 0
  Portrait,//position 1
  Square,//position 2
  Panorama//position 3
}
// herencia entre clases por lo cual vamos a usar
//se le llama superclase
// protected da acceso a la sub clases 
//loconvierte en una clase abstracta por lo cual no podemos crear ni instanciar esta clase
abstract class Item {
  protected readonly _id: number;
  protected _title: string;
  constructor(id: number, title: string) {
    this._id = id;
    this._title=title;
  }
    get id() {
    return this._id;
  }
  // set id(id:number) {
  //   this._id=id 
  // }
  get title() {
    return this._title;
  }
  set title(title:string) {
    this._title=title
  }

}


class Picture extends Item{
  //estamos definiendo un nuevo miembro de la clase Picture y le asignamos todo los valores de PhotoOrientation//modificador de acceso static
  public static photoOrientation=PhotoOrientation

  //propiedades
  // ojo cuando no se estable si es public o private entonces por defecto la variable es publico pero tbm podemos decirle k sea publico asi propiedades y metodos igual nomas
  // cuando es public podemos modificar sus propiedad como sin nada 
  // public id: number;
  // public _id: number;
  // public _title: string;
  // accedemos desde Item id y title
  public _orientation: PhotoOrientation;

  // para crear objetos apartir de esta definicion

  public constructor(id:number,title:string,orientation:PhotoOrientation) {
   //para usar los atributos del constructor de la clase Item usamos super y alli se le agregara el id y title con super estams invocando al constructor de Item
    super(id,title)
    // this._id = id;
    // this._title = title;
    this._orientation = orientation;
  }

  // get id() {
  //   return this._id;
  // }
  // set id(id:number) {
  //   this._id=id 
  // }
  // get title() {
  //   return this._title;
  // }
  // set title(title:string) {
  //   this._title=title
  // }
  get orientation() {
    return this._orientation;
  }
  set orientation(o:PhotoOrientation) {
    this._orientation = o;
  }



  // comportamientos metodos
  public toString() { 
    return ` [ id:${this.id} title:${this.title} orientation: ${this.orientation}]`
  }
}
  // pictures: Picture[]; gestion 1 o muchas fotografias

class Album extends Item {
  // public _id: number;
  // public _title: string;
  public pictures: Picture[];
  // pictures: Picture[]=[];

  public constructor(id: number, title: string,) {
    super(id,title);//constructor de super clase
    // this._id = id;
    // this._title = title;
    this.pictures = [];
  }

  // get id() {
  //   return this._id;
  // }
  // set id(id: number) {
  //   this._id = id;
  // }
//con get extraemos el valor 
//   get title() {
//     return this._title;
//   }
// //estamos reemplazando el valor por uno nuevo - modifica el estado del titulo
//   set title(title:string) {
//     this._title=title
//   }


  public addPicture(pictures: Picture) {
    this.pictures.push(picture)
  }
}



const album:Album = new Album(100, 'agustin')

const picture:Picture=new Picture(1,'nashito',PhotoOrientation.Square)
album.addPicture(picture)

console.log(album)


// otro tema
// clases miembros publicos

// accediendo a los miembro publicos de nuestra clases
// picture.id = 200; //publicos
picture.title = 'peru'; //publicos

album.title = 'personal'//publico


// para este ejemplo cambiamos todas las propiedades a private y el constructor y el metodo public por lo cual va generar que el acceso desde afuera de la clase sea denegada ya que solamente podran ser accesible desde la misma clase

//otra manera de usar las atributos y metodos private es colocarlo con el # asi
// #id: number;
// #title: string;
// #orientation: PhotoOrientation;
//  y para usarlo tambien usamos  asi
// this.#id
// va mostrar un error pero dice que xk visual no conoce las ultimas novedades de typescript 

// extension para ts es javascript and typescript nightly



// clases metodo set y get para poder interceptar los accesos a los miembros privados de un objeto

// una vez ya colocados el metod get y set entonces cuando mostramos un atributo de manera normal si lo va leer y cuando le asignemos tambien lo va leer xk get lo usa para leer y set para igualar valores



// herencia de clases miembros protegidos
// mas arriba igual podemos modificar los valores



// esta es la manera de instanciar un objeto
// const item = new Item(1, 'pacolitas')
// console.log(item)

// miembro estaticos 
//tambien podemos acceder a el estado photoOrientation y a algun atributo especifico
console.log(Picture.photoOrientation.Landscape)
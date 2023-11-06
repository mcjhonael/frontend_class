"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; //position 3
})(PhotoOrientation || (PhotoOrientation = {}));
// herencia entre clases por lo cual vamos a usar
//se le llama superclase
// protected da acceso a la sub clases 
//loconvierte en una clase abstracta por lo cual no podemos crear ni instanciar esta clase
var Item = /** @class */ (function () {
    function Item(id, title) {
        this._id = id;
        this._title = title;
    }
    Object.defineProperty(Item.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "title", {
        // set id(id:number) {
        //   this._id=id 
        // }
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    // para crear objetos apartir de esta definicion
    function Picture(id, title, orientation) {
        var _this = 
        //para usar los atributos del constructor de la clase Item usamos super y alli se le agregara el id y title con super estams invocando al constructor de Item
        _super.call(this, id, title) || this;
        // this._id = id;
        // this._title = title;
        _this._orientation = orientation;
        return _this;
    }
    Object.defineProperty(Picture.prototype, "orientation", {
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
        get: function () {
            return this._orientation;
        },
        set: function (o) {
            this._orientation = o;
        },
        enumerable: false,
        configurable: true
    });
    // comportamientos metodos
    Picture.prototype.toString = function () {
        return " [ id:" + this.id + " title:" + this.title + " orientation: " + this.orientation + "]";
    };
    //estamos definiendo un nuevo miembro de la clase Picture y le asignamos todo los valores de PhotoOrientation//modificador de acceso static
    Picture.photoOrientation = PhotoOrientation;
    return Picture;
}(Item));
// pictures: Picture[]; gestion 1 o muchas fotografias
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    // pictures: Picture[]=[];
    function Album(id, title) {
        var _this = _super.call(this, id, title) || this;
        // this._id = id;
        // this._title = title;
        _this.pictures = [];
        return _this;
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
    Album.prototype.addPicture = function (pictures) {
        this.pictures.push(picture);
    };
    return Album;
}(Item));
var album = new Album(100, 'agustin');
var picture = new Picture(1, 'nashito', PhotoOrientation.Square);
album.addPicture(picture);
console.log(album);
// otro tema
// clases miembros publicos
// accediendo a los miembro publicos de nuestra clases
// picture.id = 200; //publicos
picture.title = 'peru'; //publicos
album.title = 'personal'; //publico
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
console.log(Picture.photoOrientation.Landscape);

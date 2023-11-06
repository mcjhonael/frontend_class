"use strict";
// dentro del paradigma de POO se encuentra las interfaces
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; //position 3
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("title: " + picture.title + " date:" + picture.date + " orientacion: " + picture.orientation);
}
var myPic = {
    title: 'titolascomillas',
    date: '2012',
    orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
function generatePicture(config) {
    var pic = {
        title: 'Default', date: '2012-36146'
    };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
// retorna un valor por defecto que esta dentro d la funcion
// const picture = generatePicture({});
var picture = generatePicture({
    title: 'elizabeth', date: '1889'
});
console.log(picture);
var user;
user = { id: 10, username: 'titolas', isPro: true };
console.log(user);
user.username = "elizabetha";
// user.id=20
console.log(user);
var album = {
    id: 1, title: 'solama', description: 'todo mi corazon'
};
var pictures = {
    id: 1, title: 'family', orientation: PhotoOrientation.Landscape
};
console.log(pictures);
// let new_picture = {} as Picture;
var new_picture = {
    id: 1, title: 'family', orientation: PhotoOrientation.Landscape
};
console.log(new_picture);

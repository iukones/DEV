// var a = 'Hola mundo';

// function b() {    

// }



//Callbacks

// function addToArray(data, array, callback) {
//     if (!array) {
//         callback(new Error('No existe el array'), null)
//     } else {
//         array.push(data)
//         callback(null, array)
//     }   
// }

// var array = [1, 2, 3];

// addToArray(4, array, function (err) {
//     if (err) return console.log(err.message)
//     console.log(array)
// })

// [1, 2, 3, 4]

//Callbacks

// Promesas

// function addToArrayDos(data, array) {
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function() {
//             array.push(data)
//             resolve(array)
//         }, 1000);

//         if (!array) {
//             reject(new Error('No existe un array'))
//         }
//     })

//     return promise
// }

// anidamos promesas
// const array = [1, 2, 3]
// addToArrayDos(4, array)
//     .then(function () { return addToArrayDos(5, array) })
//     .then(function () { return addToArrayDos(6, array) })
//     .then(function () { return addToArrayDos(7, array) })
//     .then(function () {
//         console.log(array)
//     })
    // (4 seg. de delay)-> [1,2,3,4,5,6,7] 

// Promesas

//Async/Await

// async function myFuncion() {
//     try {
//         var result = await functionAsincrona()
//     } catch (err) {
//         ...
//     }
// }

// function addToArrayTres(data, array) {
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             array.push(data);
//             resolve(array);
//         }, 1000);

//         if (!array) {
//             reject(new Error('No existe un array'));
//         }
//     })

//     return promise
// }

// const array = [1, 2, 3];

// async function processData (data, array) {
//     try {
//         const result = await addToArrayTres(data, array);
//         console.log(result)
//     } catch (err) {
//         return console.log(err.message);
//     }
// }

// processData(4, array)
// processData(5, array)
// processData(6, array)

//Async/Await

// Objetos string
// var a = new String("Israeel Martinez Villanueva");
// console.log(a);

// console.log(a.toUpperCase());
// console.log(a.toLowerCase());

// var i = a.indexOf("I");
// console.log("la letra esta: ", i);

// var i = a.lastIndexOf("e");
// console.log("la letra esta: ", i);

// var nombre = a.substr(0, a.indexOf("t") );
// console.log(nombre);

// var split = a.split(" ");
// console.log(split);
// console.log(split.length);

// document.write('Hola Mundo');

// Objetos string

// Objeto Fecha()Date

var hoy = new Date();
var fMili = new Date(0);
var fFija = new Date(2019, 9, 9, 23, 15, 1);

console.log(hoy);
console.log(fMili);
console.log(fFija);

// Objeto Fecha()Date
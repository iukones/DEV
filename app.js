// contexto de ejecucion de la pila o Stack.

/*
function b() {
    var myVar;
    console.log(myVar);
}

function a() {
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
*/

// 1
// 2
// undefined
// 1

// contexto de ejecucion de la pila o Stack.

// cadena de alcance Scope, el entorno léxico.

// function b() {
//     console.log(myVar);
// }

// function a() {
//     var myVar = 2;    
//     b();
// }

// var myVar = 1;
// a();

// cadena de alcance Scope, el entorno léxico.

//JavaScript y Undefined

// var a;
// console.log(a);

// if (a === undefined) {
//     console.log('a es Undefined');
// }else{
//     console.log('a no es Undefined');
// }

//JavaScript y Undefined

// the execution context - Code execution

// function b() {
//     console.log('llamada funcion b!');
// }

// b();

// console.log(a);

// var a = 'Hola Mundo!';

// console.log(a);


// the execution context - Code execution

// the Scope Chain

// function b() {
//     console.log(myVar);
// }

// function a() {
//     var myVar = 2;
//     b();   
// }

// function a() {

//     function b() {
//         console.log(myVar);
//     }

//     // var myVar = 2;
//     b();   
// }

// var myVar = 1;
// a();
// console.log(myVar);

// the Scope Chain

// Scope, ES6 y "let"

// let a = 1;
// let b = 2;

// if (a > b) {
//     let c = true;
//     console.log(c);
// }else{
//     let c = false;
//     console.log(c);
// }

// Scope, ES6 y "let"

// ¿Que hay de las llamadas asincronas?
function waitThreeSeconds() {
    var ms = 10000 + new Date().getTime();
    while (new Date() < ms) {}
    console.log('finalizo función');
}

function clickHandler() {
    console.log('evento Click!');
}

// escuchar el evento click
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finaliza la ejecución');

// ¿Que hay de las llamadas asincronas?
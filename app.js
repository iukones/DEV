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
// function waitThreeSeconds() {
//     var ms = 10000 + new Date().getTime();
//     while (new Date() < ms) {}
//     console.log('finalizo función');
// }

// function clickHandler() {
//     console.log('evento Click!');
// }

// // escuchar el evento click
// document.addEventListener('click', clickHandler);

// waitThreeSeconds();
// console.log('finaliza la ejecución');

// ¿Que hay de las llamadas asincronas?

// Operadores en JS

// var a = 4 + 3;
// console.log(a);

// var b = 5 >10;
// console.log(b);

// function add(a, b) {
//     return;
// }

// Operadores en JS

// Precedencia del operador y asociatividad.

// var a = 2, b = 3, c = 4;

// a = b = c;

// console.log(a);
// console.log(b);
// console.log(c);

// Precedencia del operador y asociatividad.

//Coerción en JS

// var a = '1' + 2;

// console.log(a); //resultado sera "12"

// var a = 1, b = '2';
// console.log(a + b); //resultado sera igual "12"

//Coerción en JS


// Operadores de Comparación

// console.log(1 < 2 < 3); // valor booleano "True"

// console.log(3 < 2 < 1); // tambien devuelve "True" JS usa la coerción y forza a convertir el resultado booleano a un numero.
//console.log(false < 1);

// var a = 0;
// var b = false;

// if (a == b) {
//     console.log('Son iguales!');
// } else {
//     console.log('Nop, no son iguales!');
// }

// Operadores de Comparación


//existencia y booleanos

// var a;

// a = '';

// if (a) {
//     console.log('hay algo aquí'); //aparece si encuentra definido algun valor en "a".
// }

//existencia y booleanos

// valores predeterminados

function greet(name) {
    console.log('Hola ' + name);
}

greet('Israel Martínez');

// valores predeterminados

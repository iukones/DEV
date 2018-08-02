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

// function greet(name) {
//     name = name || '<Tu nombre aqui>';
//     console.log('Hola ' + name);
// }

// greet('Israel M');
// greet();

// valores predeterminados

//Partes de Frameworks - Valores predeterminados

// window.valorNombre = window.valorNombre || 'No existe valorNombre';

//Partes de Frameworks - Valores predeterminados

//clase 30 objetos y el punto.

//esta no es la mejor manera de generar un objeto, pero solo es un ejemplo practico.
// var person = new Object();

// person["firstname"] = "Israel";
// person["lastname"] = "Martínez";

// var firtsNameProperty = "firstname";

// console.log(person);
// console.log(person[firtsNameProperty]);
// //perador punto
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = "Calle Durazno 88";
// person.address.city = "Edo Mex";
// person.address.state = "Ecatepec";

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person["address"]["state"]); //esto realiza lo mismo que el operador de arriba

//clase 30 objetos y el punto.


//clase 31 objetos y literales de objetos.

// esta es la mejor manera de estructurar un objeto en JS
// var persona = {
//     name: 'Israel',
//     lastname: 'Martínez',
//     años: '35',
//     direccion: {
//         calle: 'Durazno',
//         colonia: 'Luis Donaldo Colosio',
//         lote: '8'
//     }
// };

// function greet(persona) {
//     console.log('Hola ' + persona.name);
// }

// greet(persona);
// //  y creo un objeto al vuelo.
// greet({
//     name: 'Erika',
//     lastname: 'Contreras'
// })

// console.log(persona);

//clase 31 objetos y literales de objetos.

// clase 32 falsificacion de espacios de nombre.

// var saludo = 'Hello!';
// var saludo = 'Hola!';

// console.log(saludo);

// var english = {
//     greetings: {
//         basic: 'Hello!'
//     }
// };

// var spanish = {};

// spanish.greet = 'Hola!';

// console.log(english);

// clase 32 falsificacion de espacios de nombre.

// clase 33 JSON and object literal

// var objectLiteral = {
//     firstname: 'Isra',
//     isAProgramer: true
// };

// console.log(JSON.stringify(objectLiteral));

// var jsonValue = JSON.parse('{"firstname": "Mary", "isAProgramer": true}');

// console.log(jsonValue);


// clase 33 JSON and object literal

// clase 34 las funciones son objetos.

// function greet() {
//     console.log('hola');
// }

// greet.language = 'english';
// console.log(greet.language);

// clase 34 las funciones son objetos.

//clase 35 Declaracion de funcion y Expresion de funcion.

// greet();

// function greet() {        //todo esto es una declaracion de funcion.
//     console.log('hola');
// }



// var anonimusGreet = function () {
//     console.log('hi');              //aqui estoy creando un objeto sobre la marcha y poniendolo igual a esta variable.
// }

// anonimusGreet();

// function log(a) {
//     a();
// }

// log(function() {
//     console.log('hola3'); //esto es una funcion de primera clase
// });

//clase 35 Declaracion de funcion y Expresion de funcion.

//clase 36 Por Valor vs Por Referencia.

// by value primitives (por valores primitivos)
// var a = 3;
// var b;

// b = a; //aqui se crea un nuevo espacio en memoria para B y seran copias uno del otro.
// a = 2;

// console.log(a);
// console.log(b);

// by reference (all objects (including functions)) por referencia, todos los objetos inlcuyendo funciones.
// var c = { greeting: 'hi'};
// var d;

// d = c; //aqui el operador ve que ambos son objetos y en lugar de establecer "d" con un nuevo espacio en memoria, simplemente señala "d" en al misma dirección, en el mismo lugar de memoria que apunta "c"

// c.greeting = 'helloo'; //mutate

// console.log(c);
// console.log(d);

//by reference (even as parameters)

// function changeGreeting(obj) {
//     obj.greeting = 'Hola'; // mutate object
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);

// el operador 'equals' configura un nuevo espacio en memoria (es una nueva direccion en memoria).
// c = { greeting: 'nuevo saludo'};
// console.log(c);
// console.log(d);


//clase 36 Por Valor vs Por Referencia.

// clase 37 Objects, Functions, and "this"

// function a() {
//     console.log(this);
//     this.newVariable = 'Hola';
// }

// var b = function() {
//     console.log(this);
// }

// a();

// console.log(newVariable); // not good!

// b();


// var c = {
//     name: 'el objecto C',
//     log: function() {
//         var selft = this;

//         selft.name = 'actualiza el objeto C';
//         console.log(selft);

//         var setName = function(newname) {
//             selft.name = newname;
//         }

//         setName('actualiza de nuevo el objeto C');
//         console.log(selft);
//     }
// }

// c.log();


// clase 37 Objects, Functions, and "this"


//clase 38 Array -  Matrices: colecciones de cualquier cosa.

// var arr = [
//     1, //numerico
//     false, //boolean
//     {
//         name: 'Isra',
//         direccion: 'Ecatepec' //tipo objeto.
//     },
//     function(name) {
//         var greeting = 'Hola ';
//         console.log(greeting + name); //tipo funcion.
//     },
//     "De nuevo" //tipo cadena.

// ];

// console.log(arr);
// arr[3](arr[2].name);

//clase 38 Array -  Matrices: colecciones de cualquier cosa.

// clase 40 sobre carga de funciones

// function greet(firstname, lastname, language) {

//     language = language || 'en';

//     if (language === 'en') {
//         console.log('Hello ' + firstname + ' ' + lastname);
//     }

//     if (language === 'es') {
//         console.log('Hola ' + firstname + ' ' + lastname);
//     }

// }

// function greetEnglish(firstname, lastname) {
//     greet(firstname, lastname, 'en');
// }

// function greetSpanish(firstname, lastname) {
//     greet(firstname, lastname, 'es');
// }

// greet('Jhon', 'Doe', 'en');
// greet('Jhon', 'Doe', 'es');
// greetEnglish('Jhon', 'Doe');
// greetSpanish('Jhon', 'Doe');

// clase 40 sobre carga de funciones


// clase 42 insercion automatica de punto y coma

// function getPerson() {
    // return
    // {
    //     firstname: 'Israel'
    // }
//     return {
//         firstname: 'Israel'
//     }
// }

// console.log(getPerson());

// clase 42 insercion automatica de punto y coma




// clase 44 expresiones de funciones invocadas inmediatamente

// function statement (declaracion de funciones)
// function greet(name) {
//     console.log('hola' + name);
// }
// greet('Isra');

//using a function expression (usando una expresión de función).
// var greetFunc = function(name) {
//     console.log('hola' + name);
// };
// greetFunc('Isr');

//using an Inmmediately Invoked Function Expression (IIFE), utilizando una expresión de función Inmediatamente invocada.
// var greeting = function(name) {
//     console.log('hello' + name);
// }('Israel');

// **********
// var firstname = 'iukones';

// (function(name) {

//     var greeting = 'Inside IIFE: Hello';
//     console.log(greeting + ' ' + name);

// }(firstname)); // IIFE Inmediatamente invocado expresion de funcion.

// clase 44 expresiones de funciones invocadas inmediatamente

// clase 45 IIFE y Safe Code

// (function(global, name) {

//     var greeting = 'Hello';
//     global.greeting = 'Hello';
//     console.log(greeting + ' ' + name);

// }(window, 'Israel')); // IIFE

// clase 45 IIFE y Safe Code

// clase 46 Entendiendo los cierres (UNDERSTANDING CLOSURES)

function greet(whattosay) {
    return function(name){
        console.log(whattosay + ' ' + name);
    }
}

// greet('Hi')('Isra');
var sayHi = greet('Hi');
sayHi('Isra');


// clase 46 Entendiendo los cierres (UNDERSTANDING CLOSURES)

// clase 47 Entendiendo los cierres parte 2(UNDERSTANDING CLOSURES)

function creaSumador(x) {
    return function(y) {
        return x + y;
    };
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2)); // muestra 7
console.log(suma10(2)); // muestra 12


function buildFunctions () {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i);
            }
        )

    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// clase 47 Entendiendo los cierres parte 2(UNDERSTANDING CLOSURES)

// clase 48 Function Factories

function makeGreeting(language) {

    return function (firstname, lastname) {
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }
        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Israel', 'Martinez');
greetSpanish('Israel', 'Martinez');

// clase 48 Function Factories

// clase 49 Closures and Callbacks
function sayHiLater() {
    var NewGreeting = 'Hi!';

    setTimeout(() => {
        console.log(NewGreeting);
    }, 5000);

}
sayHiLater();
//jQuery uses function expression and first-class functions!
//$("button").click(function() {

//});

function tellMeWhenDone(callback) {
    var a = 1000; //some work
    var b = 2000; //some work

    callback(); //the 'callback', it run the function I give it!
}

tellMeWhenDone(function() {
    console.log('I am done!');
});

tellMeWhenDone(function() {
    console.log('All done...');
});

// clase 49 Closures and Callbacks

//clese 50 llamar, aplicar, enlazar, call(), apply() and bind().
var person = {
    firstname: 'Israel',
    lastname: 'Martinez',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Argumnets: ' + lang1 + ' ' + lang2);
    console.log('---------------');
}

var logPersonName = logName.bind(person);
logPersonName('Español');

logName.call(person, 'en', 'es');
logName.apply(person, ['esp', 'eng']);

//function borrowing
var person2 = {
    firstname: 'Erika',
    lastname: 'Contreras'
}
console.log(person.getFullName.apply(person2));

//function currying
function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));
//clese 50 llamar, aplicar, enlazar, call(), apply() and bind().

//clese 51 fuctional programming (programacion funcional con JS)
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };
    return newArr;
}

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});
console.log(arr2);

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
});
console.log(arr3);

var checkPastLimit = function(limiter, item) {
    return item > limiter
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item < limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(4));
console.log(arr5);

//clese 51 fuctional programming (programacion funcional con JS)

//clese 52 fuctional programming (programacion funcional con JS) 2
// utilizando UnderscoreJS
var arr6 = _.map(arr1, function(item) { return item * 3});
console.log(arr6);

var arr7 = _.filter([2,3,4,5,6,7], function(item) { return item % 2 === 0;});
console.log(arr7);
//clese 52 fuctional programming (programacion funcional con JS) 2

// clase 53 object-oriented JS and prototypal inheritance (JS orientado a objetos y herencia de prototipos)
// clase 54 understanding the prototype (comprender el prototipo en JS)
var person = {
    doddleName: 'Default',
    doddleLastName: 'Default',
    // creo un metodo dentro del objeto
    getFulldoddle: function() {
        return this.doddleName + ' ' + this.doddleLastName;
    }
}
// creo un segundo objeto como ejemplo
var elian = {
    doddleName: 'Elian',
    doddleLastName: 'Martinez'
}
// don't do this EVER! for demo purposes only!!!
elian.__proto__ = person;
console.log(elian.getFulldoddle()); //Elian Martinez
console.log(elian.doddleName); //Elian

// configuramos un nuevo objeto de ejemplo
var jane = {
    doddleName: 'Jane'
}
jane.__proto__ = person;
console.log(jane.getFulldoddle()); //jane - Default

// clase 54 understanding the prototype (comprender el prototipo en JS)

// clase 55 Everything is an object (or primitive)

// clase 55 Everything is an object (or primitive)



// ejercicio extras al curso

// atravesando el DOM

    // recorrer hacia abajo desde un elemento específico
const component = document.querySelector('.component');
const title = component.querySelector('.component__title');

title.innerHTML = "hola mundo";

console.log(component);
console.log(title);

const list = document.querySelector('.list');
const listItem = list.children;

console.log(listItem);

// convieritendo la coleccion a una matriz
const array = Array.from(HTMLCollection);
array.forEach(element => {
    // do whatever you want
});

// Seleccionar un niño específico
const listItems = document.querySelectorAll('li');

const firstItem = listItems[0];
const secondItem = listItems[1];
const thirdItem = listItems[2];
const fourthItem = listItems[3];
const fifthItem = listItems[4];

console.log(firstItem);
console.log(secondItem);
console.log(thirdItem);
console.log(fourthItem);
console.log(fifthItem);

    // recorrer hacia abajo desde un elemento específico

    // Atravesando hacia arriba

const firstListItem = document.querySelector('li');
const lists = firstListItem.parentElement;

console.log(lists);

// más cercano

const firstLink = document.querySelector('a');
const lists2 = firstLink.closest('.list');
console.log(lists2);

const firstLinkThroughClosest = firstLink.closest('a');
console.log(firstLinkThroughClosest);

// más cercano
    // Atravesando hacia arriba


    // atravesando de lado



    // atravesando de lado

// atravesando el DOM



// reemplazando texto desde JS

function setText(node, text) {
    let c = node.firsChild;
    if (c && !c.nextSibling && c.nodeType == 3)
        c.data = text;
        else
        node.textContent = text;
}

setText(document.querySelector('h1'), 'a title');
setText(document.querySelector('p'), 'a paragraph');

setText(document.querySelector('h1'), 'reemplazando texto desde JS');
setText(document.querySelector('p'), 'texto lorem');


// reemplazando texto desde JS

// verifica si un checkbox esta activo o no
function verificaChecked() {
    var x = document.getElementById("myRadio").checked;
    console.log(x);
    document.getElementById("respuesta").innerHTML = x;
}

// ejercicio extras al curso

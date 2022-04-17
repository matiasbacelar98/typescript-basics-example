"use strict";
// BASIC TYPES
let id = 5;
let company = 'Ford';
let isPublished = true;
let x = 'Test'; // Si la modificamos no causa error
let age; // Ejemplo inicializacion
//-----------------------------------------------------------
// ARRAY
let idsArr = [1, 2, 3, 4, 5];
let xArr = ['string', 3, false];
// TUPLE (Definis array y sus types [SEGUIR CANTIDAD Y ORDEN])
let person = [1, 'matt', true];
// (Array de arrays)
let employee = [
    [1, 'user 1'],
    [2, 'user 2'],
];
//-----------------------------------------------------------
// UNION (Permitir que una variable acepte mas de un tipo)
let employeeId = 42;
//-----------------------------------------------------------
// ENUM
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
    lastname: 'Doe',
};
//-----------------------------------------------------------
// TYPE ASSERTION (Utiles para asignar el tipo)
let cid = 1;
// let customerId = <number>cid;
let customedId = cid;
//-----------------------------------------------------------
// FUNCTIONS (Definir types a parametros - Definir type para el resultado)
function sum(x, y) {
    return x + y;
}
// void (si no retorna nada)
function log(message) {
    console.log(message);
}
log(2);
// No podemos usar interfaces con primitivos o unions
const user1 = {
    id: 1,
    name: 'John',
    lastname: 'Doe',
};
const add = (x, y) => x + y;
const substract = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // Methods
    register() {
        return `${this.name} is now register`;
    }
}
// instance
const brad = new Person(1, 'Brad');
//-----------------------------------------------------------
// EXTEND CLASSES
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name); // inherit properties from Person
        this.position = position;
    }
}
const emp = new Employee(1, 'John', 'SRE');
//-----------------------------------------------------------
// GENERICS
function getArray(items) {
    return new Array().concat(items);
}
let numbArr = getArray([1, 2, 3, 4]);
let strArr = getArray(['Joe', 'Brad', 'John']);

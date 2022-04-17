// BASIC TYPES
let id: number = 5;
let company: string = 'Ford';
let isPublished: boolean = true;
let x: any = 'Test'; // Si la modificamos no causa error
let age: number; // Ejemplo inicializacion

//-----------------------------------------------------------

// ARRAY
let idsArr: number[] = [1, 2, 3, 4, 5];
let xArr: any[] = ['string', 3, false];

// TUPLE (Definis array y sus types [SEGUIR CANTIDAD Y ORDEN])
let person: [number, string, boolean] = [1, 'matt', true];

// (Array de arrays)
let employee: [number, string][] = [
  [1, 'user 1'],
  [2, 'user 2'],
];

//-----------------------------------------------------------

// UNION (Permitir que una variable acepte mas de un tipo)
let employeeId: string | number = 42;

//-----------------------------------------------------------

// ENUM
enum Direction1 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

enum Direction2 {
  Up,
  Down,
  Left,
  Right,
}

//-----------------------------------------------------------

// OBJECT [SEGUIR CANTIDAD]
type User = {
  id: number;
  name: string;
  lastname: string;
};

const user: User = {
  id: 1,
  name: 'John',
  lastname: 'Doe',
};

//-----------------------------------------------------------

// TYPE ASSERTION (Utiles para asignar el tipo)
let cid: any = 1;
// let customerId = <number>cid;
let customedId = cid as number;

//-----------------------------------------------------------

// FUNCTIONS (Definir types a parametros - Definir type para el resultado)
function sum(x: number, y: number): number {
  return x + y;
}

// void (si no retorna nada)
function log(message: string | number): void {
  console.log(message);
}

log(2);

//-----------------------------------------------------------

// INTERFACE
interface UserInterface {
  readonly id: number; // Propiedad solo lectura
  name: string;
  lastname: string;
  age?: number; // Propiedad opcional
}

// No podemos usar interfaces con primitivos o unions
const user1: UserInterface = {
  id: 1,
  name: 'John',
  lastname: 'Doe',
};

//-----------------------------------------------------------

// FUNCTION INTERFACE

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number) => x + y;
const substract: MathFunc = (x: number, y: number) => x - y;

//-----------------------------------------------------------

// CLASSES
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  // Types
  // PRIVATE,PROTECTED,PUBLIC (DEFAULT) igual que en php
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name); // inherit properties from Person
    this.position = position;
  }
}

const emp = new Employee(1, 'John', 'SRE');

//-----------------------------------------------------------

// GENERICS
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numbArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(['Joe', 'Brad', 'John']);

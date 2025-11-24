// Inferencia de tipos

let x = 10;
x = 20;
//x = 'Hola' // Error

let user = {
  name: "Alice",
  age: 30,
};

// user.job = 'Engineer' // Error: Property 'job' does not exist on type '{ name: string; age: number; }'.

// Tipos literales

const pi = 3.1416;

// Tipo any

let isActive;
isActive = true;
isActive = "Yes";
isActive = 42;

let data: any;
data = [1, 2, 3];
data = { key: "value" };
data = () => "Hello";

// Parámetros y tipos: Anotación de tipos

function add(a: number, b: number): number {
  return a + b;
}

// Arrow functions

//const multiply = (x, y) => x * y

const multiply = (x: number, y: number): number => {
  return x * y;
};

const multiplyShort = (x: number, y: number): number => x * y;

// Arrays

const numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);
// numbers.push('7') // Error

const fruits: string[] = [];
fruits.push("Apple");
fruits.push("Banana");

// Tuplas

let tuple: [string, number] = ["Alice", 30];
// tuple = [30, 'Alice'] // Error
// tuple = ['Bob', 25, 34] // Error

tuple = ["Bob", 25]; // Correcto
// tuple[2] = 'Charlie'
tuple.push(40); // No da error en tiempo de compilación

// Any v. unknown

let anything: any;
anything = "Hello";
anything = true;
anything.toFixed(2); // No hay error en tiempo de compilación si en ejecución

let unknownValue: unknown;
unknownValue = 10;
// unknownValue.toFixed(2) // Error: Object is of type 'unknown'.

// Casting de tipos o aserciones de tipos

(unknownValue as number).toFixed(2);

// Tipos propios

// type

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

// interface

interface UserI {
    name: string;
    age: number;
    isAdmin: boolean;
}

const users: User[] = [];
users.push({ name: "Alice", age: 30, isAdmin: true });


// Solo con tipos propios

type ID = string | number;
let id: ID = 123;
id = "ABC";
// is = true // Error

type PopularTags = 'JS' | 'TS' | 'Angular' | 'React';
const tag: PopularTags = 'TS';
// tag = 'Vue' // Error

type Tags = PopularTags | 'NodeJS' | 'Deno';
let newTag: Tags = 'Deno';
newTag = 'JS';
// newTag = 'Python' // Error

// Ampliar interfaces no lo hacen los tipos
// Uso con interfaces externos

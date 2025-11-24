
interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

abstract class AllPersons {

  public name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }

  abstract greet() : void 

}

class Person implements IPerson {
  
  static numPersons = 0;

  static setNumPersons() {
    Person.numPersons++;
  }
  
  //public name: string;
  //private _age: number;

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative."); 
      return;
    }
    this._age = value;
  }

  // usamos parameter properties

  constructor(public name: string, private _age: number) {
    // this.name = name;
    // this._age = _age;
    Person.setNumPersons();
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this._age} years old.`
    );
  }
}

const user1 = new Person("Alice", 30);
user1.greet(); // Hello, my name is Alice and I am 30 years old.
console.log(user1.age)


class Employee extends Person {
  position: string;
  constructor(name: string, age: number, position: string) {
    super(name, age);
    this.position = position;
  }

  override greet() {
    super.greet();
    console.log(`I work as a ${this.position}.`);
  } 
} 

const emp1 = new Employee("Bob", 40, "Developer");
emp1.greet(); 
// Hello, my name is Bob and I am 40 years old.
// I work as a Developer.
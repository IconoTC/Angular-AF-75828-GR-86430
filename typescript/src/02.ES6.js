class Person {
  
  static numPersons = 0;

  static setNumPersons() {
    Person.numPersons++;
  }
  
  name;
  #age;

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative."); 
      return;
    }
    this.#age = value;
  }

  constructor(name, age) {
    this.name = name;
    this.#age = age;
    Person.setNumPersons();
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.#age} years old.`
    );
  }
}

const user1 = new Person("Alice", 30);
user1.greet(); // Hello, my name is Alice and I am 30 years old.
console.log(user1.age)


class Employee extends Person {
  position;
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  greet() {
    super.greet();
    console.log(`I work as a ${this.position}.`);
  } 
} 
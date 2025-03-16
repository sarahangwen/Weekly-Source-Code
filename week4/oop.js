//Notes on Object-Oriented Operations.
//1. Introduction to Object-Oriented Operations
//Object-oriented operations refer to the actions performed on objects in an Object-Oriented Programming (OOP) paradigm.
//  These operations are built around objects and classes, which encapsulate data and behaviors.

//2. Key Object-Oriented Operations
//a) Object Creation
//Objects are instances of a class.
//They are created using a constructor method (e.g., constructor() in JavaScript).

//Example in JavaScript:

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}
let myCar = new Car("Toyota", "Corolla");
//b) Accessing Object Properties & Methods
//Dot notation (object.property) or bracket notation (object["property"]).

//Example:
console.log(myCar.brand);  // Output: Toyota
myCar["model"];  // Output: Corolla
//c) Encapsulation (Data Hiding & Access Control)
//Keeping data private and exposing only necessary details.
//Use getter and setter methods to access private data.

//Example:
class Person {
    #age;  // Private property (using #)
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    getAge() {
        return this.#age;
    }
}
let person = new Person("Alice", 25);
console.log(person.getAge()); // Output: 25

//d) Inheritance (Code Reusability)
//Allows a class to inherit properties and methods from another class using extends.

//Example:

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}
let dog = new Dog("Buddy");
dog.speak();  // Output: Buddy barks
//e) Polymorphism (Method Overriding & Overloading)
//Method Overriding: A subclass can redefine a method from its parent class.
//Method Overloading: Not natively supported in JavaScript but can be simulated.

//Example of overriding
class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}
class Child extends Parent {
    greet() {
        console.log("Hello from Child");
    }
}
let child = new Child();
child.greet();  // Output: Hello from Child
//f) Abstraction (Hiding Implementation Details)
//Abstract classes are not directly instantiated and usually define a blueprint.

//Example using a base class:
class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class");
        }
    }
    area() {
        throw new Error("Method must be implemented");
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle = new Circle(5);
console.log(circle.area());  // Output: 78.5398


//3. Object-Oriented Operations in Practice
//Objects store and manage data.
//Methods define object behavior.
//Encapsulation ensures security and prevents direct modification.
//Inheritance and polymorphism promote code reuse and scalability.








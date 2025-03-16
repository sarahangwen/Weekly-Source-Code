//In JavaScript, an object is a collection of key-value pairs,
 //where keys are properties (or methods if they hold functions) and 
 //values can be any data type, including other objects and arrays.

 //Using Object Literals (Recommended)
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

console.log(person.name); // Alice
console.log(person["age"]); // 25


//Using the Object Constructor
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2023;

console.log(car.brand); // Toyota




//Accessing Object Properties
//There are two ways to access object properties:

//Dot Notation (Recommended)

console.log(person.name); // Alice
//Bracket Notation (Used when keys have spaces or dynamic keys)
console.log(person["age"]); // 25
// Adding and Removing Properties
person.country = "USA"; // Adding a new property
delete person.city; // Removing a property
console.log(person);



//Object Methods (Functions Inside Objects)
//Objects can have methods, which are functions stored as properties.

let user = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};


//Using ES6 Shorthand for Methods

let user2 = {
    name: "Emma",
    greet() {
        console.log(`Hello, ${this.name}`);
    }
};
user2.greet(); // Hello, Emma



//Looping Through an Object
//Use for...in to loop through an object’s properties.

let student = { name: "Mike", grade: "A", age: 20 };

for (let key in student) {
    console.log(key, ":", student[key]);
}



//Checking if a Property Exists

console.log("age" in student); // true
console.log(student.hasOwnProperty("grade")); // true

//Object Methods: Object.keys(), Object.values(), Object.entries()

let book = { title: "JS Guide", author: "John Doe", pages: 200 };

console.log(Object.keys(book)); // ["title", "author", "pages"]
console.log(Object.values(book)); // ["JS Guide", "John Doe", 200]
console.log(Object.entries(book)); // [["title", "JS Guide"], ["author", "John Doe"], ["pages", 200]]




//Nested Objects
//Objects can contain other objects.
let company = {
    name: "TechCorp",
    location: "San Francisco",
    ceo: {
        firstName: "Elon",
        lastName: "Musk"
    }
};

console.log(company.ceo.firstName); // Elon


// Array of Objects
//Objects are often stored inside arrays.

let users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

console.log(users[1].name); // Bob


//🔹 Loop through array of objects
users.forEach(user => console.log(user.name));


// Object Destructuring (ES6)
//Destructuring allows easy access to object properties.

let employee = { name: "David", position: "Manager", salary: 5000 };

let { name, position } = employee;
console.log(name); // David
console.log(position); // Manager












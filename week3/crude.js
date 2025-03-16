
//CRUD (Create, Read, Update, Delete) Operations
//CRUD operations are fundamental when working with objects and arrays.

// CRUD with Objects
let user = { name: "Alice", age: 25 };

// Create (Add a property)
user.city = "New York"; 

// Read (Access properties)
console.log(user.name); // Alice

// Update (Modify property)
user.age = 26; 

// Delete (Remove property)
delete user.city; 

console.log(user); // { name: "Alice", age: 26 }







let users = ["Alice", "Bob", "Charlie"];

// Create (Add an element)
users.push("David"); // ["Alice", "Bob", "Charlie", "David"]

// Read (Access an element)
console.log(users[1]); // Bob

// pdate (Modify an element)
users[2] = "Chuck"; 

// Delete (Remove an element)
users.splice(1, 1); // Removes "Bob"

console.log(users); // ["Alice", "Chuck", "David"]




//CRUD with Arrays
let users = ["Alice", "Bob", "Charlie"];
// Create (Add an element)
users.push("David"); // ["Alice", "Bob", "Charlie", "David"]
// Read (Access an element)
console.log(users[1]); // Bob
// Update (Modify an element)
users[2] = "Chuck"; 
// Delete (Remove an element)
users.splice(1, 1); // Removes "Bob"
console.log(users); // ["Alice", "Chuck", "David"]







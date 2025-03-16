//Traversing means iterating through arrays or objects.
//Traversing an Array

let numbers = [10, 20, 30, 40];

// Using for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Using forEach
numbers.forEach(num => console.log(num));

// Using for...of (Recommended for arrays)
for (let num of numbers) {
    console.log(num);
}



//traversing an Object
let person = { name: "John", age: 30, country: "USA" };

for (let key in person) {
    console.log(key, ":", person[key]); 
}
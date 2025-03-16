// Using the tradutional for loops
let fruits3 = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits3.length; i++) {
    console.log(fruits3[i]); // Access each element



    // USING FOR..... OF LOOPS
// This loop is simpler and directly gives the array elements.
}let numbers = [10, 20, 30, 40];

for (let num of numbers) {
    console.log(num); // Prints 10, 20, 30, 40
}


// USING forEach LOOPS
//The .forEach() method executes a function for each element in the array
let names = ["Alice", "Bob", "Charlie"];

names.forEach(function(name) {
    console.log(name);
});


//Using an arrow function (shorter syntax):
names.forEach(name => console.log(name));

//Using a for...in Loop (Not Recommended for Arrays)
//A for...in loop iterates over keys (indexes) of an array, not values.

let animals = ["Cat", "Dog", "Elephant"];

for (let index in animals) {
    console.log(index, animals[index]); // Prints index and value
}


//Using a Loop to Modify an Array
//Loops are useful for modifying arrays, such as doubling numbers.
let nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
    nums[i] *= 2; // Multiply each number by 2
}

console.log(nums); // [2, 4, 6, 8, 10]









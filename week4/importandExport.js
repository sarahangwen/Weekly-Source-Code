//1. Exporting Modules
//JavaScript allows you to export code (functions, variables, classes, etc.) from one file so that it can be used in another.

//Named Exports
//You can export multiple values from a module.
//The names must be used when importing.
// utils.js
export const pi = 3.14159;
export function add(a, b) {
  return a + b;
}
//Importing Named Exports
//Use curly braces {} to import specific exports.


import { pi, add } from './utils.js';

console.log(pi); // 3.14159
console.log(add(2, 3)); // 5
//Renaming Named Exports
//You can rename imports using as:


import { pi as PI, add as sum } from './utils.js';

console.log(PI); // 3.14159
console.log(sum(4, 5)); // 9

//2. Default Exports
//Each module can have only one default export.
//Default exports do not need curly braces {} when importing.

// math.js
export default function multiply(a, b) {
  return a * b;
}
//Importing Default Exports


import multiply from './math.js';

console.log(multiply(3, 4)); // 12
//You can also rename default imports:


import product from './math.js';
console.log(product(5, 6)); // 30



//3. Mixing Named and Default Exports
//You can have both default and named exports in the same file.




export default function greet(name) {
  return `Hello, ${name}!`;
}

export const age = 25;
export const country = "USA";



//Importing Mixed Exports

import greet, { age, country } from './data.js';
console.log(greet("John")); // Hello, John!
console.log(age); // 25
console.log(country); // USA

//4. Import Everything (* as)
//You can import all exports under a single namespace.

import * as utils from './utils.js';

console.log(utils.pi); // 3.14159
console.log(utils.add(2, 3)); // 5


//5. Dynamic Imports (Lazy Loading)
//You can import modules dynamically using import().


async function loadModule() {
  const math = await import('./math.js');
  console.log(math.default(2, 5)); // 10
}

loadModule();


//6. Importing without an Export (Side Effects)
//Some modules run code without exporting anything.


// logger.js
console.log("Logger loaded!");

//Import it without assigning a variable:


import './logger.js';
// Output: Logger loaded!
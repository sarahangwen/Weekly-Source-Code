


//JSON stands for JavaScript Object Notation.
//It is a lightweight data format used for storing and exchanging data.
//It is easy for humans to read and write and easy for machines to parse and generate.

//2. JSON Syntax
//Uses key-value pairs ("key": value).
//Data is enclosed in curly braces {} (for objects) or square brackets [] (for arrays).
//Keys must be strings enclosed in double quotes " ".
//Values can be:
Strings ("Hello")
Numbers (25, 3.14)
Boolean (true, false)
Arrays ([1, 2, 3])
Objects ({"name": "John", "age": 30})
//null (empty value)

//3. Example of JSON
{
  "name"= "Alice",
  "age"= 25,
  "isStudent"=false,
  "hobbies"= ["reading", "gaming", "traveling"],
  "address"={
    "street": "123 Main St",
    "city": "New York"
  }
}
//4. JSON vs JavaScript Object
//JSON looks like a JavaScript object but has stricter rules.
//Keys in JSON must always be strings, while JavaScript object keys can be unquoted.
//JSON does not support functions or undefined values.
//5. Parsing and Stringifying JSON

//Convert JSON string to JavaScript object:
let jsonString = '{"name": "Alice", "age": 25}';
let obj = JSON.parse(jsonString);
console.log(obj.name); // Output: Alice

//Convert JavaScript object to JSON string:
let person = { name: "Alice", age: 25 };
let jsonStr = JSON.stringify(person);
console.log(jsonStr); // Output: '{"name":"Alice","age":25}'










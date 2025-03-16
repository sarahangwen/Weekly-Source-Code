//In JavaScript, you can retrieve elements from an HTML document using several methods.
//  Here are the most commonly used ones:

// 1.By ID (getElementById)
//Returns a single element with the specified id.
let element = document.getElementById("myElement");
console.log(element);

// 2.By Class Name (getElementsByClassName)
//Returns an HTMLCollection (array-like object) of elements with the specified class name.
let elements = document.getElementsByClassName("myClass");
console.log(elements[0]); // Access first element

// 3.By Tag Name (getElementsByTagName)
//Returns an HTMLCollection of elements with the specified tag name (e.g., <p>, <div>).
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0]); // Access first paragraph

// 4.By Name Attribute (getElementsByName)
//Returns a NodeList of elements with the specified name attribute
let inputs = document.getElementsByName("username");
console.log(inputs[0]); // Access first input field


// 5.Query Selector (CSS Selectors) (querySelector)
//Returns the first element that matches the specified CSS selector.
let firstElement = document.querySelector(".myClass");
console.log(firstElement);

// 6 .Query Selector All (CSS Selectors) (querySelectorAll)
//Returns a NodeList of all elements that match the specified CSS selector
let allElements = document.querySelectorAll(".myClass");
console.log(allElements[0]); // Access first matching element

// note
//If you need a single element, use getElementById or querySelector.
//If you need multiple elements, use getElementsByClassName, getElementsByTagName, or querySelectorAll.
//querySelector and querySelectorAll are more flexible because they support CSS selectors.




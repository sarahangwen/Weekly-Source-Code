// exerecise 1
// Get the first paragraph using querySelector
let firstParagraph = document.querySelector("p");
console.log("Using querySelector:", firstParagraph.textContent);

// Get the first paragraph using getElementsByTagName
let firstParagraphByTag = document.getElementsByTagName("p")[0];
console.log("Using getElementsByTagName:", firstParagraphByTag.textContent);// Get all paragraphs using querySelectorAll
let paragraphs1 = document.querySelectorAll("p");
paragraphs.forEach((p, index) => {
    console.log(`Using querySelectorAll - Paragraph ${index + 1}:`, p.textContent);
});

// Get each paragraph using its id
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let para3 = document.getElementById("para3");
let para4 = document.getElementById("para4");

        console.log("Using getElementById - Paragraph 1:", para1.textContent);
        console.log("Using getElementById - Paragraph 2:", para2.textContent);
        console.log("Using getElementById - Paragraph 3:", para3.textContent);
        console.log("Using getElementById - Paragraph 4:", para4.textContent);

        // exercise3
  let paragraphsNodeList = document.querySelectorAll("p");
  console.log("Using querySelectorAll (NodeList):", paragraphsNodeList);

  // exercise 4
  // Get all <p> elements using getElementsByTagName (returns an HTMLCollection)
  let paragraphsHTMLCollection = document.getElementsByTagName("p");
  console.log("Using getElementsByTagName (HTMLCollection):", paragraphsHTMLCollection);

  // Convert HTMLCollection to NodeList for consistency
  let convertedNodeList = Array.from(paragraphsHTMLCollection);
  console.log("Converted HTMLCollection to NodeList:", convertedNodeList);

  // exercise 5
  // Get all <p> elements as a NodeList using querySelectorAll
  let paragraphs2 = document.querySelectorAll("p");

  // Loop using forEach()
  paragraphs2.forEach((p, index) => {
      console.log(`Paragraph ${index + 1}:`, p.textContent);
  });

  // Loop using a for loop
  for (let i = 0; i < paragraphs2.length; i++) {
      console.log(`Paragraph ${i + 1}:`, paragraphs2[i].textContent);
  }

  // exercise 6
 // Get all <p> elements as a NodeList
 let paragraphs = document.querySelectorAll("p");

 // Set text content of the fourth paragraph (index 3, as it's 0-based)
 if (paragraphs.length >= 4) {
     paragraphs[3].textContent = "Fourth Paragraph";
 }

 console.log("Fourth paragraph text content updated!"); 




 // Get all <p> elements as a NodeList
 let paragraphs6 = document.querySelectorAll("p");

 // Loop through each paragraph and set id and class using different methods
 paragraphs6.forEach((p, index) => {
     // Method 1: Using setAttribute() to set the id
     p.setAttribute("id", `para-${index + 1}`);

     // Method 2: Using setAttribute() to set the class (setting a different class for each)
     p.setAttribute("class", `paragraph-class-${index + 1}`);

     // Method 3: Using className property to set a class (setting a common class for all paragraphs)
     p.className += " common-paragraph";  // Add 'common-paragraph' to every paragraph's class list

     console.log(`Set ID and class for paragraph ${index + 1}`);
 });

 console.log("All paragraphs updated with ID and class!");




// Get all <p> elements as a NodeList
        let paragraphs3 = document.querySelectorAll("p");
// Loop through each paragraph and change its styles
        paragraphs3.forEach((p, index) => {
            // Set text color
            p.style.color = (index % 2 === 0) ? "blue" : "green"; // Alternating colors between blue and green
            
            // Set background color
            p.style.backgroundColor = (index % 2 === 0) ? "lightblue" : "lightgreen"; // Alternating background colors
            
            // Set border
            p.style.border = "2px solid black";
            
            // Set font size
            p.style.fontSize = "18px";
            
            // Set font family
            p.style.fontFamily = "Arial, sans-serif";

            // Log to confirm styles are applied
            console.log(`Style applied to paragraph ${index + 1}`);
        });

        console.log("Styles applied to all paragraphs!");

         
        
paragraph1.style.backgroungColor="green";

// // validation.js
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission
    
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    // Password validation pattern (at least one letter, one number, one special char, and 8+ characters)
    const pattern = /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (pattern.test(password)) {
      errorMessage.textContent = "";  // Clear any previous error message
      alert("Password is valid! Form can be submitted.");
      // You can submit the form here if needed, e.g.:
      // document.getElementById("signup-form").submit();
    } else {
      errorMessage.textContent = alert("Password must be at least 8 characters long, contain at least one letter, one number, and one special character.");
    }
  });
  
// // search
      // Predefined string to search within
    // const predefinedText = "I love programming with JavaScript, Java, and Python.";

    // Get the button and result elements
    const searchButton = document.getElementById("btn");
    const resultElement = document.getElementById("result");

    // Function to handle the search
    searchButton.addEventListener("click", function() {
      const searchTerm = document.getElementById("search-term").value.trim();
    })
      // Check if the input field is empty
      if (searchTerm === "") {
        resultElement.textContent = alert("Please enter a search term.");
        resultElement.classList.add("error");
        return;
      }
// get entire text content of the document
      const documentText = document.body.innerText;

      // Create the regular expression for the search term
      const pattern = new RegExp(searchTerm, "gi"); // 'g' for global and 'i' for case-insensitive

      // Use the search() method to find the first match of the search term
      const matchIndex = documentText.search(pattern);

      // Display the result
      
     
// to know the number of times the strind occurs in the document we use match() method
// from thif (matchIndex !== -1) {
  
if (matchIndex !== -1) {
    alert(`Found "${searchTerm}" at position ${matchIndex}.`);
    resultElement.textContent = `Found "${searchTerm}" at position ${matchIndex}.`;
    resultElement.classList.remove("error");
  } else {
    alert(`"${searchTerm}" was not found.`);
    resultElement.textContent = `"${searchTerm}" was not found.`;
    resultElement.classList.add("error");
  }
// test
// const found = pattern.test(documentText);

         
//     // Get the button and result elements
//     const searchButton = document.getElementById("btn");
//     const resultElement = document.getElementById("result");

//     // Function to handle the search
//     searchButton.addEventListener("click", function() {
//       const searchTerm = document.getElementById("search-term").value.trim();

//       // Check if the input field is empty
//       if (searchTerm === "") {
//         resultElement.textContent = "Please enter a search term.";
//         resultElement.classList.add("error");
//         return;
//       }
// // get entire text content of the document
//       const documentText = document.body.innerText;

//       // Create the regular expression for the search term
//       const pattern = new RegExp(searchTerm, "gi"); // 'g' for global and 'i' for case-insensitive

//       // Use the search() method to find the first match of the search term
//       const match = documentText.match(pattern);

//       // Display the result
//       if (match) {
//         resultElement.textContent = Found "${searchTerm}" ${match.length} times in document.;
//         resultElement.classList.remove("error");
//       } else {
//         resultElement.textContent = "${searchTerm}" was not found.;
//         resultElement.classList.add("error");
//       }
//     });
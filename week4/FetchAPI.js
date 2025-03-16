
//Fetch API
// The Fetch API is a modern way to make network requests (get/send data over the internet). It replaces the old XMLHttpRequest.
// Making a GET Request (Fetching Data)
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) {
        return response.json(); // Convert response to JSON
    })
    .then(function (data) {
        console.log(data); // Display the data
    })
    .catch(function (error) {
        console.log("Error:", error);
    });

    // Making a POST Request (Sending Data)
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "My Post",
            body: "This is the post content.",
            userId: 1
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log("Error:", error);
        });

// Using Fetch API with Async/Await
async function getData() {
    try {
        var response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        var data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();
// Capturing the form
let form1=document.getElementById("procuredForm");

// Capturing the table body or tbody
let tablebody=querySelector("#procuredForm tbody");

// event Listener
// sytax
//element.addEventListenr("event",function(){

//});
form.addEventtListener("submit",function(){
   console.log(" form submitted"); 
});

document.getElementById('submit').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(" form submitted")
});





// The canvas API allows javascript to draw draw graphics on canvas.
//The canvas can ApI can draw shapes , lines, curves , text , boxes and images  with color , rotations, 
// transparencies and other pixel manipulation.


/*
// The actual drawing is done using the canvasRenderingContext2D interface.
 //This gets the 2D context so that we can draw shapes.
//const ctx = canvas.getContext("2d");
// Draw a blue rectangle
//ctx.fillStyle = "green";
//ctx.fillRect(50, 50, 200, 100); // (x, y, width, height)


// EXAMPLE 3
/*const canvas = document.getElementBy("canvas");
const ctx =  getContext("2d");
// fillRect()
ctx.fillStyle="red";
ctx.fillRect(10,10,150,100);*/



// PATH()
// The common way to draw on the canvas is to:
// Begin a path: beginPath()
// Move to a point:moveTo()
// Draw in the Path:lineTo()
// Draw the path :stroke ()
const canvas=document.getElementById("canvas");
const ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(150,50);
ctx.lineTo(200,50)
ctx.closePath()
ctx.stroke();

// coloring
ctx.fillStyle="red";
ctx.fillStyle();







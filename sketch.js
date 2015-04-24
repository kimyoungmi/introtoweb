console.log("sketch.js loaded");

function setup() {
    var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
    myCanvas.parent('myP5Container');
    
}

function draw() {
    fill(0);
    ellipse(mouseX, mouseY, 80, 80);
}
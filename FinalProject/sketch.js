
let img;

function setup() {
  createCanvas(440, 440);
img = loadImage('template.png');
}


function draw() {
  background(40,60,225);
fill(1100,200,10), 
ellipse( mouseX, mouseY, 100, 100);
  image(img,0,0);
}
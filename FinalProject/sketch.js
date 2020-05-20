
let img;

function setup() {
 var cnv = createCanvas(440, 440);
cnv.parent('sketch-holder');

}


function draw() {
  background(40,60,225);
fill(100,200,10), 
ellipse( mouseX, mouseY, 100, 100);
  image(img,0,0);
}

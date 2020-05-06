let testvariables;//declare a global

 let eyeMotion = 0;

 function setup() {//setup runs one time at beginning of program execution
  createCanvas(400, 400);//setting the size of our sketch
}
function draw() {//draw frunction runs over and over after the setup function has finished
  stroke(255,28,199);
fill(255, 204, 0);
background(200,0,230);
 triangle(180, 125, 208, 79, 236, 125);  
  triangle(80, 125, 108, 79, 130, 125);

  
  eyeMotion = map( mouseX, 0, width, -10, 10);
 circle(153, 164, 20);
  ellipse(105 + eyeMotion, 105,24,24,);
ellipse(207+ eyeMotion, 104, 24, 24);
  arc(135, 217, 80, 80, PI/8,7*PI/8,CHORD); 
  console.log(mouseX+","+mouseY);
}


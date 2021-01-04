var posy5 = 0;

function setup() {
  var canvas = createCanvas(600, 400, WEBGL);

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  //canvas.parent('sketchfuk');
  background(0);
  fill(0);
  stroke(225);
  strokeWeight(6);
}


function draw() {
    background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
  if (posy5<500) {
    posy5=posy5+1;
  }
  translate (0, 0, posy5);

  push();
  translate(-300, -200);
  rotateY(radians(90));
  rect(0, 0, 700, 400);
  
  translate(1200,0);
  rect(0,0,3000,400);
  pop();

  push();
  translate(300, -200);
  rotateY(radians(90));   
  rect(0, 0, 700, 400);
  
  translate(1200,0);
  rect(0,0,3000,400);
  pop();
  
  push();
  translate(-125,-200,-1200);
  rect(0,0, 250,400);
  
  translate(425,0);
  rect(0,0,350,400);
  
  translate(-950,0);
  rect(0,0,350,400);
  pop();
  
  push();
  translate(650,-200,-1200);
  rotateY(radians(-90));
  rect(0,0, 800,400)
  pop();
  
  push();
  translate(-650,-200,-1200);
  rotateY(radians(-90));
  rect(0,0,800,400);
  pop();

}

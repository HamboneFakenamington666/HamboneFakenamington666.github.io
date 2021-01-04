var posy15 = 0;

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
  if (posy15<800) {
    posy15=posy15+2;
   }
  translate (0, 0, posy15);
  
  push();
  translate(-300,-200);
  rotateY(radians(90));
  rect(0,0, 1000,400);
  pop();
  
  push();
  translate(300,-200);
  rotateY(radians(90));
  rect(0,0,9000,400);
  pop();
  
  push();
  translate(-450,0,-5225);
  box(300,400,7500);
  pop();
  
  push();
  translate(-1100,-200,-500);
  rotateY(radians(90));
  rect(0,0,9000,400);
  pop();

}

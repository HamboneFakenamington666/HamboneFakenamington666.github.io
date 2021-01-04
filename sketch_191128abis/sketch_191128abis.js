var posy2 = 0

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
  if (posy2<500) {
    posy2=posy2+1;
  }
  translate (0, 0, posy2);

  push();
translate(-300,-200);
rotateY(radians(90));
rect(0,0,5000,400);
  pop();
  
  push();
  translate(300,-200);
  rotateY(radians(90));
  rect(0,0,600,400);
  pop();
  
  push();
  translate(300,-200,-900);
  rotateY(radians(90));
  rect(0,0,4100,400);
  
  rotateY(radians(-90));
  rect(0,0, 800, 400);
  pop();
}

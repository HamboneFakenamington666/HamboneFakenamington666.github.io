var posy10 = 0;

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
 if (posy10<1350) {
   posy10=posy10+3;
 }
  translate (0, 0, posy10);
  
  push();
  translate(-300,-200);
  rotateY(radians(90));
  rect(0,0,1500,400);

  pop();
  
  push();
    translate(-3300,-200);
    rotateY(radians(90));
    rotateX(radians(90));
    rect(0,0,2000,3600);
    pop();
  
  push();
  translate(-300,-600,-2000);
  rotateY(radians(90));
  rect(0,0,5000,800);
  rotateY(radians(90));
  rect(0,0,5000,800);
  pop();
  
  push();
  translate(0,185,-2450);
  box(600,30,900);
  translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
  pop();
  
  push();
  translate(300,-600);
  rotateY(radians(90));
  rect(0,0,5000,800);
  pop();
}

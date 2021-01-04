var posy12 = 0;

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
 if (posy12<750) {
   posy12=posy12+2;
 }
  translate (0, 0, posy12);
  
  push();
  translate(-300,-200,1000);
  rotateY(radians(90));
  rect(0,0,1500,400);
  
    rotateX(radians(90));
    rect(0,0,1500,600);
  pop();

  push();
  translate(-500,185,-1950);
  box(400,30,900);
  translate(0,-30,-85);
  box(400,30,900);
    translate(0,-30,-85);
  box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
  pop();
  
    push();
  translate(1140,665,-1100);
  rotateY(radians(90));
  box(400,30,900);
  translate(0,-30,-85);
  box(400,30,900);
    translate(0,-30,-85);
  box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
    translate(0,-30,-85);
      box(400,30,900);
  pop();
  
  push();
  translate(-200,200,-2250);
  box(200,1600,1500);
  pop();
  
    push();
  translate(1150,200,-6000);
  box(500,1600,6000);
  pop();
  
  push();
  translate(1400,-600,-3000);
  rotateY(radians(-90));
  rect(0,0,3000,1600);
  pop();
  
  push();
  translate(-100,-600,-3000);
  rect(0,0,500,1600);
  pop();
  
  push();
  translate(-700,-600);
  rotateY(radians(90));
  rect(0,0,5000,800);
  pop();
  
  push();
  translate(-700,200,1000);
  rotateY(radians(90));
  rotateX(radians(90));
  rect(0,0,2500,1000);
  pop();
  
  push();
  translate(300,-200);
  rotateY(radians(90));
  rect(0,0,900,400);
  pop();
}

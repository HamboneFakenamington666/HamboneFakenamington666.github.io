var posy9 = -500;

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
 if (posy9<150) {
   posy9=posy9+1;
 }
  translate (0, 0, posy9);
  
  push();
  translate(-300,-200,500)
  rotateY(radians(90));
  rect(0,0,1800,400);
  pop();
  
  push();
  translate(1000,620,-500);
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
  pop();
  
  push();
  translate(300,200,500);
  rotateX(radians(-90));
  rotateZ(radians(90));
  rect(0,0,2300,2300);
  pop();
  
  push();
  translate(300,-200,500);
  rotateY(radians(90));
  rect(0,0,800,400);
  pop();
  
  push();
  translate(300,-200,-700);
  rotateY(radians(90));
  rect(0,0,1100,400);
  
  rotateY(radians(-90));
  rect(0,0, 5000,1020);
  pop();
  
  push();
  translate(300,-200,-1800)
  rotateY(radians(180));
  rect(0,0,2000,400);
  pop();
}

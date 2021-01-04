var posy8 = 0;

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
  if (posy8<500) {
    posy8=posy8+2;
 }
  translate (0, 0, posy8);
  
  push();
  translate(-300,-200)
  rotateY(radians(90));
  rect(0,0,700,400);
  
  rotateX(radians(90));
  rect(0,0,700,600);
  pop();
  
  push();
  translate(450,185,-1500);

  box(300,30,900);
  translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
    translate(0,-30,-50);
  box(300,30,900);
  pop();
  
  push();
  translate(300,-200);
  rotateY(radians(90));
  rect(0,0,700,400);
  pop();

  push();
  translate(-300,-600,-1650);
  rect(0,0,600,800);
  pop();
  
  push();
  translate(600,-600);
  rotateY(radians(90));
  rect(0,0,5000,800);
  pop();
  
  push();
  translate(-600,-600);
  rotateY(radians(90));
  rect(0,0,5000,800);
  pop();
  
}

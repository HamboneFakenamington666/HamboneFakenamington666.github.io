var posy13 = 0;

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
 if (posy13<500) {
   posy13=posy13+2;
 }
  translate (0, 0, posy13);
  
  push();
  translate(300,-200,1000);
  rotateY(radians(90));
  rect(0,0,1500,400);
  
    rotateX(radians(-90));
    rect(0,0,1500,600);
  pop();
  
  push();
  translate(300,-2200,-1000);
  rect(0,0,9000,2400);
  rotateY(radians(90));
  rect(0,0,9000,2400);
  pop();

  push();
  translate(0,185,-1450);
  box(600,30,900);
  translate(0,-30,-65);
  box(600,30,900);
    translate(0,-30,-65);
  box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
    translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
          translate(0,-30,-65);
      box(600,30,900);
  pop();
  
    push();
  translate(750,185,-750);
  rotateY(radians(-90));
  box(500,30,900);
  translate(0,-30,-65);
  box(500,30,900);
  translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
  translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
  translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
    translate(0,-30,-65);
  box(500,30,900);
  pop();

  push();
  translate(-300,-2200);
  rotateY(radians(90));
  rect(0,0,9000,2400);
  pop();
}
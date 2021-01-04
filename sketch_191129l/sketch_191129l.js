var posy14 = -750;

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
 if (posy14<650) {
   posy14=posy14+4;
 }
  translate (0, 0, posy14);
  
  push();
  translate(300,-200,1000);
  rotateY(radians(90));
  rotateX(radians(-90));
  rect(0,0,1500,600);
  pop();

  push();
  translate(-150,185,-1450);
  box(300,30,900);
  translate(0,-30,-65);
  box(300,30,900);
    translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
      translate(0,-30,-65);
  box(300,30,900);
  pop();
  
  push();
  translate(-300,200,1000);
  rotateY(radians(90));
  rotateX(radians(90));
  rect(0,0,2000, 600);
  pop();
  
   push();
  translate(150,820,-2500);
  rotateY(radians(180));
  box(300,30,900);
  translate(0,-30,-95);
  box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
    box(300,30,900);
  translate(0,-30,-95);
  pop();

  push();
  translate(-300,-1000,1000);
  rotateY(radians(90));
  rect(0,0,9000,1400);
  pop();
  
    push();
  translate(300,-1000,1000);
  rotateY(radians(90));
  rect(0,0,9000,2400);
  pop();
}

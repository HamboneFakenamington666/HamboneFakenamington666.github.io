var posy7 = 0;

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
  if (posy7<1300) {
    posy7=posy7+2;
 }
  translate (0, 0, posy7);
  
  push();
  translate(-300,-200)
  rotateY(radians(90));
  rect(0,0,1500,400);
  
  rotateX(radians(90));
  rect(0,0,2000,600);
  pop();
  
  push();
  translate(-750,185,-1750);
  rotateY(radians(90));
  box(500,30,900);
  translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
  pop();
  
    push();
  translate(750,185,-1750);
  rotateY(radians(-90));
  box(500,30,900);
  translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
    translate(0,-30,-70);
  box(500,30,900);
  pop();
  
  push();
  translate(300,-200);
  rotateY(radians(90));
  rect(0,0,1500,400);
  pop();
  
  push();
  translate(-2300,-2200,-2000);
  rect(0,0,4600,2400);
  pop();

}

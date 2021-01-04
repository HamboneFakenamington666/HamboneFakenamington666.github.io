var posy6 = 1300;

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
 // if (posy6<500) {
 //   posy6=posy6+1;
// }
  translate (0, 0, posy6);
  
  push();
  translate(-300,-200)
  rotateY(radians(90));
  rect(0,0,3000,400);
  
  rotateX(radians(90));
  rect(0,0,2000,600);
  pop();
  
    push();
  translate(0,-200,-2700);
  rotateY(radians(90));
  rotateX(radians(90));
  
  rect(0,0,3000,600);
  pop();

  push();
  translate(-150,185,-2000);
  box(300,30,900);
  translate(0,-30,-70);
  box(300,30,900);
    translate(0,-30,-70);
  box(300,30,900);
    translate(0,-30,-70);
  box(300,30,900);
    translate(0,-30,-70);
  box(300,30,900);
    translate(0,-30,-70);
  box(300,30,900);
    translate(0,-30,-70);
  box(300,30,900);
    translate(0,-30,-70);
  box(300,30,900);
    translate(0,-30,-70);
  box(300,30,900);
    translate(0,-30,-70);
  box(300,30,900);
    translate(0,-30,-70);
  box(300,30,900);
    translate(0,-30,-70);
  box(300,30,900);
   

  pop();
  
  push();
  translate(300,-200);
  rotateY(radians(90));
  rect(0,0,5000,400);
  pop();
  pop();

}

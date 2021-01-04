var posx=0;
var posy=0;


function setup() 
{

  var canvas = createCanvas(600, 400, WEBGL);

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  //canvas.parent('sketchfuk');
  background(0);
  fill(0);
  stroke(225);
  strokeWeight(6);
}

function draw()
{
  background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
  if (posy<800) {
    posy=posy+1;
  }
  translate (0, 0, posy);

  push();
  translate(-300, -200);
  rotateY(radians(90));
  rect(0, 0, 1200, 400);
  pop();

  push();
  translate(300, -200);
  rotateY(radians(90));   
  rect(0, 0, 1200, 400);

  translate(1600, 0, 300);
  rotateY(radians(90));
  rect(0, 0, 1200, 400);
  pop();
}

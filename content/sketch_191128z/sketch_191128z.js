var posx=0;
var posy=0;


function setup() 
{

  var canvas = createCanvas(600, 400, WEBGL);
  canvas.parent('sketchz');

  background(0);
  fill(0);
  stroke(225);
  strokeWeight(6);
}

function draw()
{
  background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
 // if (posy<430) {
 //  posy=posy+1;
 // }
  translate (0, 0, posy);

  push();
 translate(-300,-200,-500);
 rect(0,0,-30000,400);
 
 rotateY(radians(90));
 rect(0,0,30000,400);
  pop();
  
  push();
  translate(300,-200,-500);
  rect(0,0,30000,400);
  
  rotateY(radians(90));
  rect(0,0,30000,400);

  pop();
}

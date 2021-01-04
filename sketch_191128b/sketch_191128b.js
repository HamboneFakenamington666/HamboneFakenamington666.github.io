var posx=0;
var posy=0;


function setup() 
{

  var canvas = createCanvas(600, 400, WEBGL);
 //  canvas.parent('sketch3');

  background(0);
  fill(0);
  stroke(225);
  strokeWeight(6);
}

function draw()
{
  background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
  if (posy<430) {
    posy=posy+1;
  }
  translate (0, 0, posy);

  push();
  translate(-300,-200);
  rotateY(radians(90));
  rect(0,0,650,400);
  pop();
  
  push();
  translate(-300,-200,-950);
  rotateY(radians(90));
  rect(0,0, 1300,400);
  
  rotateY(radians(90));
  rect(0,0,800,400);
  
  translate(0,0,1300);
  rotateY(radians(180));
  rect(0,0,1000,400);
  pop();
  
  push();
  translate(300,-200);
  rotateY(radians(90));
  rect(0,0,1650,400);
  pop();
}

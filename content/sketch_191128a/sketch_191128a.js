var posy1=0;
var posy2=0;
var posy3=0;
var posy4=0;
var posy5=0;
var posy6=500;
var posy7=0;
var posy8=0;
var posy9=-500;
var posy10=0;
var posy11=-750;
var posy12=0;
var posy13=0;
var posy14=-750;
var posy15=0;
var posy21=-750;

var position=1;

function setup() 
{

  var canvas = createCanvas(600, 400, WEBGL);
  canvas.parent('sketch');

  background(0);
  fill(0);
  stroke(225);
  strokeWeight(6);
}

function position1()
{
background(0);
}

function position2()
{
  background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
  if (posy1<800) {
    posy1=posy1+1;
  }
  translate (0, 0, posy1);

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

function position3()
{
  background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
  if (posy2<500) {
    posy2=posy2+1;
  }
  translate (0, 0, posy2);

  push();
translate(-300,-200);
rotateY(radians(90));
rect(0,0,5000,400);
  pop();
  
  push();
  translate(300,-200);
  rotateY(radians(90));
  rect(0,0,600,400);
  pop();
  
  push();
  translate(300,-200,-900);
  rotateY(radians(90));
  rect(0,0,4100,400);
  
  rotateY(radians(-90));
  rect(0,0, 800, 400);
  pop();
}

function position4()
{
  background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
  if (posy3<430) {
    posy3=posy3+1;
  }
  translate (0, 0, posy3);

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

function position5()
{
    background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
  if (posy5<500) {
    posy5=posy5+1;
  }
  translate (0, 0, posy5);

  push();
  translate(-300, -200);
  rotateY(radians(90));
  rect(0, 0, 700, 400);
  
  translate(1200,0);
  rect(0,0,3000,400);
  pop();

  push();
  translate(300, -200);
  rotateY(radians(90));   
  rect(0, 0, 700, 400);
  
  translate(1200,0);
  rect(0,0,3000,400);
  pop();
  
  push();
  translate(-125,-200,-1200);
  rect(0,0, 250,400);
  
  translate(425,0);
  rect(0,0,350,400);
  
  translate(-950,0);
  rect(0,0,350,400);
  pop();
  
  push();
  translate(650,-200,-1200);
  rotateY(radians(-90));
  rect(0,0, 800,400);
  pop();
  
  push();
  translate(-650,-200,-1200);
  rotateY(radians(-90));
  rect(0,0,800,400);
  pop();

}

function position6() {
      background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
  if (posy6<1200) {
    posy6=posy6+1;
 }
  translate (0, 0, posy6);
  
  push();
  translate(-300,-200);
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
function position7() {
      background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
  if (posy7<1300) {
    posy7=posy7+2;
 }
  translate (0, 0, posy7);
  
  push();
  translate(-300,-200);
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
 function position8() {
       background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
  if (posy8<500) {
    posy8=posy8+2;
 }
  translate (0, 0, posy8);
  
  push();
  translate(-300,-200);
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
 
 function position9() {
    background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
 if (posy9<150) {
   posy9=posy9+1;
 }
  translate (0, 0, posy9);
  
  push();
  translate(-300,-200,500);
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
  translate(300,-200,-1800);
  rotateY(radians(180));
  rect(0,0,2000,400);
  pop();
 }
 
 function position10() {
       background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
 if (posy10<1350) {
   posy10=posy10+3;
 }
  translate (0, 0, posy10);
  
  push();
  translate(-300,-200);
  rotateY(radians(90));
  rect(0,0,1500,400);

  pop();
  
  push();
    translate(-3300,-200);
    rotateY(radians(90));
    rotateX(radians(90));
    rect(0,0,2000,3600);
    pop();
  
  push();
  translate(-300,-600,-2000);
  rotateY(radians(90));
  rect(0,0,5000,800);
  rotateY(radians(90));
  rect(0,0,5000,800);
  pop();
  
  push();
  translate(0,185,-2450);
  box(600,30,900);
  translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
    translate(0,-30,-85);
  box(600,30,900);
  pop();
  
  push();
  translate(300,-600);
  rotateY(radians(90));
  rect(0,0,5000,800);
  pop();
 }

function position11() {
      background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
 if (posy11<500) {
   posy11=posy11+3;
 }
  translate (0, 0, posy11);
  
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
    translate(0,-30,-85);
  pop();
  
  push();
  translate(-700,-600,-500);
  rotateY(radians(90));
  rect(0,0,5000,800);
  pop();
  
  push();
  translate(-300,-600,-2000);
  rect(0,0,1200,800);
  pop();
  
  push();
  translate(900,-600,-1650);
  rect(0,0,5000,800);
  rotateY(radians(90));
  rect(0,0,350,800);
  pop();
  
  push();
  translate(900,-600);
  rotateY(radians(90));
  rect(0,0,1250,800);
  pop();
  
    push();
  translate(750,185,-1450);
  rotateY(radians(-90));
  box(400,30,900);
  translate(0,-30,-50);
  box(400,30,900);
    translate(0,-30,-50);
  box(400,30,900);
    translate(0,-30,-50);
      box(400,30,900);
    translate(0,-30,-50);
      box(400,30,900);
    translate(0,-30,-50);
      box(400,30,900);
    translate(0,-30,-50);
      box(400,30,900);
    translate(0,-30,-50);
      box(400,30,900);
    translate(0,-30,-50);
      box(400,30,900);
    translate(0,-30,-50);
      box(400,30,900);
    translate(0,-30,-50);
      box(400,30,900);
    translate(0,-30,-50);
      box(400,30,900);
    translate(0,-30,-50);
      box(400,30,900);
    translate(0,-30,-50);
      box(400,30,900);
    translate(0,-30,-50);
  pop();
  
  push();
  translate(300,-200,1000);
  rotateY(radians(90));
  rect(0,0,1500,400);
  pop();
}
 function position12() {
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
 
 function position13() {
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
 
 function position14() {
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
 
 function position15() {
       background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
  if (posy15<800) {
    posy15=posy15+2;
   }
  translate (0, 0, posy15);
  
  push();
  translate(-300,-200);
  rotateY(radians(90));
  rect(0,0, 1000,400);
  pop();
  
  push();
  translate(300,-200);
  rotateY(radians(90));
  rect(0,0,9000,400);
  pop();
  
  push();
  translate(-450,0,-5225);
  box(300,400,7500);
  pop();
  
  push();
  translate(-1100,-200,-500);
  rotateY(radians(90));
  rect(0,0,9000,400);
  pop();
 }
 
 function position21 () {
       background(0);
  camera(0, 0, 20, (mouseX-300)/50, (mouseY-200)/50, 0, 0, 1, 0);
 if (posy21<525) {
   posy21=posy21+3;
 }
  translate (0, 0, posy21);
  
  push();
  translate(300,-200,1000);
  rotateY(radians(90));
  rotateX(radians(-90));
  rect(0,0,1500,600);
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
  pop();
  
  push();
  translate(-300,-1200,1000);
  rotateY(radians(90));
  rect(0,0,9000,1400);
  pop();
  
    push();
  translate(300,-1200,1000);
  rotateY(radians(90));
  rect(0,0,9000,1400);
  pop();
 }
function draw()
{
    if(position==1)
  {
    position1();
   }
  if(position==2)
  {
    position2();
  }
    if(position==3)
  {
    position3();
   }
       if(position==4)
  {
    position4();
   }
     if(position==5)
  {
    position5();
   }
     if(position==6)
  {
    position6();
   }
        if(position==7)
  {
    position7();
   }
        if(position==8)
  {
    position8();
   }   
        if(position==9)
  {
    position4();
   }   
        if(position==10)
  {
    position3();
   }   
        if(position==11)
  {
    position15();
   }   
        if(position==12)
  {
    position9();
   }
        if(position==13)
  {
    position5();
   }   
        if(position==14)
  {
    position15();
   }   
        if(position==15)
  {
    position9();
   }   
        if(position==16)
  {
   position10();
   }          
        if(position==17)
  {
   position11();
   }      
        if(position==18)
  {
   position12();
   }        
        if(position==19)
  {
   position13();
   }        
        if(position==20)
  {
   position14();
   }
        if(position==21)
  {
   position21();
   }
    
    
}

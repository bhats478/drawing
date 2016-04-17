//Sanjana's drawing

var x = 350; //variable of halfway & meeting point

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background("black");
  stroke("lightblue")
  fill("cadetblue")
  drawDiamond();
  drawLight();
  drawRainbow();
}

function drawDiamond (){
  triangle(300,300,350,350,400,300);
  quad(300,300,310,290,390,290,400,300);
  stroke("lightblue");
    line(310,300,350,350);
      line(320,290,310,300);
    line(320,300,350,350);
      line(330,290,320,300);
    line(330,300,350,350);
      line(340,290,330,300);
    line(340,300,350,350);
      line(350,290,340,300);
    line(350,300,350,350);
      line(350,290,350,300);
    line(360,300,350,350);
      line(350,290,360,300);
    line(370,300,350,350);
      line(360,290,370,300);
    line(380,300,350,350);
      line(370,290,380,300);
    line(390,300,350,350);
      line(380,290,390,300);
    line(400,300,350,350);
      line(390,290,400,300);
}

function drawLight(){
  stroke("white");
  line(310,0,x,290);
  line(320,0,x,290);
  line(330,0,x,290);
  line(340,0,x,290);
  line(350,0,x,290);
  line(360,0,x,290);
  line(370,0,x,290);
  line(380,0,x,290);
  line(390,0,x,290);
}

function drawRainbow(){
stroke("red")
  line(350,650,x,x);
  line(280,650,x,x);
  line(210,650,x,x);
  line(420,650,x,x);
  line(490,650,x,x);
stroke("orange")
  line(340,650,x,x);
  line(270,650,x,x);
  line(200,650,x,x);
  line(360,650,x,x);
  line(430,650,x,x);
  line(500,650,x,x);
stroke("yellow");
  line(330,650,x,x);
  line(260,650,x,x);
  line(190,650,x,x);
  line(370,650,x,x);
  line(440,650,x,x);
  line(510,650,x,x);
stroke("green");
  line(320,650,x,x);
  line(250,650,x,x);
  line(180,650,x,x);
  line(380,650,x,x);
  line(450,650,x,x);
  line(520,650,x,x);
stroke("blue");
  line(310,650,x,x);
  line(240,650,x,x);
  line(170,650,x,x);
  line(390,650,x,x);
  line(460,650,x,x);
  line(530,650,x,x);
stroke("indigo");
  line(300,650,x,x);
  line(230,650,x,x);
  line(400,650,x,x);
  line(470,650,x,x);
stroke("violet");
  line(290,650,x,x);
  line(220,650,x,x);
  line(410,650,x,x);
  line(480,650,x,x);
  line(540,650,x,x);
}

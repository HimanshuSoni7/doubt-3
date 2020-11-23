var particles=[];
var plinkos=[];
var division=[];

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var divisions;
var divisionHeight=300;

function setup() {
  createCanvas(480,660);

  engine = Engine.create();
	world = engine.world;

  ground=new Ground(240,650,480,10);
  //divisions=new Division(x,y,10,300);

  Engine.run(engine);
}

function draw() {
  background("black");
  /*for(var k=0; k<=width; k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,disvisionHeight));
  }*/
  ground.display();  
  drawSprites();
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.	

	dustbin1 = new Dustbin(550,640,20,80);
	dustbin2 = new Dustbin(610,670,110,20);
	dustbin3 = new Dustbin(660,640,20,80);
	paper = new Paper(100,600,20);

	ground = new Ground(400,680,800,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  
 
	ground.display();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	paper.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log(paper);
		Matter.Body.applyForce(paper.paper,paper.paper.position,{x:65,y:-85});
	}
}




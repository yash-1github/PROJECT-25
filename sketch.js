
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var paper;

function preload()
{

dustbinimg = loadImage( "dustbin.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;	

	

	wall1 = new Wall(900,605,250,20);
	wall2 = new Wall(785,500,20,250);
	wall3 = new Wall(1015,500,20,250);
	ground = new Wall(600 ,620, 1200,10);
	ball = new Paper(100,540,80);
	 

  
}	


function draw() {

  background(225);
  Engine.update(engine);
  rectMode(CENTER);
 
  
  wall1.display();
  wall2.display();
  wall3.display();
  ball.display();
  image( dustbinimg, 763,370,275,250);
  ground.display();

  //paperSprite.x = ball.position.x ;
  //paperSprite.y = ball.position.y 


  
  //drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	 	
		Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-137})
		
	}
}	


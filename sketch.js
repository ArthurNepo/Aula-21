
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball 

var groundObj

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_opitions={
		isStatic:false,
		restitution:0.3,
        friction:0,
		density:1.2
	}
	
	ball = Matter.Bodies.circle(260,100,20,ball_opitions)
    World.add(world,ball)

	groundObj=new Ground(width/2,670,width,20)
	leftSide = new Ground(1100,600,20,120)
	rightSide = new Ground(1350,600,20,120)

	

	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})

		
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display()
  rightSide.display()
  ellipse(ball.position.x,ball.position.y,20,20)
  
  
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

  
  engine = Engine.create();		
	world = engine.world;
  box = new Box(1200,650,150,150);


	ground = new ground(800,height,1600,20)
  ball = new Ball(200,450,40);

	Engine.run(engine);
} 


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");
  drawSprites();
  ground.display();
  ball.display();
  box.display();


 

}

function keyPressed() {

   if(keyCode === UP_ARROW) {
	  
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
   }

}


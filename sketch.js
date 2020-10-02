var dustbin, paper, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	ground = new Ground(width/2, height-35, width,10);

	paper = new Paper(110,660,25);

	
	dustbin =  new Dustbin(650,610,70,100);

	

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  
  Engine.update(engine);


  background(255);
  
  paper.display();

  drawSprites();

  ground.display();
  dustbin.display();
  
 

  //keyPressed();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x : 95, y : -95});
	   
	}

	// if(paper.body.x >= dustbin.body.x){
	// 	paper.visibility = false;
	// }
	   
   }




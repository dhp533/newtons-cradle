const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5
var rope1
var rope2
var rope3
var rope4
var rope5
var roof


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof (400, 200, 400, 20);

  //bob
  bobObject1 = new Bob (400, 500, 30)
  bobObject2 = new Bob (400, 500, 30)
  bobObject3 = new Bob (400, 500, 30)
  bobObject4 = new Bob (400, 500, 30)
 bobObject5 = new Bob (400, 500, 30)

  //rope
  rope1 = new Rope ( bobObject1.bob,roof.body, 0, 0);
  rope2 = new Rope ( bobObject2.bob, roof.body,50, 0);
  rope3 = new Rope (bobObject3.bob,roof.body,  100, 0);
  rope4 = new Rope (bobObject4.bob,roof.body,  150, 0);
  rope5 = new Rope (bobObject5.bob, roof.body, -50, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  
  //one
  bobObject1.display();
  rope1.display();

  //two
  bobObject2.display();
  rope2.display();

  // //three
  bobObject3.display();
  rope3.display();

  // //four
  bobObject4.display();
   rope4.display();

  // //five
  bobObject5.display();
  rope5.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(bobObject5.bob,bobObject5.bob.position,{x:-120,y:-120})
  }
}
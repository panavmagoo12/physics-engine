// giving a nickname or renaming is called name spacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
 // JSON= java script object notation  
  var obj_options={
    isStatic:true
  }
  object=Bodies.rectangle(200,390,400,20,obj_options);
  World.add(world,object);
var ball_options={
  restitution:1.5
}
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
console.log(object);
  
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);  
  rect(object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}
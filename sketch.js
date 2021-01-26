const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground,box1;
var polygon_img


function preload() { 
polygon_img=loadImage("polygon.png");


}




function setup() {
	createCanvas(1000, 700);


	//engine = Engine.create();
	world = engine.world;
Engine.run(engine)

	//Create the Bodies Here.
ground=new Ground();
box1=new box(330,275,30,40);
ball=Bodies.circle(50,200,20);
World.add(world,ball);
slingShot=new SlingShot(this.ball,{x:100,y:200})
  
}


function draw() {
 
  background("white");
  Engine.update(engine)
ground.display();
box1.display();
slingShot.display();
imageMode(CENTER);
image(polygon_img,ball.position.x,ball.position.y,40,40);

}





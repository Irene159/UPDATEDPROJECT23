var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var RightBox, CenterBox, LeftBox, RightBody, LeftBody, CenterBody;

function preload() {
  helicopterIMG = loadImage("helicopter.png");
  packageIMG = loadImage("package.png");
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);

  packageSprite = createSprite(width / 2, 80, 10, 10);
  packageSprite.addImage(packageIMG);
  packageSprite.scale = 0.2;

  helicopterSprite = createSprite(width / 2, 200, 10, 10);
  helicopterSprite.addImage(helicopterIMG);
  helicopterSprite.scale = 0.6;

  engine = Engine.create();
  world = engine.world;

  packageBody = Bodies.circle(width / 2, 200, 5, {
    restitution: 0.6,
    isStatic: true,
  });
  World.add(world, packageBody);

  var options = {
    isStatic: true,
  };

  //Create a Ground
  ground = new ground(width / 2, 680, width, 10);

  box2 = new Box(500,650,20,100,"red");
	box3 = new Box(295,650,20,100,"red");
	box1 = new Box(400,690,200,20,"red");
  

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  drawSprites();

  ground.display();

  box1.display();
	box2.display();
	box3.display();

}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {

    Matter.Body.setStatic(packageBody, false);
  }

}
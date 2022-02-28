const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

let arena,player1,player2
let firstPlayer,secondPlayer

function preload() {

arena = loadImage("Arena.jpg")
player1 = loadAnimation("Player1.jpg","Player 1-1.jpg")
// player2 = loadAnimation("Player2.jpg","Player 2-2.jpg")


}

function setup() {
  createCanvas(1200,500);
  

  engine = Engine.create();
  world = engine.world;
  

  firstPlayer = createSprite(230, 420, 100, 100);
  firstPlayer.addAnimation("player1", player1);
  firstPlayer.scale = 0.2;
 
  imageMode(CENTER)
}



function draw() 
{
  background(51);
  image(arena,width/2,height/2,1200,600)

  
  Engine.update(engine);
  
  drawSprites();
}


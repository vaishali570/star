const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engie,world;
var fairy,fairyImg;
var star,starImg;
var starNight,fairyVoice;

function preload(){
 fairyImg=loadImage("images/fairy1.png");
 starImg=loadImage("images/star.png")
 starNight=loadImage("images/starnight.png")
 fairyVoice = loadSound("sound/JoyMusic.mp3");
 
}
function setup() {
  createCanvas(800, 750);

  engine = Engine.create();
   world = Engine.world; 

  fairyVoice.play();

  starBody = Bodies.circle(650 , 30 , 5 , {
    restitution:0.5, 
    isStatic:true});
   World.add(world, starBody);
   Engine.run(engine);

  engine-Engine.create();
  world-World.create();
  
 fairy=createSprite(50,150);
 fairy.addAnimation("fairy",fairyImg);
 fairy.scale =0.25;

 star=createSprite(25,100);
 star.addImage("star",starImg);
 star.scale=0.2;



}


function draw() {
  background(starNight)




star.x= starBody.position.x;
 star.y= starBody.position.y; 



if(star.y > 470 && starBody.position.y > 470 ){
   Matter.Body.setStatic(starBody,true); }
  
  drawSprites();
}

function keyPressed() { 
  if(keyCode === RIGHT_ARROW){ 
    fairy.x = fairy.x + 20;
   } 
   
   if(keyCode === LEFT_ARROW){ 
     fairy.x = fairy.x - 20;
     } 
if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(starBody,false);
   } }
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8

function setup() {
  createCanvas(800,600);
  wall1=createSprite(400, 20, 630, 10);
  wall2=createSprite(20, 300, 10, 500);
  wall3=createSprite(370, 550, 700, 10);
  wall4=createSprite(710, 250, 10, 450);
  wall5=createSprite(630, 430, 170, 10);
  wall6=createSprite(660, 250, 100, 10);
  wall7=createSprite(610, 300, 10, 100);
  wall8=createSprite(500, 280, 10, 150);
}

function draw() {
  background("green");  
  drawSprites();
}
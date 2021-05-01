const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg;
var snow = [];

var engine, world;

function preload(){
  bg = loadImage("snow3.png");  
  
}

function setup(){
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  
}

function draw(){
  
  Engine.update(engine);
  background(bg);  
  drawSprites();
  
  if(frameCount % 60 === 0){
    snow.push(new Flakes(random(0, 700), random(15, 25)));
  }

  for(var j = 0; j<snow.length; j++){
    snow[j].display();
  }
}
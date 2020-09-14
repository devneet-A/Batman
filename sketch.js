const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var drops;
var maxDrops = 100;
function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    
   
    
}

function draw(){
    for(i=0;i<maxDrops;i++){
        drops=new Drops(random(0,400),random(0,400));
    }

    drops.display();
}   


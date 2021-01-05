const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, divisions = [], plinko, plinkos = [], particles = []

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300, 800, 610, 20)

  for(var i = 5; i<481; i=i+78.42){
    divisions.push(new Division(i, 650, 10, 300))
  }

  for (var j = 40; j<= width;j= j+50 ){
    plinkos.push(new Plinko(j, 75))
  }
  for (var j = 40; j<= width;j= j+50 ){
    plinkos.push(new Plinko(j, 275))
  }
  for (var j = 15; j<= width-10;j= j+50 ){
    plinkos.push(new Plinko(j, 175))
  }
  for (var j = 15; j<= width-10;j= j+50 ){
    plinkos.push(new Plinko(j, 375))
  }



}

function draw() {
  background("black");
  Engine.update(engine);

  text(mouseX+":"+mouseY, 300, 50)

  if(frameCount%50===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
  }
  
  ground.display();
  
  for (var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for (var j = 0; j<particles.length; j++){
    particles[j].display();
  }


  
}
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 10; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var i = 75; i <=width; i=i+50) { 
    plinkos.push(new Plinko(i,75));
  }

  //create 2nd row of plinko objects
  for (var i = 50; i <=width-10; i=i+50) 
  {
    plinkos.push(new Plinko(i,175));
  }

  //create 3rd row of plinko objects
  for (var i = 75; i <=width; i=i+50) { 
    plinkos.push(new Plinko(i,275));
  }
  
  //create 4th row of plinko objects
  for (var i = 50; i <=width-10; i=i+50) 
  {
    plinkos.push(new Plinko(i,375));
  }

  //create particle objects
  
    if(frameCount%60===0){
      particles.push(new Par(random(width/2-10, width/2+10), 10));
    }

}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var i = 0; i < particles.length; i++) {
    particles[i].display();   
  }
}
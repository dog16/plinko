var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
//var particles = [];
var plinkos = [];

var divisionHeight=300;
var divisions = [];
var score =0;
var gameState = "play";
var particle;
var score = 0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("pink");
  //179,204,141
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
   
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   textSize(20);
   noStroke()
   fill("black")
   text("SCORE = "+score,20,30);

   //textSize(20);
   if(particle!=null)
   {
     particle.display();

     if(particle.body.position.y>760)
     {
          if(particle.body.position.x<300)
          {
            score = score + 500;
            particle = null;
            count = count + 1;
            
          }

          
          
     }
     
   }

   if(particle!=null)
   {
     particle.display();

     if(particle.body.position.y>760)
     {
      if(particle.body.position.x>301 && particle.body.position.x<600)
      {
        score = score + 100;
        particle = null;
        count = count + 1
      }
        
          }

          
          
     }
     
     if(particle!=null)
     {
       particle.display();
  
       if(particle.body.position.y>760)
       {
        if(particle.body.position.x>601 && particle.body.position.x<900)
        {
          score = score + 200;
          particle = null;
          count = count+1
        }
        
   
            }
  
            
            
       }

       for (var k = 0; k < divisions.length; k++) {
     
        divisions[k].display();
      }
   
     
   text("500",25,520);
   text("300",100,520);
   text("500",180,520);
   text("500",260,520);
   text("200",340,520);
   text("300",420,520);
   text("100",500,520);
   text("100",580,520);
   text("200",660,520);
   text("500",740,520);

   text("chances out of 5  = "+count,500,30)
   
if(count>=5)
{
  gameState = "end"
  textSize(30);
  fill(4,5,5);
  text("5 chances are all used up! ",300,350);
  
}

   

   

for(var i = 0; i<width; i = i+10)
{
  strokeWeight(4);
  stroke(38,150,216);
  fill(38,150,216);
  line(i,490,i+20,490)
}




   }

function mousePressed()
   {
     if(gameState!=="end")
     {
     particle = new Particle(mouseX,10,10,10);
     }
   }


   

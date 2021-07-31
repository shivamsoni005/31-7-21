const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;
var base
var con




function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	

	var roof_options={
		isStatic:true			
	}

	var ball_options={	
		restitution: 0.95,
        //isStatic: true
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	b1 = Bodies.circle(250,300,25,ball_options);
    World.add(world,b1);

	b2 = Bodies.circle(300,300,25,ball_options);
    World.add(world,b2);
  
    b3 = Bodies.circle(350,300,25,ball_options);
    World.add(world,b3);
    
    b4 = Bodies.circle(400,300,25,ball_options);
    World.add(world,b4);
  
    b5 = Bodies.circle(450,300,25,ball_options);
    World.add(world,b5);
  
    con = Constraint.create({
         
        pointA: {x:250,y:100},
        bodyB:b1,
        pointB:{x:0,y:0},
        length:200,
        stiffness:0.1
    })
    World.add(world,con)

    con1 = Constraint.create({
        
        pointA: {x:300,y:100},
        bodyB:b2,
        pointB:{x:0,y:0},
        length:200,
        stiffness:0.1
    })
    World.add(world,con1)

    con2 = Constraint.create({
       
        pointA: {x:350,y:100},
        bodyB:b3,
        pointB:{x:0,y:0},
        length:200,
        stiffness:0.1
    })
    World.add(world,con2)

    con3 = Constraint.create({
       
        pointA: {x:400,y:100},
        bodyB:b4,
        pointB:{x:0,y:0},
        length:200,
        stiffness:0.1
    })
    World.add(world,con3)

    con4 = Constraint.create({
        
        pointA: {x:450,y:100},
        bodyB:b5,
        pointB:{x:0,y:0},
        length:200,
        stiffness:0.1
    })
    World.add(world,con4)
  


	Engine.run(engine);
	ellipseMode(RADIUS)
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine)

  rect(roof.position.x,roof.position.y,400,20);

  //call display() to show ropes here
  //display();
  
  //create ellipse shape for multiple bobs here
  ellipse(b1.position.x,b1.position.y,25)
  ellipse(b2.position.x,b2.position.y,25)
  ellipse(b3.position.x,b3.position.y,25)
  ellipse(b4.position.x,b4.position.y,25)
  ellipse(b5.position.x,b5.position.y,25)

  push ()
  strokeWeight(2)
  stroke (255)
  line (con.pointA.x,con.pointA.y,b1.position.x,b1.position.y)
  line (con1.pointA.x,con1.pointA.y,b2.position.x,b2.position.y)
  line (con2.pointA.x,con2.pointA.y,b3.position.x,b3.position.y)
  line (con3.pointA.x,con3.pointA.y,b4.position.x,b4.position.y)
  line (con4.pointA.x,con4.pointA.y,b5.position.x,b5.position.y)
pop ()
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
    if(keyCode == UP_ARROW){
    Matter.Body.applyForce(b1,{x:0,y:0},{x:-0.05,y:0})
    }
}
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;

var engine, ground, paper;
var c1, c2, c3;
var dustbinImage, paperImg;

function preload () {
	dustbinImage = loadImage('images/dustbingreen.png');
	paperImg = loadImage('images/paper.png');
}

function setup () {
	createCanvas(1920, 800);
	

	engine = Engine.create();
	world = engine.world;

	ground = new Container(1920/2, 790, 1920, 10);

	var paper_options = {
		isStatic: false,
		restitution: 0.3,
		density: 1.2,
		friction: 0.5
	}

	paper = Bodies.circle(200, 400, 80, paper_options);
	World.add(world, paper);

	c1 = new Container(1800, 780, 200, 10);
	c2 = new Container(1700, 685, 10, 200);
	c3 = new Container(1900, 685, 10, 200);

	Engine.run(engine);
}

function draw () {
		background('white');

	

		ground.display('brown');
		
		
		
		keyPressed();

		noStroke();

		c1.display('white');
		c2.display('white');
		c3.display('white');

		image(dustbinImage, 1700, 580, 200, 200);


		
		imageMode(CENTER);
		image(paperImg, paper.position.x, paper.position.y, 200, 200);
}

function keyPressed () {
	if (keyDown('UP_ARROW')) {
		Body.applyForce(paper, paper.position, {x: 0, y: -100});
	}
	if (keyDown('DOWN_ARROW')) {
		Body.applyForce(paper, paper.position, {x: 0, y: 100});
	}
	if (keyDown('LEFT_ARROW')) {
		Body.applyForce(paper, paper.position, {x: -100, y: 0});
	}
	if (keyDown('RIGHT_ARROW')){
		Body.applyForce(paper, paper.position, {x: 100, y: 0});
	}
}


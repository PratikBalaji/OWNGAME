var bgImg, asteroidImg, spaceshipImg;
var player;
var asteroidArray;
function preload(){
  bgImg=loadImage("Sprites/bg.jpg");
  asteroidImg=loadImage("Sprites/astroid.png");
  spaceshipImg=loadImage("Sprites/Spaceship.png");
  laserImg=loadImage("Sprites/laser.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight-150);
  player=createSprite(displayWidth/2,displayHeight/2+200);
  player.addImage("SpaceShip",spaceshipImg);
  player.scale=0.3;
  edges = createEdgeSprites();
  asteroidArray= new Group();
}

function draw() {
  background(bgImg);  
  moveShip();
  spawnObstacles();
  drawSprites();
  shootLasers();
  if (player.isTouching(edges[0]) || player.isTouching(edges[1])) 
  { 
    player.bounceOff(edges[0]); 
    player.bounceOff(edges[1]); }
}
function moveShip(){
  if (keyWentDown("LEFT_ARROW")) {
  player.velocityX=-10;
  }
  if (keyWentUp("LEFT_ARROW")){
    player.velocityX=0;
  }
  if (keyWentDown("RIGHT_ARROW")) {
    player.velocityX=10;
    }
    if (keyWentUp("RIGHT_ARROW")){
      player.velocityX=0;
    }
}

function spawnObstacles(){
  console.log("spawnObstacles");
  if (frameCount % 60 ===0) {
    var asteroid = createSprite(displayWidth/2,-10, 10, 20);
    asteroid.x = Math.round(random(50,displayWidth-100));
    asteroid.addImage(asteroidImg);
    asteroid.scale=0.3;
    asteroid.velocityY = 3;
    asteroid.lifetime = displayHeight/3;
    asteroidArray.add(asteroid);
  }
}

function shootLasers(){
  if(keyWentDown("SPACE")){
    var laser = createSprite(player.x,player.y);
    laser.velocityY = -10;
    laser.addImage(laserImg);
    laser.scale=0.3;
    laser.rotateToDirection=true;
    laser.lifetime = 60;
  }
}


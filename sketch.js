
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
createCanvas(600,400);
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
  
  
  monkey.scale = 0.1;

  ground = createSprite(400,365,900,10);
  ground.velocityx = -4;
  ground.x = ground.width/2;
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {

  background("white");
  
  
    if(keyDown("space")&& monkey.y >= 120){
     monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 1.5;
  
  if(bananaGroup.isTouching(monkey)){
    score = score + 1;
  }
  
    spawnBananas();
  spawnObstacles();
  
  monkey.collide(ground);

  var survivalTime = 0;
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("SurvivalTime: " + survivalTime, 400, 50);
  

  drawSprites();
}


function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 140 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    monkey.depth = banana.depth + 1;
    banana.lifetime = 200;
  
    bananaGroup.add(banana);
  }
  }

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    var obstacle = createSprite(600,330,40,10);

    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
  
    obstacleGroup.add(obstacle); 
  }
  }



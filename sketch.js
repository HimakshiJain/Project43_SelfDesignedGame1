var bgImg, dinoImg;
var obstacleImg;
var platformImg;
var groundImg;
var dino, ground, groundInv;
var obstacle;
var platform;

//var marioCollidedImg;

var obstacleGroup; 
var platformGroup;

//var gameState = "play";


function preload(){

    bgImg = loadImage("images/bg/png/BG.png");
    dinoImg = loadAnimation("images/dino/run/run1.png", "images/dino/run/run2.png", "images/dino/run/run3.png", "images/dino/run/run4.png", "images/dino/run/run5.png", "images/dino/run/run6.png", "images/dino/run/run7.png", "images/dino/run/run8.png");
    groundImg = loadImage("images/bg/png/ground.png");
    obstacleImg = loadAnimation("images/bg/png/Objects/DeadBush.png");
    platformImg = loadImage("images/bg/png/Tiles/tile/platform.png");
    //marioCollidedImg = loadImage("collided.png");

}

function setup(){
    createCanvas(1200,600);

    dino = createSprite(100,520,20,20);
    dino.addAnimation("dino", dinoImg);
    dino.scale = 0.2;

    ground = createSprite(600,590,1200,20);
    ground.addImage(groundImg);
    ground.scale = 1;

    groundInv = createSprite(600,550,1200,20);
    groundInv.visible = false;

    obstacleGroup = new Group();
    platformGroup = new Group();

}

function draw(){

    background(bgImg);

    dino.collide(groundInv);

    ground.velocityX = -2;
    if(ground.x < 0){
    ground.x = ground.width/2;
    }

    if(keyDown("space")){
        dino.velocityY = -20;
    }

    dino.velocityY = dino.velocityY + 1;

    spawnObstacles();
    spawnPlatforms();

    drawSprites();
}

function spawnObstacles(){

    if(frameCount % 150 === 0){
        obstacle = createSprite(1200,495,20,20);
        obstacle.addAnimation("obstacles", obstacleImg);
        obstacle.scale = 1;

        obstacle.velocityX = -10;

       obstacleGroup.add(obstacle);
    }

}

function spawnPlatforms(){

    if(frameCount % 200 === 0){
        platform = createSprite(1200, random(300,400), 20,20);
        platform.addImage(platformImg);
        platform.scale = 0.5;

        platform.velocityX = -2;
        dino.collide(platform); 

        platformGroup.add(platform);
    }

}



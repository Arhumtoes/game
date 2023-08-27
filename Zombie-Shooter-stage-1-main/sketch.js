var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg
var groupZombie
var zombie
var bombImg
var bomb
var bombbbbbbs=10
var bomvGroup
var score=0

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  bombImg = loadImage("bomb.png")
}

function setup() {
  
  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
groupZombie= new Group()
bomvGroup=new Group()
//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = false
   player.setCollider("rectangle",0,0,300,300)
   
   

}

function draw() {
  background(0); 
  zombies()

 if(groupZombie.isTouching(bomvGroup)){
  for(var i=0;i<groupZombie.length;i++){
    if(groupZombie[i].isTouching(bomvGroup)){
      groupZombie[i].destroy()
      bomvGroup.destroyEach()
      score+=5
    }
  }
 }
 if(score==50){
  text("u won but still get better",250,250)
      groupZombie.destroyEach()
      bomvGroup.destroyEach()
      player.destroy()
 }
 if(groupZombie.isTouching(player)){
   for(var i=0;i<groupZombie.length;i++){
    if(groupZombie[i].isTouching(player)){
      groupZombie[i].destroy()
    }
 
    }
 }
  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x+30
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-30
}
//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  bomb=createSprite(player.x+30,player.y-30)
  bomb.addImage(bombImg)
  bomb.scale = 0.1
  player.addImage(shooter_shooting)
  bomb.velocityX=+30
  bombbbbbbs-=1
  bomvGroup.add(bomb)
  
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
if (bombbbbbbs==0){
  text ("u suck bozo get better",100,100)
  player.destroy()
  groupZombie.destroyEach()
  bomvGroup.destroyEach()
}
textSize(20)
   fill("green")
   text("score"+score,250,250)
drawSprites();

}
function zombies(){
  if(frameCount%50==0){
 zombie = createSprite(random(500,1200),random(100,1000))
 zombie.addImage(zombieImg)
 zombie.velocityX = -6
 groupZombie.add(zombie)
 zombie.scale =0.1

}}

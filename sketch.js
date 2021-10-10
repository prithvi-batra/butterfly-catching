var wormGroup;
var score = 0;
function preload(){
  butterflyImage = loadImage("images/butterfly.png");
  bgImage        = loadImage("images/bg.jpg");
  beeImage       = loadImage("images/bee.png");
}

function setup() {
  createCanvas(600,600);
  bgSprite = createSprite(300,300);
  player = createSprite(200,200,30,30);
  wormGroup = new Group();
  player.scale = 0.5;
  bgSprite.scale = 0.9; 
}

function draw() {
  player.addImage(butterflyImage);
  bgSprite.addImage(bgImage);
  background("black");  
  stroke("white");
  noFill();
  player.x = mouseX;
  player.y = mouseY; 
  generateWorms();
  textSize(30);
  text("butterflies caught : " + score , 300,40)
  for (var i = 0 ; i<(wormGroup).length ; i++){
    var temp = (wormGroup).get(i);
    if(player.isTouching(temp)){
      temp.destroy();
      temp = null;
      score++;
    }
  }
  drawSprites();
}
function generateWorms(){
  if(frameCount%10 == 0){
    worm = createSprite(random(50,400),random(200,400),40,5);
    worm.addImage (beeImage);
    worm.scale = 0.03;  
    worm.velocityX = random(-6,6);
    worm.velocityY = random(-6,6);
    wormGroup.add(worm);
  }
}
var dog, happyDog, database, foodS, foodStock

function preload()
{
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);

  Dog = createSprite(250,250,10,10);
  Dog.addImage(dog);
  Dog.scale=0.2;
}


function draw() {  
  background(46, 139, 87) ;
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }

  drawSprites();
 
}

function readStock(data){
  foodS=data.val
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

 

  database.ref('/').update({
    food:x
  })

  var gameStateref = database.ref('gameState');
  gameStateref.on("value",function (data){
     gameState= data.val();
  });
}


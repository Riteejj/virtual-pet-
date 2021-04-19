var dog,dogImage,happyDogImage,database,foods,foodStock;

function preload()

{
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/happydogImg.png");
}
  
  //load images here

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  foodStock.set(20);

  


  
 
  dog = createSprite(250,350,10,60);
  dog.addImage(dogImage); 

  dog.scale = 0.2;

}

function draw() {  
   
background("green");
if(keyWentUp(UP_ARROW)){
  dog.addImage(dogImage);
}
drawSprites();
  textSize(20);
  fill(255);
  text(" Press up arrow to feed ",50,50)
text("food Remaining:"+foodS,150,150);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  
  dog.addImage(happyDogImage);
}    
}



function writeStock(x){
  if (x<=0) {
  x=0
  } else {
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}

function readStock(data){
  foodS = data.val();
}








































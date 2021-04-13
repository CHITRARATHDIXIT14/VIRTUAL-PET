var dog,sadDog,happyDog;
var feed,addfood

function preload(){
  sadDog=loadImage("sprites/Dog.png");
  happyDog=loadImage("sprites/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed.createButton("Feed the dog");
  feed.position(700,95);

}

function draw() {
  background(46,139,87);

  feed.display();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock

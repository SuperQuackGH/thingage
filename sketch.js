var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var database;

var form, player, game;

var track, carWhite1, carRed2, carBlue3, carGray4;
var cars, car1, car2, car3, car4;
function preload() {
   carWhite1 = loadImage("images/car.png");
   carRed2 = loadImage("images/carRed.png");
   carBlue3 = loadImage("images/carblue.png");
   carGray4 = loadImage("images/carGray.png");
   ground = loadImage("images/ground.png");
   track = loadImage("images/imagesasset.png");
   backgroundImage = loadImage("images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.update(0);
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    end();
  }
}
function end(){

}
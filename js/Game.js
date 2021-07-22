class Game {
  constructor(){}
  
  getState(){
    var gameState_Ref  = database.ref('gameState');
    gameState_Ref.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
     var playerCount_Ref= await database.ref('playerCount').once("value");
     if(playerCount_Ref.exists()){
       playerCount = playerCount_Ref.val();
       player.getCount();
     }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage("car1",carWhite1)
    car2 = createSprite(300,200);
    car2.addImage("car2",carRed2)
    car3 = createSprite(500,200);
    car3.addImage("car3",carBlue3)
    car4 = createSprite(700,200);
    car4.addImage("car4",carGray4)
    cars = [car1, car2, car3, car4]; 
  }
  play(){
    form.hide();
    
    
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background("#ff0000");
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index = 0;
      var x = 175;
      var y; 
      
      for(var plr in allPlayers){
        index += 1;
        x += 200;
        y = displayHeight-allPlayers[plr].distance;

        cars[index-1].x = x;
        cars[index-1].y = y;

        if(index===player.index){
        stroke(10);
        fill("red");
        ellipse(x,y,60,60);
          cars[index-1].shapeColor = 'red';
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
          
        }

      }
  }

  if (keyIsDown(UP_ARROW) && player.index !== null){
     player.distance += 10
     player.update();

  }
  if(player.distance>3810){
    game.update(2)
  }
  drawSprites();
}
}
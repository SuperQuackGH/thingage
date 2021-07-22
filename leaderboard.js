function draw(){

  textSize(30);
  text("Game Start", 120, 100)
  Player.getPlayerInfo();
  
  if(allPlayers !== undefined){
    var display_position = 130;
    for(var plr in allPlayers){
      if (plr === "player" + player.index)
        fill("red")
      else
        fill("black");
  
      display_position+=20;
      textSize(15);
      text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
  }
  }


}

class Game {
  constructor(){
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  

  play(){
    form.hide();
    textSize(30);
    text("Game Starting NOW!", 120, 100);
    if(allPlayers !== undefined){
      var displayPosition = 130 
      for(var p in allPlayers){
        textSize(15);
        text(allPlayers[p], 120, displayPosition);
        displayPosition += 20;
      }
    }
  }


  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists){
        playerCount = playerCountRef.val();
        player.getCount();
      }


      form = new Form()
      form.display();
    }
  }
}

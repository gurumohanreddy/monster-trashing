new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameRunning: false
  },
  methods: {
    startGame: function() {
      this.gameRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    stopGame: function() {
      this.gameRunning = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function(){
      this.monsterHealth -= Math.floor(Math.random()*10)+1;
        if(this.gameOver()) {
          return;
        }
      this.playerHealth -= Math.floor(Math.random()*10)+3;
      this.gameOver();
    },
    specialAttack: function(){

    },
    heal: function(){

    },
    gameOver: function() {
      if(this.playerHealth <= 0){
        if(confirm('Looser! Want to take revenge?')){
          this.startGame();
        }else{
          this.stopGame();
        }
        return true;
      }else if(this.monsterHealth <= 0) {
        if(confirm('You Won! Do you want to repeat that?')){
          this.startGame();
        }else{
          this.stopGame();
        }
        return true;
      }
      return false;
    }
  }
})
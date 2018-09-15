new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameRunning: false,
    logs: []
  },
  methods: {
    startGame: function() {
      this.gameRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logs = [];
    },
    stopGame: function() {
      this.gameRunning = false;
    },
    attack: function(){
      this.playerAttack(10);
      if(this.gameOver()) {
        return;
      }
      this.monsterAttack();
    },
    specialAttack: function(){
      this.playerAttack(20);
      if(this.gameOver()) {
        return;
      }
      this.monsterAttack();
    },
    heal: function(){
      if(this.playerHealth <= 90){
        this.playerHealth += 10
        this.logs.unshift({isPlayer: true, value: 'Player healed by 10'});
      }else{
        this.playerHealth = 100;
      }
      this.monsterAttack();
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
    },
    playerAttack: function(attack) {
      var a = Math.floor(Math.random()*attack)+1;
      this.monsterHealth -= a
      var value = attack == 10 ? 'Player attacked the moster with '+a : 'Player special attacked the moster with '+a
      this.logs.unshift({isPlayer: true, value: value }); 
    },
    monsterAttack: function() {
      var a = Math.floor(Math.random()*10)+3;
      this.playerHealth -= a;
      this.logs.unshift({isPlayer: false, value: 'Monster attacked the player with '+a }); 
      this.gameOver();
    }
  }
})
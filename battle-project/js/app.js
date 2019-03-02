new Vue({
  el: "#app",
  data: {
    title: "Battle game",
    userHealth: 100,
    monsterHealth: 100,
    gameStart: true,
    logs: []
  },
  methods: {
    attack(attacker, damage) {
      if (this.checkForWinner()) return;

      if (attacker === "Human") {
        this.monsterHealth -= damage;
        this.monsterAttack();
      } else {
        this.userHealth -= damage;
      }
      this.logs.unshift(`${attacker} damaged oponent by ${damage}`);
      this.checkForWinner();
    },
    regularAttack() {
      const randomDamage = Math.floor(Math.random() * 5 + 1);
      this.attack("Human", randomDamage);
    },
    specialAttack() {
      const randomDamage = Math.floor(Math.random() * 30);
      this.attack("Human", randomDamage);
    },
    monsterAttack() {
      const randomDamage = Math.floor(Math.random() * 10 + 1);
      this.attack("Monster", randomDamage);
    },
    heal() {
      const healBy = Math.floor(Math.random() * 20);
      this.userHealth += healBy;
      if (this.userHealth >= 100) this.userHealth = 100;
      this.monsterAttack();
      this.logs.unshift("Human healed by " + healBy);
    },
    giveUp() {
      this.gameStart = true;
      this.resetGame();
    },
    startGame() {
      this.gameStart = false;
      this.resetGame();
    },
    resetGame() {
      this.userHealth = 100;
      this.monsterHealth = 100;
      this.logs = [];
    },
    checkForWinner() {
      if (this.userHealth <= 0) {
        if (confirm("You loose the game! Do you want rematch?")) {
          this.giveUp();
        }
        return true;
      } else if (this.monsterHealth <= 0) {
        if (confirm("You win the game! Do you want to play again?")) {
          this.giveUp();
        }
        return true;
      }
      return false;
    }
  }
});

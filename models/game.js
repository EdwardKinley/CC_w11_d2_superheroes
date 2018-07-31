const Card = require("./card.js");
const Player = require("./player.js");

const Game = function (player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.compareCardsAndSelectWinningPlayer = function (attribute) {
  if (this.player1.cards[0][attribute] > this.player2.cards[0][attribute] ) {
    return this.player1;
  } else {
    return this.player2;
  }
};





module.exports = Game;

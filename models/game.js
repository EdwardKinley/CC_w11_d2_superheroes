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

Game.prototype.facilitateRound = function (attribute) {
  let winningPlayer = this.compareCardsAndSelectWinningPlayer(attribute);
  let player1Card = this.player1.removeCard();
  let player2Card = this.player2.removeCard();
  if (winningPlayer === this.player1) {
    winningPlayer.addCard(player1Card);
    winningPlayer.addCard(player2Card);
  } else {
    winningPlayer.addCard(player2Card);
    winningPlayer.addCard(player1Card);
  }
};



module.exports = Game;

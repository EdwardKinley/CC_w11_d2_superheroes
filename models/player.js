const Player = function (name) {
  this.name = name;
  this.cards = [];
};

Player.prototype.addCard = function (card) {
  this.cards.push(card);
};

Player.prototype.removeCard = function () {
  return this.cards.shift();
};





module.exports = Player;

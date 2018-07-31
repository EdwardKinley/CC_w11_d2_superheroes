const Player = function (name) {
  this.name = name;
  this.cards = [];
};

Player.prototype.addCard = function (card) {
  this.cards.push(card);
};

Player.prototype.removeCard = function (lostCard) {
  this.cards = this.cards.filter(card => card !== lostCard);
};





module.exports = Player;

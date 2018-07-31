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

Player.prototype.selectAttribute = function () {
  const card = this.cards[0];
  if (card.intelligence >= card.strength && card.intelligence >= card.agility) {
    return "intelligence";
  } else if (card.strength >= card.agility) {
    return "strength";
  } else {
    return "agility";
  }
};



module.exports = Player;

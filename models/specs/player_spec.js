const assert = require("assert");
const Player = require("../player.js");
const Card = require("../card.js");

describe("Player", function () {

  let card1;
  let card2;
  let player;

  beforeEach(function () {
    card1 = new Card("Superman", 6, 9, 7);
    card2 = new Card("Scarlet Witch", 7, 10, 5);
    player = new Player("Gary");
  });

  it("should be a named person", function () {
    assert.strictEqual(player.name, "Gary");
  });

})

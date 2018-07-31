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

  describe("cards", function () {

    it("should begin as a cardless person", function () {
      assert.deepStrictEqual(player.cards, []);
    });

    it("should be able to add a card", function () {
      player.addCard(card1);
      assert.deepStrictEqual(player.cards, [card1]);
    });

    it("should be able to remove card", function () {
      player.addCard(card1);
      player.addCard(card2);
      player.removeCard(card1);
      assert.deepStrictEqual(player.cards, [card2]);
    });

  });

});

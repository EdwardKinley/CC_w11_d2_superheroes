const assert = require("assert");
const Game = require("../game.js");
const Player = require("../player.js");
const Card = require("../card.js");

describe("Game", function () {

  let card1;
  let card2;
  let card3;
  let card4;
  let card5;
  let card6;

  let player1;
  let player2;

  let game;

  beforeEach(function (){
    card1 = new Card("Superman", 6, 9, 7);
    card2 = new Card("Scarlet Witch", 7, 10, 5);
    card3 = new Card("Black Widdow", 8, 6, 9);
    card4 = new Card("The Flash", 7, 4, 10);
    card5 = new Card("Wonder Woman", 8, 7, 5);
    card6 = new Card("Batman", 10, 5, 6);

    player1 = new Player("Gary");
    player2 = new Player("Ed");

    player1.addCard(card1);
    player1.addCard(card2);
    player1.addCard(card3);
    player2.addCard(card4);
    player2.addCard(card5);
    player2.addCard(card6);

    game = new Game(player1, player2);
  });

  it("can compare cards of the two players and identify the winner", function () {
    const result = game.compareCardsAndSelectWinningPlayer("strength");
    assert.deepStrictEqual(result, player1);
  });

  it("can facilitate round won by player1", function () {
    game.facilitateRound("strength");
    assert.deepStrictEqual(player1.cards, [card2, card3, card1, card4]);
    assert.deepStrictEqual(player2.cards, [card5, card6]);
  })

});

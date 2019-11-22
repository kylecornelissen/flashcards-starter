const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    if (this.currentCard) {
      return this.currentCard
    } else {
      false
    }
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    if (!turn.evaluateGuess()) this.incorrectGuesses.push(this.currentCard.id);
    this.feedback = turn.giveFeedback();
    this.turns += 1
    this.currentCard = this.deck.cards[this.turns];
    return this.feedback
  }
  calculatePercentScore() {
    let score = (this.turns - this.incorrectGuesses.length) / this.turns * 100;
    return +score.toFixed(2);
  }
  timer() {
    global.second = 0;
    global.minute = 0;
    let interval = setInterval(function() {
      global.second++;
      if (global.second == 60){
        global.minute++;
        global.second = 0;
      }
    }, 1000);
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentScore()}% of the questions correctly! It took ${global.minute}m ${global.second}s!`;
  }
}

module.exports = Round;

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Card {
  constructor(cardNum, question, answers, correctAnswer) {
    this.cardNum = cardNum;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }

}

module.exports = Card;

const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  beforeEach(function() {
    global.card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    global.card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    global.card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    global.deck = new Deck([card1, card2, card3]);
    global.round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck object', function() {
    expect(round.deck).to.deep.equal(deck);
  });

  it('should store the current card starting with the first one', function() {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should store a turns property that initializes with a value of 0', function() {
    expect(round.turns).to.deep.equal(0);
  });

  it('should initialize with an incorrectGuesses property that is an empty array', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
});

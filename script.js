class AudioController {
  constructor() {
    this.matchSound = new Audio('audio/flip.wav');
    this.flipSound = new Audio('audio/flip.wav');
    this.bgMusic.volume = 0.5;
  }
  match() {
    this.matchSound.play();
  }
 flip() {
   this.flipSound.play();
 }
  }

class KuboMatch {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
  this.totalTime = totalTime;
  this.timeRemaining = totalTime;
  this.timer = document.getElementById('time-remaining');
  this.ticker = document.getElementById('score');
  this.audiController = new AudioController
}
startGame() {
  this.cardToCheck = null;
  this.totalClicks = 0;
  this.timeRemainnig = this.totalTime;
  this.matchedCard = [];
  this.busy = true;
}
canFlipCard(card) {
  return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck)
}
    }
}

function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  let cards = Array.from(document.getElementsByClassName('game-card'));

  overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
    });
  });
    cards.forEach(card => {
      card.addEventListener('click', () => {

    });
  });
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
}  else {
    ready();
  }


Let audiocontroller = new AudioController();

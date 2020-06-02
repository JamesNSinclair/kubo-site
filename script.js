class AudioController {
  constructor() {
    this.matchSound = new Audio('audio/match.wav');
    this.flipSound = new Audio('audio/flip.wav');
      }
      flip() {
        this.flipSound.play();
      }
  match() {
    this.matchSound.play();
  }
  }

class KuboFlip {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
  this.totalTime = totalTime;
  this.timeRemaining = totalTime;
  this.timer = document.getElementById('time-remaining');
  this.ticker = document.getElementById('score');
  this.audioController = new AudioController;
}
startGame() {
  this.cardToCheck = null;
  this.totalClicks = 0;
  this.timeRemaining = this.totalTime;
  this.matchedCards = [];
  this.busy = true;
}
  flipCard(card) {
    if(this.canFlipCard(card)) {
      this.audioController.flip();

    }
  }



canFlipCard(card) {
  return true;
  //return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck)
}
    }


function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  let cards = Array.from(document.getElementsByClassName('game-card'));
  let game = new KuboFlip(100, cards);

  overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('visible');
      game.startGame();
    });
  });
    cards.forEach(card => {
      card.addEventListener('click', () => {
      game.flipCard(card);
    });
  });
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready());
}  else {
    ready();
  }


let audiocontroller = new AudioController();

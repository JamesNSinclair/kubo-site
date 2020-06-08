const keyboard = document.getElementById('qwerty');
const answer = document.getElementById('phrase');
const ul = phrase.querySelector('ul');
const lives = document.getElementsByClassName("tries");
const startButton = document.getElementById('startButton');
const overlay = document.getElementById('overlay');
const phrases = [
"sword unbreakable",
"helmet invulnerable",
"long lake",
"armour impenat",
"its alive"
];

let missed = 0;



// SELECTING THE PHRASE

function getRandomPhraseAsArray(arr) {
 let randomPhrase = arr[Math.floor(Math.random()*arr.length)];
 let chars = randomPhrase.split('');
 return chars;

};

const chars = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(chars) {
    for (let i = 0; i < chars.length; i += 1) {
        let listItem = document.createElement("li");
        ul.appendChild(listItem);
        listItem.innerHTML = chars[i];
        if (chars[i] === ' ') {
            listItem.classList.add("space");
        } else {
            listItem.classList.add("letter");
        }
    }
}

addPhraseToDisplay(chars);

//OVERLAY BE GONE

startButton.addEventListener('click', () => {
overlay.style.zIndex = '-100';
overlay.style.visibility = 'hidden';
});


//KEYBOARD & ANSWER CHECKER

function checkLetter(guess) {
  letterFound = '';
  const letters = document.querySelectorAll('.letter');
  for (let i = 0; i < letters.length; i+=1) {
      if (letters[i].innerHTML.toLowerCase() === guess) {
          letterFound = 'correct';
          letters[i].classList.add("showing");

                }
      }
    };


keyboard.addEventListener("click", (event) => {

            if (event.target.tagName == 'BUTTON') {

                checkLetter(event.target.innerHTML);
                event.target.classList.add("chosen");
                event.target.disabled = true;

              //Lives

                if (letterFound !== 'correct') {
                  for (let i = 0; i < lives.length; i+=1)
                  if (lives[i].firstElementChild.src.includes('images/oragami-bird.png')) {
                lives[i].firstElementChild.src = 'images/lost-oragami-bird.png';
                break;
              }
                        missed+=1;
                }

              //CHECK WIN

              function checkWin() {
                let unsolved = document.querySelectorAll('.showing').length;
                  let solved = document.querySelectorAll('.letter').length;

                        if (unsolved === solved) {
                  overlay.style.zIndex = '5';
                  overlay.style.visibility = 'visible';
                  document.querySelector("#overlay").classList.add("win");
                  document.querySelector(".title").innerHTML = "Winner Winner Chicken Dinner!!";
                  document.querySelector("#startButton").inner.html = "Another Go?"
                  restart();

                }

            else if (unsolved !== solved && missed >= 5) {
              overlay.style.zIndex = '5';
              overlay.style.visibility = 'visible';
              document.querySelector("#overlay").classList.add("lose");
                  document.querySelector(".title").innerHTML = "You Lose!!";
                  document.querySelector("#startButton").innerHTML = "Another GO?";
                  restart()
          }
      }

      checkWin();
    }

});


function restart(){
  startButton.addEventListener('click', () => {
console.log("hello world");

for (let i = 0; i < lives.length; i++) {
lives[i].firstChild.src = 'images/oragami-bird.png';
}
const chosenLetters = document.querySelectorAll('.chosen');
for (let i = 0; i < chosenLetters.length; i++) {
chosenLetters[i].classList.remove("chosen");
chosenLetters[i].disabled = false;
}
document.querySelector("#overlay").classList.remove("lose");
const letters = document.querySelectorAll('#phrase ul li');


for (let i = 0; i < letters.length; i++) {
ul.removeChild(letters[i]);
}
missed = 0;
let chars = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(chars);
});
}

const keyboard = document.getElementById('qwerty');
const answer = document.getElementById('phrase');
const ul = phrase.querySelector('ul');
const lives = document.getElementsByClassName("tries");
const startButton = document.getElementById('startButton')
const overlay = document.getElementById('overlay');
const phrases = [
"may the force be with you",
"theres no place like home",
"im the king of the world",
"carpe diem",
"its alive"
];

let missed = 0;



// SELECTING THE PHRASE

function getRandomPhraseAsArray(arr) {
 let randomPhrase = arr[Math.floor(Math.random()*arr.length)];
 const chars = randomPhrase.split('');
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
document.querySelector("#startButton").style.display = "none"
});


//KEYBOARD & ANSWER CHECKER

function checkLetter(guess) {
  letterFound = '';
  const letters = document.querySelectorAll('.letter');
  for (let i = 0; i < letters.length; i+=1) {
      if (letters[i].innerHTML.toLowerCase() === guess) {
          letterFound = 'correct';
          letters[i].classList.add("show");

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
                  if (lives[i].firstElementChild.src.includes('images/liveHeart.png')) {
                lives[i].firstElementChild.src = 'images/lostHeart.png';
                break;
              }
                        missed+=1;
                }

              //CHECK WIN

              function checkWin() {
                let unsolved = document.querySelectorAll('.show').length;
                  let solved = document.querySelectorAll('.letter').length;
                        if (unsolved === solved) {
                  overlay.style.zIndex = '5';
                  overlay.style.visibility = 'visible';
                  document.querySelector("#overlay").classList.add("win");
                  document.querySelector(".title").innerHTML = "Winner Winner Chicken Dinner!!";

                }

            else if (unsolved !== solved && missed >= 5) {
              overlay.style.zIndex = '5';
              overlay.style.visibility = 'visible';
              document.querySelector("#overlay").classList.add("lose");
                  document.querySelector(".title").innerHTML = "You Lose!!";
          }
      }
      checkWin();
    }

});

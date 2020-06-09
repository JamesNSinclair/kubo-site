const startButton = document.getElementById('start-btn');
const points = document.getElementById('score');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let gameInfo = document.getElementsByClassName('top-sect');
let score = 0;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  questionElement.classList.remove("hide")
  points.classList.remove("hide")
  answerButtonsElement.classList.remove("winner")
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion () {
  resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
   const choice = document.createElement('button')
   choice.innerText = answer.text
   choice.classList.add('choice')
   if (answer.correct) {
     choice.dataset.correct = answer.correct

   }
   choice.addEventListener('click', selectAnswer)
   answerButtonsElement.appendChild(choice)
 })
}

function resetState() {
  clearStatusClass(document.getElementById('box'))
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 if (correct) {
   score +=1;
   console.log(score);
   points.innerText = "You've scored " + score + " out of 10";
 }
 setStatusClass(document.getElementById('box'), correct)
 Array.from(answerButtonsElement.children).forEach(button => {
   setStatusClass(button, button.dataset.correct)

 })
 if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else { if (score > 3) {
    answerButtonsElement.innerHTML = "You Scored " + score + '!<br>' + "Nice Job!"
  } else  {
  answerButtonsElement.innerHTML = "You Scored " + score + '.<br>' + "Better luck next time!"
}
    answerButtonsElement.classList.add("winner")
    questionElement.classList.add("hide")
    points.classList.add("hide")
    startButton.innerText = 'Another Go?'
    startButton.classList.remove('hide')
      score = 0;
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    }
    else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}



const questions = [
{
  question: "How many strings are originally on Kubo's shamisen?",
  answers: [
    {text: '0', correct: false},
    {text: '1', correct: false},
    {text: '2', correct: false},
    {text: '3', correct: true},

]
},

{
  question: 'Why does Kubo have to be home with his mother by sundown?',
  answers: [
    {text: 'To make dinner', correct: false},
    {text: 'To hide from the Moon King', correct: true},
    {text: 'To practice oragami', correct: false},
    {text: 'To wake Mother', correct: false},

]
},

{
  question: 'Who talks to Kubo about using lanterns and altars to communicate with "loved ones" that have passed on?',
  answers: [
    {text: 'Mother', correct: false},
    {text: 'Hosato', correct: false},
    {text: 'Beetle', correct: false},
    {text: 'Kameyo', correct: true},

]
},

{
  question: 'What do the The Sisters conceal their face with?',
  answers: [
    {text: 'Noh masks', correct: true},
    {text: 'Kendo masks', correct: false},
    {text: 'Tengu masks', correct: false},
    {text: 'Hannya masks', correct: false},

]
},

{
  question: 'What animal do Kubo and Monkey hide inside?',
  answers: [
    {text: 'Whale', correct: true},
    {text: 'Mammoth', correct: false},
    {text: 'Tonton', correct: false},
    {text: 'Hippoptamus', correct: false},

]
},

{
  question: 'What is the odd armour piece out from the three correctly listed?',
  answers: [
    {text: 'Breastplate Impenetrable', correct: false},
    {text: 'Sword Unbreakable', correct: false},
    {text: 'Armour Indestructible', correct: true},
    {text: 'Helmet Invulnerable', correct: false},

]
},

{
  question: 'What is Beetle exceptionally good at?',
  answers: [
    {text: 'Sneaking', correct: false},
    {text: 'Magic', correct: false},
    {text: 'Making jokes', correct: false},
    {text: 'Archery', correct: true},

]
},

{
  question: 'Which of these is not a film by Laika?',
  answers: [
    {text: 'Coraline', correct: false},
    {text: 'Spirited Away', correct: true},
    {text: 'Missing Link', correct: false},
    {text: 'ParaNorman', correct: false},

]
},

{
  question: 'Which prestigous award did Kubo and the Two Srings win?',
  answers: [
    {text: "Critic's Choice Award", correct: false},
    {text: 'Saturn Award', correct: false},
    {text: 'A BAFTA', correct: true},
    {text: 'An Emmy', correct: false},

]
},

{
  question: 'Is this the best Kubo site ever?',
  answers: [
    {text: 'Yes', correct: true},
    {text: 'Yes', correct: true},
    {text: 'Yes', correct: true},
    {text: 'Yes', correct: true},

]
},

]

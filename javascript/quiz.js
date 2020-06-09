const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
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
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.getElementById('box'), correct)
 Array.from(answerButtonsElement.children).forEach(button => {
   setStatusClass(button, button.dataset.correct)
 })
 if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Another Go?'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct') }
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
  question: 'what?',
  answers: [
    {text: 'answer', correct: true},
    {text: 'wrong', correct: false},
    {text: 'wrong', correct: false},
    {text: 'wrong', correct: false},

]
},

{
  question: 'what?',
  answers: [
    {text: 'answer', correct: true},
    {text: 'wrong', correct: false},
    {text: 'wrong', correct: false},
    {text: 'wrong', correct: false},

]
},

{
  question: 'what?',
  answers: [
    {text: 'answer', correct: true},
    {text: 'wrong', correct: false},
    {text: 'wrong', correct: false},
    {text: 'wrong', correct: false},

]
},

{
  question: 'what?',
  answers: [
    {text: 'answer', correct: true},
    {text: 'wrong', correct: false},
    {text: 'wrong', correct: false},
    {text: 'wrong', correct: false},

]
},

{
  question: 'what?',
  answers: [
    {text: 'answer', correct: true},
    {text: 'wrong', correct: false},
    {text: 'wrong', correct: false},
    {text: 'wrong', correct: false},

]
},

]

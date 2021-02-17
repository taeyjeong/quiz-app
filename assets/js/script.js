// GIVE ALL PAGES VARIABLES (PURPOSE FOR GIVING VARIABLES IS TO MAKE PAGES APPEAR & DISAPPEAR)
var startBtn = document.getElementById('btnStart')
var frontPage = document.getElementById('front')
var questPage = document.getElementById('level')
var inputPage = document.getElementById('input')
var scorePage = document.getElementById('scores')

// QUESTIONS & ANSWERS
var quest = document.getElementById('question')
var a1a = document.createElement('button')
var a1b = document.createElement('button')
var a1c = document.createElement('button')
var a1d = document.createElement('button')

// START PAGE TO LEVEL 1
startBtn.addEventListener('click', startQuiz)

function startQuiz() {
  frontPage.setAttribute('style', 'display:none')
  questPage.setAttribute('style', 'display:block')
  questPage.appendChild(a1a)
  questPage.appendChild(a1b)
  questPage.appendChild(a1c)
  questPage.appendChild(a1d)
  quest.textContent = "Which of the following options is not a property of the var statement?";
  a1a.textContent = "a. reassignable"
  a1b.textContent = "b. redeclarable"
  a1c.textContent = "c. block scope"
  a1d.textContent = "d. global scope"
};
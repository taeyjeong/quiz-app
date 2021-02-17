// TIMER
var timerShow = document.getElementById('time')
var timerStart = document.getElementById('timer')
var myTimer;
var currentTime;
  function clock() {
    myTimer = setInterval(myClock, 1000); // myClock RUNS EVERY 1 SECOND
    currentTime = 75;
    function myClock() {
      timerStart.innerHTML = --currentTime; // myClock SUBTRACTS 1 SECOND
    if (currentTime === 0) {
    clearInterval(); // TIMER STOP
    } 
  } 
};
// GIVE ALL PAGES VARIABLES (PURPOSE FOR GIVING VARIABLES IS TO MAKE PAGES APPEAR & DISAPPEAR)
var startBtn = document.getElementById('btnStart')
var frontPage = document.getElementById('front')
var questPage = document.getElementById('level')
var inputPage = document.getElementById('input')
var scorePage = document.getElementById('scores')
// START PAGE TO SCORE PAGE
var showScores = document.getElementById('scoreboard')
showScores.addEventListener('click', viewScores)

function viewScores() {
  showScores.setAttribute('style', 'display:none')
  timerShow.setAttribute('style', 'display:none')
  questPage.setAttribute('style', 'display:none')
  frontPage.setAttribute('style', 'display:none')
  scorePage.setAttribute('style', 'display:block')
  clearInterval(myTimer);
}
// QUESTIONS & ANSWERS
var quest = document.getElementById('question')
var a1a = document.createElement('button')
var a1b = document.createElement('button')
var a1c = document.createElement('button')
var a1d = document.createElement('button')
var a2a = document.createElement('button')
var a2b = document.createElement('button')
var a2c = document.createElement('button')
var a2d = document.createElement('button')
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
  clock();
};
// LEVEL 1 TO LEVEL 2
a1a.addEventListener('click', setup1to2)
a1b.addEventListener('click', setup1to2)
a1c.addEventListener('click', setup1to2)
a1d.addEventListener('click', setup1to2)

function setup1to2 () {
  quest.textContent = "Which of the following is not required to run a for loop?"
  a1a.remove()
  a1b.remove()
  a1c.remove()
  a1d.remove()
  questPage.appendChild(a2a)
  questPage.appendChild(a2b)
  questPage.appendChild(a2c)
  questPage.appendChild(a2d)
  a2a.textContent = "a. initialize variable"
  a2b.textContent = "b. change string to number"
  a2c.textContent = "c. set condition"
  a2d.textContent = "d. iterate"
}

// HIGH SCORES
var tryAgain = document.querySelector('#restart')

tryAgain.addEventListener('click', function() {
  timerStart.innerHTML = "75" // RESET TIMER
  timerShow.setAttribute('style', 'display:block')
  scorePage.setAttribute('style', 'display:none')
  frontPage.setAttribute('style', 'display:block')
  showScores.setAttribute('style', 'display:block')
})
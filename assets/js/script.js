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
    finish(); // TIMER STOP & SHOW INPUT PAGE
    } 
  } 
};

// GIVE ALL PAGES VARIABLES (PURPOSE FOR GIVING VARIABLES IS TO MAKE PAGES APPEAR & DISAPPEAR)
var startBtn = document.getElementById('btnStart')
var frontPage = document.getElementById('front')
var questPage = document.getElementById('level')
var inputPage = document.getElementById('input')
var scorePage = document.getElementById('scores')
// SCOREBOARD
var ranking = document.querySelector('#logScores')
// START PAGE TO SCORE PAGE
var showScores = document.getElementById('scoreboard')
showScores.addEventListener('click', viewScores)

function viewScores() {
  showScores.setAttribute('style', 'display:none')
  timerShow.setAttribute('style', 'display:none')
  questPage.setAttribute('style', 'display:none')
  inputPage.setAttribute('style', 'display:none')
  frontPage.setAttribute('style', 'display:none')
  scorePage.setAttribute('style', 'display:block')
  a1a.remove()
  a1b.remove()
  a1c.remove()
  a1d.remove()
  a2a.remove()
  a2b.remove()
  a2c.remove()
  a2d.remove()
  a3a.remove()
  a3b.remove()
  a3c.remove()
  a3d.remove()
  a4a.remove()
  a4b.remove()
  a4c.remove()
  a4d.remove()
  a5a.remove()
  a5b.remove()
  a5c.remove()
  a5d.remove()
  clearInterval(myTimer);
}
var right = document.querySelector('.right')
function rightAns() {
  right.setAttribute('style', 'display:block;') // MAKE THE "CORRECT!" APPEAR
  setTimeout(function() {
  right.setAttribute('style', 'display:none;') // MAKE THE "CORRECT!" DISAPPEAR
}, 500);
}
// WRONG ANSWER TEXT DISPLAY
var wrong = document.querySelector('.wrong')
function wrongAns() {
  currentTime -= 10; // SUBTRACT TIMER BY 10 SECONDS
  wrong.setAttribute('style', 'display:block;') // MAKE THE "WRONG!" APPEAR
  setTimeout(function() {
  wrong.setAttribute('style', 'display:none;') // MAKE THE "WRONG!" DISAPPEAR
}, 500);
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
var a3a = document.createElement('button')
var a3b = document.createElement('button')
var a3c = document.createElement('button')
var a3d = document.createElement('button')
var a4a = document.createElement('button')
var a4b = document.createElement('button')
var a4c = document.createElement('button')
var a4d = document.createElement('button')
var a5a = document.createElement('button')
var a5b = document.createElement('button')
var a5c = document.createElement('button')
var a5d = document.createElement('button')
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
a1a.addEventListener('click', lvl1to2wrong)
a1b.addEventListener('click', lvl1to2wrong)
a1c.addEventListener('click', lvl1to2right)
a1d.addEventListener('click', lvl1to2wrong)

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
// WRONG ANSWER
function lvl1to2wrong () {
  setup1to2();
  wrongAns();
}
// RIGHT ANSWER
function lvl1to2right () {
  setup1to2();
  rightAns();
}
// LEVEL 2 TO LEVEL 3
a2a.addEventListener('click', lvl2to3wrong) 
a2b.addEventListener('click', lvl2to3right)
a2c.addEventListener('click', lvl2to3wrong)
a2d.addEventListener('click', lvl2to3wrong)

function setup2to3 () {
  quest.textContent = "Which of these values is not a value of the typeof statement?"
  a2a.remove()
  a2b.remove()
  a2c.remove()
  a2d.remove()
  questPage.appendChild(a3a)
  questPage.appendChild(a3b)
  questPage.appendChild(a3c)
  questPage.appendChild(a3d)
  a3a.textContent = "a. time"
  a3b.textContent = "b. string"
  a3c.textContent = "c. number"
  a3d.textContent = "d. boolean"
}

function lvl2to3wrong () {
  setup2to3();
  wrongAns();
}

function lvl2to3right () {
  setup2to3();
  rightAns();
}
// LEVEL 3 TO LEVEL 4
a3a.addEventListener('click', lvl3to4right)
a3b.addEventListener('click', lvl3to4wrong) 
a3c.addEventListener('click', lvl3to4wrong)
a3d.addEventListener('click', lvl3to4wrong)

function setup3to4() {
  quest.textContent = "Which of the following is not a variable declaration?"
  a3a.remove()
  a3b.remove()
  a3c.remove()
  a3d.remove()
  questPage.appendChild(a4a)
  questPage.appendChild(a4b)
  questPage.appendChild(a4c)
  questPage.appendChild(a4d)
  a4a.textContent = "a. var"
  a4b.textContent = "b. let"
  a4c.textContent = "c. const"
  a4d.textContent = "d. equal"
}

function lvl3to4wrong () {
  setup3to4();
  wrongAns();
}

function lvl3to4right () {
  setup3to4();
  rightAns();
}
// LEVEL 4 TO LEVEL 5
a4a.addEventListener('click', lvl4to5wrong) 
a4b.addEventListener('click', lvl4to5wrong)
a4c.addEventListener('click', lvl4to5wrong)
a4d.addEventListener('click', lvl4to5right)

function setup4to5() {
  quest.textContent = 'var hello = "2" + "2" - "2"; what would the console log show for the hello variable?'
  a4a.remove()
  a4b.remove()
  a4c.remove()
  a4d.remove()
  questPage.appendChild(a5a)
  questPage.appendChild(a5b)
  questPage.appendChild(a5c)
  questPage.appendChild(a5d)
  a5a.textContent = "a. 2"
  a5b.textContent = "b. 4"
  a5c.textContent = "c. 20"
  a5d.textContent = "d. -2"
}

function lvl4to5wrong () {
  setup4to5();
  wrongAns();
}

function lvl4to5right () {
  setup4to5();
  rightAns();
}
// LEVEL 5 TO INPUT PAGE
a5a.addEventListener('click', finishwrong) 
a5b.addEventListener('click', finishwrong)
a5c.addEventListener('click', finishright)
a5d.addEventListener('click', finishwrong)

function finish() {
  a5a.remove()
  a5b.remove()
  a5c.remove()
  a5d.remove()
  questPage.setAttribute('style', 'display:none')
  inputPage.setAttribute('style', 'display:block')
  clearInterval(myTimer);// TIMER STOP
  scoreValue.innerHTML = currentTime
}

function finishwrong () {
  wrongAns();
  finish();
}

function finishright () {
  rightAns();
  finish();
}
// RECORDING HIGH SCORE
var initials = document.querySelector('#initials') // INITIAL INPUT
var submit = document.querySelector('#submit') // ENTER BUTTON

submit.addEventListener('click', function(event) {
  event.preventDefault(); // TO STOP IT FROM RESETTING TO START PAGE
  showScores.setAttribute('style', 'display:none')
  timerShow.setAttribute('style', 'display:none')
  inputPage.setAttribute('style', 'display:none')
  scorePage.setAttribute('style', 'display:block')
  ranking.setAttribute('style', 'display:block')

  localStorage.setItem('name', initials.value)
  localStorage.setItem('pts', scoreValue.innerHTML)
  var setList = document.createElement('li')
  setList.innerText = initials.value + ' - ' + scoreValue.innerHTML // INITIAL INPUT & SCORE
  ranking.appendChild(setList)
})

function bringRecords() {
  var getPts = localStorage.getItem('pts')
  var getName = localStorage.getItem('name')
  var getList = document.createElement('li')
  getList.textContent = getName + ' - ' + getPts
  ranking.appendChild(getList)
}
if (localStorage.getItem('pts') !== null && localStorage.getItem('name') !== null) {
  bringRecords();
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

var clearScores = document.querySelector('#clear')
clearScores.addEventListener('click', function() {
  ranking.setAttribute('style', 'display:none')
  localStorage.clear()
})
// first proj

const button = document.querySelectorAll(".button");
// console.log(button);

const body = document.querySelector("body");
button.forEach(function (btn) {
  // console.log(buttonn);
  
  btn.addEventListener('click', function(e) {
    // console.log(e);
    // console.log(e.target)
    
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
     } 
     if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
     } 
     if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
     } 
     if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
     } 
  })
})

/*
HTML AND REST CSS DOWN HERE
https://stackblitz.com/edit/dom-project-chaiaurcode-ajqwm6y6?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html 
*/

// second proj


const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  }

  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    if (BMI <= 18.6) {
      results.innerHTML = `<span> Under Weight at ${BMI} </span>`;
    } else if (BMI <= 24.9 && BMI > 18.6) {
      results.innerHTML = `<span> Normal Weight at ${BMI} </span>`;
    } else results.innerHTML = `<span> Over Weight at ${BMI} </span>`;
  }
});


// third proj code 


document.addEventListener('DOMContentLoaded', function () {
  let randomNumber = parseInt(Math.random() * 100 + 1);

  const submit = document.querySelector('#subt');
  const userInput = document.querySelector('#guessField');
  const guessSlot = document.querySelector('.guesses');
  const remaining = document.querySelector('.lastResult');
  const lowOrhi = document.querySelector('.lowOrHi');
  const startOver = document.querySelector('.resultParas');

  const p = document.createElement('p');

  let prevGuess = [];
  let numguess = 1;

  let playGame = true;

  if (playGame) {
    submit.addEventListener('click', function (e) {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      validateGuess(guess);
    });
  }

  function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert('please enter a valid number');
    } else {
      prevGuess.push(guess);
      if (numguess === 11) {
        displayGuess(guess);
        displayMessage(`game over`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
  }

  function checkGuess(guess) {
    if (guess === randomNumber) {
      displayMessage(`You got it`);
      endGame();
    } else {
      displayMessage(`Try more`);
    }
  }

  function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}   `;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`;
  }

  function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
  }

  function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame" >Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }

  function newGame() {
    const newButton = document.querySelector('#newGame');
    newButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numguess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${10 - numguess}`;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      playGame = true;
    });
  }
});

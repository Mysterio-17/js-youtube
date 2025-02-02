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



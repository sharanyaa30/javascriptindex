# projects related to DOM

## Project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-jhnjqc8r?file=index.html)

# Solution code

## Project 1


``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'purple') {
      body.style.backgroundColor = event.target.id;
    }
  });
});


```
## Project 2 
```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if ('bmi' <= 18.6) results.innerHTML = ` Under weight ${bmi}`;
    else if (18.6 < 'bmi' <= 24.9) results.innerHTML = `Normal range ${bmi}`;
    else results.innerHTML = `over weight ${bmi}`;
    // results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

## project 3

```javascript
const clock = document.getElementById('clock');
// const clock =  document.querySelector('clock')

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());

  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4

```javascript
let random_num = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateguess(guess);
  });
}

function validateguess(guess) {
  // check whether between 1  to 100
  if (isNaN(guess)) {
    alert('please enter valid number');
  } else if (guess < 1) {
    alert('please enter number more than 1');
  } else if (guess > 100) {
    alert('please enter number less than 100');
  } else {
    prevguess.push(guess);
    if (numguess == 11) {
      displayguess(guess);
      displaymessage(`Game Over. Random number was ${random_num}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  // check whether the value is low or high or it is equal
  if (guess === random_num) {
    displaymessage(`you guessed it right`);
    endgame();
  } else if (guess < random_num) {
    displaymessage(`Number is too low`);
  } else if (guess > random_num) {
    displaymessage(`Number is too high`);
  }
}

function displayguess(guess) {
  //cleans value to input next value
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}

function displaymessage(message) {
  //prints message
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newgame">Start new game</h2>`;
  resultParas.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    random_num = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess} `;
    userInput.removeAttribute('disabled');
    resultParas.removeChild(p);
    playgame = true;
  });
}
```


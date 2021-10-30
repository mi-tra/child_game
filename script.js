'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Scrivi il numero';

    // player wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'HAI INDOVINATO!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Troppo piccolo..';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Hai perso :(';
      document.querySelector('.score').textContent = 0;
    }

    // too high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Troppo grande..';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Hai perso :(';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reset

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
  return false;
});

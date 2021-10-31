'use strict';

// definisco il numero segreto
let number = Math.trunc(Math.random() * 20) + 1;

// definisco il punteggio di partenza
let score = 20;

// definisco il punteggio massimo che assumerà via via risultati differenti
let highScore = 0;

// uso una funzione per far apparire il messaggio voluto
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// definisco la funzione che fa funzionare il bottone CONTROLLA
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // definisco cosa succede se non scrivo il numero
  if (!guess) {
    // definisco cosa succede richiamando la funzione di riga 10 non c'è alcun numero
    displayMessage('Scrivi il numero!');
    // definisco cosa succede se il numero scritto è uguale al numero segreto
  } else if (guess === number) {
    // definisco il messaggio da far apparire
    displayMessage('HAI INDOVINATO!');
    // definisco cosa scrivere nel campo grande del numero
    document.querySelector('.number').textContent = number;
    // definisco lo sfondo
    document.querySelector('body').style.backgroundColor = '#60b347';
    // definisco la larghezza del campo numero
    document.querySelector('.number').style.width = '30rem';
    // definisco il punteggio più alto
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // cosa scrivere se il numero scritto è diverso dal numero segreto
  } else if (guess !== number) {
    if (score > 1) {
      // il messaggio richiama la funzione di riga 10
      displayMessage(guess > number ? 'Troppo grande..' : 'Troppo piccolo..');
      // definisco il punteggio
      score--;
      document.querySelector('.score').textContent = score;
      // cosa succede quando ho finito i tentativi
    } else {
      // definisco il richiamo della funzione di riga 10
      displayMessage('Hai perso :(');
      // definisco il punteggio di perdita totale
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reset con bottone again
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.message').textContent = 'Indovina il numero!';
  displayMessage('Indovina il numero!');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

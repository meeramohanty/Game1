'use strict';
//Helps to catch coding mistakesmakes coder safer.
// console.log(document.querySelector('.message').textcontent);
// document.querySelector('.message').textContent = 'correct number🎊';
// //windows + . for emoji.
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
 
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

//handlig click eventslistner


let secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate a random number
let score = 20; // Initialize score
let highscore = 0; // Initialize highscore

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
  
}

// Event listener for the "check" button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = '❌ No number!';
   displayMessage('❌ No number!');


  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';


   if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent =highscore;
    
   }

   //when guess is wrong
 
  } else if(guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }


// //number is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     //number is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
  }
});

// Event listener for the "again" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

});


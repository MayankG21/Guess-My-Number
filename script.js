'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMsg = function (message) {
	document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
	let guess = Number(document.querySelector('.guess').value);

	//  When there is no input
	if (!guess) {
		displayMsg('⛔ N0 Number!');

		// When player wins
	} else if (guess === secretNumber) {
		displayMsg('🎉Correct Number!');
		document.querySelector('.number').textContent = secretNumber;
		if (score > highScore) {
			highScore = score;
		}
		document.querySelector('body').style.backgroundColor = '#60b345';
		document.querySelector('.number').style.width = '30rem';
		document.querySelector('.highscore').textContent = highScore;

		// When the guess is not equal to secret number
	} else if (guess !== secretNumber && score > 1) {
		displayMsg(guess < secretNumber ? '📉Too Low!' : '📈Too High!');
		score--;
		document.querySelector('.score').textContent = score;

		// When score becomes zero
	} else {
		displayMsg('🙁You Lost!');
		score--;
		document.querySelector('.score').textContent = score;
		document.querySelector('.number').textContent = secretNumber;
	}
});

document.querySelector('.again').addEventListener('click', function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	displayMsg('Start guessing...');
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').style.width = '15rem';
});

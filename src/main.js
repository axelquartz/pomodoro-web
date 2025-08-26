let time = document.querySelector('.time');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');

let timeLeft = 25;
let timerId = null; // A variable to hold the timer ID

function updateTimer() {
  time.textContent = timeLeft;
  timeLeft--;

  if (timeLeft < 0) {
    // Stop the timer when it reaches zero
    clearInterval(timerId);
    timerId = null; // Clear the timer ID
    time.textContent = 'Time\'s up!';
  }
}

startButton.addEventListener('click', function() {
  // Prevent multiple timers from starting
  if (timerId === null) {
    timerId = setInterval(updateTimer, 1000);
  }
});

resetButton.addEventListener('click', function() {
  // Clear the timer and reset the display
  clearInterval(timerId);
  timerId = null; // Clear the timer ID
  timeLeft = 25; // Reset the time
  time.textContent = timeLeft;
});
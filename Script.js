function validateTime(input) {
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timePattern.test(input);
}

const startInput = document.getElementById('start-time');
const endInput = document.getElementById('end-time');
const errorMsg = document.getElementById('error-msg');

function calculateTime() {
    if (!validateTime(startInput.value) || !validateTime(endInput.value)) {
        errorMsg.textContent = "Please enter valid times (HH:MM).";
        return;
    }
    errorMsg.textContent = "";
    // Rest of the calculation logic
}
let startTime = localStorage.getItem('startTime') || null;
let timerInterval;

function startTimer() {
  if (!startTime) {
    startTime = new Date().getTime();
    localStorage.setItem('startTime', startTime);
  }
  timerInterval = setInterval(updateTime, 1000);
}

function updateTime() {
  let currentTime = new Date().getTime();
  let elapsedTime = currentTime - startTime;
  // Update the stopwatch display with elapsedTime
}

function stopTimer() {
  clearInterval(timerInterval);
  localStorage.removeItem('startTime');
}

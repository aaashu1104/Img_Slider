const slideTrack = document.querySelector('.slide-track');
const playPauseBtn = document.getElementById('playPauseBtn');
const fasterBtn = document.getElementById('fasterBtn');
const slowerBtn = document.getElementById('slowerBtn');
const speedDisplay = document.getElementById('speedDisplay');

let isPaused = false;
let animationDuration = 40;

// Set initial animation duration
slideTrack.style.animationDuration = animationDuration + 's';

playPauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  slideTrack.style.animationPlayState = isPaused ? 'paused' : 'running';
  playPauseBtn.textContent = isPaused ? '▶️ Play' : '⏸️ Pause';
});

const updateSpeed = (change) => {
  animationDuration = Math.max(5, animationDuration + change);
  slideTrack.style.animationDuration = animationDuration + 's';
  speedDisplay.textContent = `Speed: ${animationDuration}s`;
};

fasterBtn.addEventListener('click', () => updateSpeed(-5));
slowerBtn.addEventListener('click', () => updateSpeed(5));

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    playPauseBtn.click();
  }
  if (e.key === 'ArrowUp') updateSpeed(-5);
  if (e.key === 'ArrowDown') updateSpeed(5);
});

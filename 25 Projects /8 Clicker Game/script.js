const gameArea = document.getElementById("gameArea");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const finalScore = document.getElementById("finalScore");

let score = 0;
let time = 30;
let gameRunning = false;
let timer;

// 🎨 Colors
const colors = [
  "#ef4444",
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ec4899",
  "#a855f7",
];

// Start Game
startBtn.addEventListener("click", () => {
  startGame();
});

restartBtn.addEventListener("click", () => {
  location.reload();
});

function startGame() {
  score = 0;
  time = 30;
  gameRunning = true;

  scoreEl.textContent = score;
  timeEl.textContent = time;
  finalScore.textContent = "";

  startBtn.classList.add("d-none");
  restartBtn.classList.remove("d-none");

  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
      endGame();
    }
  }, 1000);
}

// Click Logic
gameArea.addEventListener("click", (e) => {
  if (!gameRunning) return;

  score++;
  scoreEl.textContent = score;

  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.textContent = "+1";

  circle.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
  circle.style.left = `${e.offsetX - 25}px`;
  circle.style.top = `${e.offsetY - 25}px`;

  gameArea.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 800);
});

// End Game
function endGame() {
  clearInterval(timer);
  gameRunning = false;

  finalScore.innerHTML = `🏁 Game Over! Your Score: <span class="text-success">${score}</span>`;
}

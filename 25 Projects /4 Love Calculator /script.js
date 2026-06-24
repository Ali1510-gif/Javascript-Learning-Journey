const form = document.getElementById("loveForm");
const resultText = document.getElementById("resultText");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const boy = document.getElementById("Boy").value.trim();
  const girl = document.getElementById("Girl").value.trim();

  const l1 = boy.length;
  const l2 = girl.length;

  const result = Math.pow(l1 + l2, 3) % 101;

  let message = "";

  if (result > 80) message = "🔥 Perfect Match!";
  else if (result > 60) message = "💖 Strong Connection!";
  else if (result > 40) message = "😊 Good Compatibility!";
  else if (result > 20) message = "😅 Needs Effort!";
  else message = "💔 Not Compatible!";

  resultText.textContent = `Result: ${result}% — ${message}`;

  // animation
  resultText.classList.add("animate");
  setTimeout(() => resultText.classList.remove("animate"), 400);

  form.reset();
});

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

function updateClock() {
  const now = new Date();

  // Time
  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // Date
  const date = now.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  timeEl.textContent = time;
  dateEl.textContent = date;
}

// run immediately + every second
updateClock();
setInterval(updateClock, 1000);

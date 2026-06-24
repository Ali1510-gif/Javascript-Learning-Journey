const form = document.getElementById("quizForm");
const resultDiv = document.getElementById("result");
const progressBar = document.getElementById("progressBar");
const restartBtn = document.getElementById("restartBtn");

const answers = {
    q1: "Sachin Tendulkar",
    q2: "West Indies",
    q3: "Sachin Tendulkar",
    q4: "264",
    q5: "Muttiah Muralitharan"
};

// Update progress bar
form.addEventListener("change", () => {
    const total = 5;
    const answered = new FormData(form);
    const progress = (Array.from(answered).length / total) * 100;
    progressBar.style.width = progress + "%";
});

// Submit quiz
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;
    const data = new FormData(form);

    for (let [key, value] of data.entries()) {
        if (answers[key] === value) {
            score++;
        }
    }

    // Result message
    let message = "";
    if (score === 5) {
        message = "🔥 Perfect Score!";
        resultDiv.className = "correct";
    } else if (score >= 3) {
        message = "👍 Good Job!";
        resultDiv.className = "correct";
    } else {
        message = "😅 Keep Practicing!";
        resultDiv.className = "wrong";
    }

    resultDiv.innerHTML = `${message}<br>Your Score: ${score}/5`;

    restartBtn.classList.remove("d-none");
});

// Restart quiz
restartBtn.addEventListener("click", () => {
    form.reset();
    resultDiv.innerHTML = "";
    progressBar.style.width = "0%";
    restartBtn.classList.add("d-none");
});

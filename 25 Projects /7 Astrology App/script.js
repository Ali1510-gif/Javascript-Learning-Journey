// ===== DATA =====

const compliments = [
  "You have a great sense of humor.",
  "Your smile lights up the room.",
  "You bring out the best in people.",
  "You're incredibly thoughtful.",
  "You have a heart of gold.",
  "Your creativity is inspiring.",
  "You're a problem-solver.",
  "Your kindness is contagious.",
  "You connect deeply with others.",
  "You're knowledgeable.",
  "Your determination is admirable.",
  "You're a great listener.",
  "You make the world better.",
  "Your positivity is infectious.",
  "You notice details.",
  "You're always helpful.",
  "You have leadership skills.",
  "Your courage inspires.",
  "You're an amazing friend.",
  "Your perspective is unique.",
  "Your energy uplifts.",
  "You're resourceful.",
  "You communicate well.",
  "You're a ray of sunshine.",
  "Your hard work shows.",
  "You're reliable.",
  "You have great style.",
  "Your confidence inspires.",
  "You're a mentor.",
  "Your dedication is strong.",
  "You make people feel valued.",
];

const victimCardCompliments = [
  "You give a lot but receive less.",
  "Your efforts go unnoticed.",
  "You sacrifice for others.",
  "You care deeply.",
  "You forgive easily.",
  "You stand by people.",
  "You handle pressure quietly.",
  "You give love selflessly.",
  "You stay honest.",
  "You help even without thanks.",
  "You are always there for others.",
  "You trust people easily.",
  "You stay kind in tough times.",
  "You stay patient.",
  "You support others silently.",
  "You work hard silently.",
  "You give your best always.",
  "You remain strong.",
  "You stay hopeful.",
  "You keep going.",
];

const recommendations = [
  "Help someone today.",
  "Spend time with family.",
  "Exercise daily.",
  "Read something inspiring.",
  "Practice gratitude.",
  "Drink more water.",
  "Meditate.",
  "Learn something new.",
  "Disconnect from social media.",
  "Spend time in nature.",
  "Be kind.",
  "Organize your space.",
  "Call a friend.",
  "Save money.",
  "Start journaling.",
  "Support local business.",
  "Smile more.",
  "Practice patience.",
  "Do something creative.",
  "Stay consistent.",
  "Focus on growth.",
  "Build discipline.",
  "Take breaks.",
  "Stay positive.",
  "Avoid negativity.",
  "Work on goals.",
  "Improve communication.",
  "Stay humble.",
  "Be confident.",
  "Trust the process.",
];

const predictions = [
  "Big success is coming.",
  "Your career will grow.",
  "A surprise awaits you.",
  "You will achieve your dreams.",
  "Opportunity is near.",
  "Happiness is coming.",
  "Financial growth ahead.",
  "New connections will help.",
  "Travel soon.",
  "Good news is coming.",
  "Efforts will pay off.",
  "You will shine.",
  "Something exciting ahead.",
  "You will win big.",
  "Future is bright.",
  "Stability is coming.",
  "Breakthrough is near.",
  "You will inspire others.",
  "Your time is coming.",
  "You will succeed.",
];

// ===== ZODIAC FUNCTION =====

function getZodiacSign(day, month) {
  if ((day >= 21 && month === 3) || (day <= 19 && month === 4))
    return "Aries ♈";
  if ((day >= 20 && month === 4) || (day <= 20 && month === 5))
    return "Taurus ♉";
  if ((day >= 21 && month === 5) || (day <= 20 && month === 6))
    return "Gemini ♊";
  if ((day >= 21 && month === 6) || (day <= 22 && month === 7))
    return "Cancer ♋";
  if ((day >= 23 && month === 7) || (day <= 22 && month === 8)) return "Leo ♌";
  if ((day >= 23 && month === 8) || (day <= 22 && month === 9))
    return "Virgo ♍";
  if ((day >= 23 && month === 9) || (day <= 22 && month === 10))
    return "Libra ♎";
  if ((day >= 23 && month === 10) || (day <= 21 && month === 11))
    return "Scorpio ♏";
  if ((day >= 22 && month === 11) || (day <= 21 && month === 12))
    return "Sagittarius ♐";
  if ((day >= 22 && month === 12) || (day <= 19 && month === 1))
    return "Capricorn ♑";
  if ((day >= 20 && month === 1) || (day <= 18 && month === 2))
    return "Aquarius ♒";
  return "Pisces ♓";
}

// ===== MAIN LOGIC =====

const form = document.getElementById("astroForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  if (day > 31 || month > 12) {
    resultDiv.innerHTML = `<span class="text-danger">Invalid Date</span>`;
    return;
  }

  const zodiac = getZodiacSign(day, month);

  const text = `
        <h5 class="text-info">${zodiac}</h5>
        <p><strong>Hi ${name} ${surname} 👋</strong></p>
        <p>🌟 ${compliments[day - 1]}</p>
        <p>💭 ${victimCardCompliments[year % 20]}</p>
        <p>🌱 ${recommendations[(day * month) % 30]}</p>
        <p>🚀 ${predictions[(name.length * surname.length) % 20]}</p>
    `;

  resultDiv.classList.remove("show");

  setTimeout(() => {
    resultDiv.innerHTML = text;
    resultDiv.classList.add("show");
  }, 100);
});

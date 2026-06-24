const parent = document.getElementById("parent");
const body = document.body;

parent.addEventListener("click", (e) => {
  const button = e.target;

  // prevent clicking empty space
  if (!button.classList.contains("color-btn")) return;

  const color = button.getAttribute("data-color");

  body.style.backgroundColor = color;
});

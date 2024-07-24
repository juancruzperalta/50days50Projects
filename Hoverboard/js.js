const SQUARE = 500;
const container = document.querySelector(".container");
const COLORS = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

function createSquare() {
  for (let i = 0; i < SQUARE; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseenter", (e) => {
      div.classList.add("colorTransition");
      div.style.backgroundColor =
        COLORS[Math.floor(Math.random() * COLORS.length)];
    });
    div.addEventListener("mouseleave", (e) => {
      setTimeout(() => {
        div.style.backgroundColor = "";
      }, 1000);
    });
    container.appendChild(div);
  }
}
createSquare();

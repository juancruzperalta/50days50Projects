const $textInput = document.getElementById("textareaInput");
const $completP = document.getElementById("completP");

$textInput.addEventListener("keyup", (e) => {
  $completP.innerText = e.target.value;
  $completP.style.background = "#f0932b";
  if (e.key === "Enter") {
    setInterval(() => {
      $completP.style.background = randomColor();
    }, 50);
  }
});

const randomColor = () => {
  const colors = ["#273c75", "#f0932b"];

  // Selecciona un color aleatoriamente de la lista
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];

  return randomColor;
};

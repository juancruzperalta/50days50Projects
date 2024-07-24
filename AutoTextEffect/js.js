const $text = document.querySelector(".text");

let textWrite = "We Love Programming!";
let valor = 1;
let speed = document.querySelector("#speed");
speed.value = 1;
let velocidad = 300 / speed.value;
mostrarValorPantalla();
function mostrarValorPantalla() {
  $text.textContent = textWrite.slice(0, valor);
  valor++;
  if (valor > textWrite.length) {
    valor = 1;
  }
  setTimeout(mostrarValorPantalla, velocidad);
}
speed.addEventListener("input", (e) => (velocidad = 300 / e.target.value));

const tachoLleno = document.querySelectorAll(".tachoLlenado");
const $porcentaje = document.querySelector(".porcentaje");
const $litros = document.querySelector(".litros");
let total = 2;
let suma = 0;
let porcentajeSuma = 0;
$litros.textContent = 2 + "L";
tachoLleno.forEach((el) => {
  el.addEventListener("click", (e) => {
    let text = el.textContent;

    const numeros = text.match(/\d+/g);
    if (total < 2000) {
      suma = numeros ? numeros.reduce((acc, num) => acc + parseInt(num), 0) : 0;
    }
    let boolean = el.classList.toggle("active");
    if (!boolean) {
      total += suma / 1000;
      $litros.textContent = total + "L";
      porcentajeSuma -= 42;
      $porcentaje.style.height = `${porcentajeSuma}px`;
      y;
    } else {
      total -= suma / 1000;
      porcentajeSuma += 42;
      $litros.textContent = total + "L";
      $porcentaje.style.height = `${porcentajeSuma}px`;
    }
  });
});

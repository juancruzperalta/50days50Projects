const $imgFondo = document.querySelector("#imgFondo");
const $loading = document.querySelector("#loading");

document.addEventListener("DOMContentLoaded", () => {
  let valor = 0;
  let blur = 100;
  let intervalo;
  console.log($imgFondo.style.filter);
  function valorDeterminado() {
    valor++;
    blur--;
    $loading.textContent = valor + "%";
    console.log(valor);
    $imgFondo.style.filter = `blur(${blur}px)`;
    if (valor > 99 && blur < 100) {
      clearInterval(intervalo);
      $loading.textContent = "";
    }
  }
  intervalo = setInterval(valorDeterminado, 20);
});

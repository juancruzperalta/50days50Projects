const imageActive = document.querySelector("#activeImage");
const imagenes = document.querySelectorAll(".panel-image img");
const listTools = document.querySelectorAll(".tools");

listTools.forEach((el, idx) =>
  el.addEventListener("click", (e) => {
    ocultarElementos();
    el.classList.add("active");
    ocultarImages();
    imagenes[idx].classList.add("activeÏmage");
    imagenes[idx].classList.remove("content");
  })
);

function ocultarElementos() {
  listTools.forEach((el) => el.classList.remove("active"));
}
function ocultarImages() {
  imagenes.forEach((el) => el.classList.remove("activeImage"));
  imagenes.forEach((el) => el.classList.add("content"));
}

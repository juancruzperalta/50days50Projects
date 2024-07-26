const button = document.querySelector(".hero-button-nav");
const blackMenu = document.querySelector("#black-menu");
const redMenu = document.querySelector("#red-menu");
const whiteMenu = document.querySelector("#white-menu");
const closeMenu = document.querySelector(".close-menu");
button.addEventListener("click", (e) => {
  blackMenu.classList.add("active");
  redMenu.classList.add("active");
  whiteMenu.classList.add("active");
});
closeMenu.addEventListener("click", (e) => {
  blackMenu.classList.remove("active");
  redMenu.classList.remove("active");
  whiteMenu.classList.remove("active");
});

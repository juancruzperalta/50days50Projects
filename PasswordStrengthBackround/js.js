const imagenFondo = document.querySelector(".background"),
  inputPassword = document.querySelector("#password");
let count = 20;
inputPassword.addEventListener("keydown", (e) => {
  count--;
  count--;
  imagenFondo.style.filter = `blur(${count}px)`;
});

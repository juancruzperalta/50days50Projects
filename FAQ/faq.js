const btn = document.querySelectorAll(".btn-close");

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});

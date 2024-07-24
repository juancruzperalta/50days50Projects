const $button = document.querySelector("button");
const svg = document.querySelectorAll("button svg");
const nav = document.querySelector("nav");

$button.addEventListener("click", () => {
  svg.forEach((el) => {
    if (el.classList.contains("none")) {
      el.classList.remove("none");
      el.classList.add("active");
      nav.classList.remove("active");
    } else {
      el.classList.add("none");
      nav.classList.add("active");
      el.classList.remove("active");
    }
  });
});

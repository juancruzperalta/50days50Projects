const $heroDog = document.querySelector(".hero-dog");
const $open = document.querySelector(".open");
const $nav = document.querySelectorAll(".navLi");

$open.addEventListener("click", () => {
  if ($heroDog.classList.contains("active")) {
    $heroDog.classList.remove("active");
    $open.classList.remove("active");
    $nav.forEach((el) => el.classList.remove("active"));
  } else {
    $heroDog.classList.add("active");
    $open.classList.add("active");
    $nav.forEach((el) => el.classList.add("active"));
  }
});

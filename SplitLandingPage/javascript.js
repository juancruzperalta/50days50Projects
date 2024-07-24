const $right = document.querySelector("#right");
const $left = document.querySelector("#left");

$right.addEventListener("mouseenter", () => {
  $right.classList.add("split-hover");
  $left.classList.add("split-other");
});
$right.addEventListener("mouseleave", () => {
  $right.classList.remove("split-hover");
  $left.classList.remove("split-other");
});
$left.addEventListener("mouseenter", () => {
  $right.classList.add("split-other");
  $left.classList.add("split-hover");
});
$left.addEventListener("mouseleave", () => {
  $left.classList.remove("split-hover");
  $right.classList.remove("split-other");
});

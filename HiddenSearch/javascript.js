const $btnSearch = document.querySelector(".btn-search");
const $inputSearch = document.querySelector(".input-search");

$btnSearch.addEventListener("click", () => {
  $inputSearch.classList.toggle("active");
  $btnSearch.classList.toggle("btnActive");
});

const $inputGood = document.querySelector("#inputGood"),
  $inputCheap = document.querySelector("#inputCheap"),
  $inputFast = document.querySelector("#inputFast"),
  input = document.querySelectorAll("input");

input.forEach((el) =>
  el.addEventListener("change", (e) => changeGoodCheapFast(e.target))
);
function changeGoodCheapFast(e) {
  if ($inputGood.checked && $inputCheap.checked && $inputFast.checked) {
    if ($inputGood === e) {
      $inputFast.checked = false;
    }
    if ($inputCheap === e) {
      $inputGood.checked = false;
    }
    if ($inputFast === e) {
      $inputCheap.checked = false;
    }
  }
}

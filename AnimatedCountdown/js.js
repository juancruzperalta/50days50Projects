const $number = document.querySelector(".number");

let value = 3;

function countdown() {
  console.log();
  const spanNumber = document.createElement("span");
  spanNumber.classList.add("spanNumber");
  spanNumber.textContent = value;
  let interval = setInterval(() => {
    value--;
    spanNumber.innerHTML = value;
    if (value == 0) {
      clearInterval(interval);
    }
  }, 1000);
  $number.appendChild(spanNumber);
}
countdown();

const range = document.querySelector("#range");
const inputRange = document.querySelector("#input-range");
range.style.left = `125px`;
inputRange.addEventListener("input", (e) => {
  range.innerHTML = `${e.target.value}`;
  let left = `${e.target.value}`;
  if (left > 50) {
    range.style.left = `${left - 15}%`;
  } else {
    range.style.left = `${left - 5}%`;
  }
});

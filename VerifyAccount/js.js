const input = document.querySelectorAll(".number");
input[0].focus();
input.forEach((el, idx) =>
  el.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      input[idx].value = "";
      setTimeout(() => {
        input[idx + 1].focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => {
        input[idx - 1].focus();
      }, 10);
    }
  })
);

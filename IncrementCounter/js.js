const $counters = document.querySelectorAll("[data-target]");

document.addEventListener("DOMContentLoaded", (e) => {
  $counters.forEach((el) => {
    const updateFor = () => {
      let counter = el.getAttribute("data-target");
      let text = +el.innerText;

      if (text < counter) {
        el.innerText = `${Math.ceil(text + 10)}`;
        setTimeout(updateFor, 1);
      } else {
        text.innerText = counter;
      }
    };
    updateFor();
  });
});

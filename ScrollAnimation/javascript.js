const $contentBox = document.getElementById("contentBox");
const $box = document.querySelectorAll("#box");
window.addEventListener("scroll", () => {
  $box.forEach((el) => {
    let elem = el.getBoundingClientRect().top;
    const triggerBottom = (window.innerHeight / 5) * 4;
    if (el.getBoundingClientRect().top > 400) {
      if (elem < triggerBottom) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    }
  });
});

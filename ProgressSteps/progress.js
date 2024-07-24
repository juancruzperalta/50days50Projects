const progress = document.querySelector(".progress");
const prev = document.getElementById("btn-Prev");
const next = document.getElementById("btn-Next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  actualizo();
});

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  actualizo();
});

function actualizo() {
  circles.forEach((elem, idx) => {
    if (idx < currentActive) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  });

  const activos = document.querySelectorAll(".active");

  progress.style.width =
    ((activos.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive > circles.length - 1) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}

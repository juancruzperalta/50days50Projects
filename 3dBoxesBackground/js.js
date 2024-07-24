const button = document.querySelector("button"),
  container = document.querySelector(".container-box"),
  box = document.querySelectorAll(".box");
button.addEventListener("click", (e) => {
  if (container.classList.contains("container-box")) {
    container.classList.add("container-box-big");
    container.classList.remove("container-box");
    box.forEach((el) => (el.style.rotate = "360deg"));
  } else {
    container.classList.remove("container-box-big");
    container.classList.add("container-box");
    box.forEach((el) => (el.style.rotate = "-360deg"));
  }
});

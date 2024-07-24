const button = document.querySelectorAll("button");

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    const x = e.pageX;
    const y = e.pageY;

    const circle = document.createElement("span");
    circle.classList.add("clickCircle");
    circle.style.top = y + "px";
    circle.style.left = x + "px";
    button.appendChild(circle);
  });
});

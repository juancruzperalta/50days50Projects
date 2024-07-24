document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const d = document,
    decrement = d.querySelector("#decrement"),
    value = d.querySelector("#value"),
    increment = d.querySelector("#increment"),
    color = d.querySelector("#color"),
    clear = d.querySelector("#clear");

  let valor = 0;

  decrement.addEventListener("click", (e) => {
    if (valor >= 5) {
      valor -= 5;
    } else {
      valor = 0;
    }
    ctx.lineWidth = valor;
    value.textContent = valor;
  });
  increment.addEventListener("click", (e) => {
    if (valor < 50) {
      valor += 5;
    } else {
      valor = 50;
    }
    ctx.lineWidth = valor;

    value.textContent = valor;
  });

  let drawing = false;

  ctx.strokeStyle = color.value;
  color.addEventListener("input", function () {
    ctx.strokeStyle = color.value;
  });

  canvas.addEventListener("mousedown", function (e) {
    drawing = true;
    ctx.beginPath();
    x = e.offsetX;
    y = e.offsetY;
    ctx.moveTo(x, y);
  });

  canvas.addEventListener("mousemove", function (e) {
    if (drawing) {
      x = e.offsetX;
      y = e.offsetY;
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  });

  canvas.addEventListener("mouseup", function () {
    drawing = false;
  });

  canvas.addEventListener("mouseleave", function () {
    drawing = false;
  });

  clear.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
});

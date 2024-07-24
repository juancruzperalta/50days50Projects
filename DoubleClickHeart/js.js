const d = document;
$imgClick = d.querySelector(".img-hero");
$countingClick = d.querySelector("#countingClick");
let clickImage = 0;
$imgClick.addEventListener("dblclick", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  clickImage++;
  $countingClick.textContent = clickImage;
  const el = document.createElement("i");
  el.classList.add("heart");
  el.style.left = `${xInside}px`;
  el.style.top = `${yInside}px`;
  setTimeout(() => {
    el.remove();
  }, 500);
  console.log(xInside, yInside);
  $imgClick.appendChild(el);
});

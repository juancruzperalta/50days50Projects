const fill = document.querySelector(".fill"),
  empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
console.log(dragOver, dragEnter, dragLeave, dragDrop);

function dragStart() {
  this.classList.add("fondoBlack");
}
function dragEnd() {
  this.className = "fill";
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.classList.add("fondoBlack");
}
function dragLeave() {
  this.classList.remove("fondoBlack");
  // console.log("voy cayendo correcto");
}
function dragDrop() {
  this.classList.add("fondoBlack");
  this.append(fill);
}

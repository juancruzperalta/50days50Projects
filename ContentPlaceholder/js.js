const d = document,
  cardImage = d.querySelector(".card-image"),
  titleComments = d.querySelector("#titleComments"),
  parrafComments = d.querySelector("#parrafComments"),
  authorImage = d.querySelector(".card-image-author"),
  authorName = d.querySelector("#author-name"),
  authorBirthday = d.querySelector("#author-birthday"),
  animatedBg = d.querySelectorAll(".animated-bg"),
  animtedBgText = d.querySelectorAll(".animated-bg-text");
setTimeout(obtenerDatos, 2500);

function obtenerDatos() {
  cardImage.innerHTML =
    "<img src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'/>";
  titleComments.innerHTML = "Lorem ipsum";
  parrafComments.innerHTML =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat sed, dolorum itaque consequatur iure cum.";
  authorImage.innerHTML =
    "<img src='https://randomuser.me/api/portraits/men/45.jpg'/>";
  authorName.innerHTML = "John Doe";
  authorBirthday.innerHTML = "Oct 08, 2020";
  animatedBg.forEach((el) => el.classList.remove("animated-bg"));
  animtedBgText.forEach((el) => el.classList.remove("animated-bg-text"));
}

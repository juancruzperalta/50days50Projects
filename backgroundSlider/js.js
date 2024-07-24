const d = document,
  $slides = d.querySelectorAll(".slide"),
  $buttonNext = d.querySelector(".next"),
  $buttonPrev = d.querySelector(".prev"),
  body = d.querySelector("body");

let valorSlide = 0;
$buttonNext.addEventListener("click", (e) => {
  valorSlide++;

  if (valorSlide > $slides.length - 1) {
    valorSlide = 0;
  }

  postearImagenBody();
  cargarSlides();
});

$buttonPrev.addEventListener("click", (e) => {
  valorSlide--;

  if (valorSlide < 0) {
    valorSlide = $slides.length - 1;
  }

  postearImagenBody();
  cargarSlides();
});
postearImagenBody();
function postearImagenBody() {
  body.style.backgroundImage = $slides[valorSlide].style.backgroundImage;
}
function cargarSlides() {
  $slides.forEach((slide) => slide.classList.remove("active"));

  $slides[valorSlide].classList.add("active");
}

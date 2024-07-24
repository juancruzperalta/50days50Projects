const buttonPrev = document.querySelector("#prev"),
  buttonNext = document.querySelector("#next"),
  images = document.querySelectorAll("div img"),
  imageCarousel = document.querySelector("#images-carousel");
let imagesSlides = 0;

setInterval(() => {
  imagesSlides++;
  if (imagesSlides > images.length - 1) {
    imagesSlides = 0;
  }
  viewImages(imagesSlides);
}, 5000);
buttonNext.addEventListener("click", (e) => {
  imagesSlides++;
  if (imagesSlides > images.length - 1) {
    imagesSlides = 0;
  }
  viewImages(imagesSlides);
});
buttonPrev.addEventListener("click", (e) => {
  imagesSlides--;
  if (imagesSlides < 0) {
    imagesSlides = images.length - 1;
  }
  viewImages(imagesSlides);
});

function viewImages(imagesSlides) {
  images.forEach((el) => el.classList.remove("active"));
  imageCarousel.style.transform = `translateX(${-imagesSlides * 500}px)`;
}

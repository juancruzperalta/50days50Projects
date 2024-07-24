const arrowUp = document.querySelector("#arrowUp"),
  arrowDown = document.querySelector("#arrowDown"),
  slidesRight = document.querySelectorAll("#slider-right div"),
  leftSlides = document.querySelectorAll("#left-slides div");
let valorSlide = 0;
//slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

arrowUp.addEventListener("click", (e) => changeSlide("up"));
arrowDown.addEventListener("click", (e) => changeSlide("down"));

const changeSlide = (direc) => {
  if (direc === "up") {
    valorSlide++;
    if (valorSlide > slidesRight.length - 1) {
      valorSlide = 0;
    }
  } else if (direc === "down") {
    valorSlide--;
    if (valorSlide < 0) {
      valorSlide = slidesRight.length - 1;
    }
  }

  slidesRight.forEach((el) => el.classList.remove("active"));
  leftSlides.forEach((el) => el.classList.remove("activeLeft"));

  leftSlides[valorSlide].classList.add("activeLeft");
  leftSlides[valorSlide].style.transform = `translateY(0)`;
  slidesRight[valorSlide].classList.add("active");
  slidesRight[valorSlide].style.transform = `translateY(-${
    valorSlide * 100
  }vh)`;
};

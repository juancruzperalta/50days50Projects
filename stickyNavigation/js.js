const d = document,
  w = window,
  heroNav = d.querySelector(".hero-nav");

w.addEventListener("scroll", (e) => {
  let altura = w.innerHeight * 0.5;

  console.log(altura);
  if (w.scrollY > altura) {
    heroNav.classList.add("activeNew");
  } else {
    heroNav.classList.remove("activeNew");
  }
});

const API_URL = "https://randomuser.me/api?results=50";
let results = [];
const resultadosVista = document.querySelector(".result");
const inputSearch = document.querySelector("#search");
getData();
function getData() {
  fetch(`${API_URL}`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      data.results.forEach((user) => {
        const li = document.createElement("li");
        li.classList.add("li-user");
        results.push(li);
        li.innerHTML = `
          <img src="${user.picture.medium}" class="logo-user">
          <div class="info-user">
            <p class="name-user">${user.name.first} ${user.name.last}</p>
            <p class="city-user">${user.location.city}</p>
          </div>
        `;
        resultadosVista.appendChild(li);
      });
    })
    .catch((err) => console.log(err));
}

inputSearch.addEventListener("input", (e) =>
  filtrarPorBusqueda(e.target.value)
);

function filtrarPorBusqueda(value) {
  results.forEach((res) => {
    if (res.innerText.toLowerCase().includes(value.toLowerCase())) {
      res.classList.remove("hide");
    } else {
      res.classList.add("hide");
    }
  });
}

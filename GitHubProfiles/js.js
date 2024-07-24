const $input = document.querySelector("#search");
const $form = document.querySelector("form");
const $infoData = document.querySelector("#userData");
let url = "https://api.github.com/users/";

$form.addEventListener("submit", (e) => {
  e.preventDefault();
});

$input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    userData($input.value);
  }
});

function userData(user) {
  fetch(`${url}${user}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      $infoData.style.display = "flex";
      $infoData.innerHTML = `
      <img src ="${data.avatar_url}" />
      <div class="div-data">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
      <div class="follow-info">
      <span>${data.followers} <strong>Followers</strong></span>
      <span>${data.following}<strong>Following</strong></span>
      <span>${data.public_repos}<strong>Repos</strong></span>
      </div>
          <div>
          </div>
        
        </div>
        `;
    })
    .catch((err) => {
      console.log(err);
      let message = `Error ${err.statusText} || "Ocurrió un error"`;
      $infoData.innerHTML = `${message} : ${err.status}`;
    });
}

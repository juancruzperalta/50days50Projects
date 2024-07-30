const containerImage = document.querySelector(".container-image");
const API_URL = `https://picsum.photos/200`;
for (let i = 0; i < 200; i++) {
  obtenerImages();
}
function obtenerImages() {
  fetch(`${API_URL}`)
    .then((res) => (res.ok ? res.blob() : Promise.reject(res)))
    .then((data) => {
      const img = document.createElement("img");

      const imgUrl = URL.createObjectURL(data);
      img.src = `${imgUrl}`;

      containerImage.appendChild(img);
    })
    .catch((err) => console.log(err));
}

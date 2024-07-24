const buttonNotificacion = document.querySelector("#searchNotification");
const noticationMessage = document.querySelector("#notificationMessage");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];
buttonNotificacion.addEventListener("click", (e) => {
  crearNotificacion();
});
function crearNotificacion(message = null, type = null) {
  noticationMessage.classList.add("active");
  elementNew = document.createElement("div");
  elementNew.classList.add("notificationView");
  elementNew.classList.add(type ? type : randomType());
  elementNew.innerText = `${randomMessage()}`;
  noticationMessage.appendChild(message ? message : elementNew);
  setTimeout(() => {
    elementNew.remove();
  }, 3000);
}
function randomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function randomType() {
  return types[Math.floor(Math.random() * types.length)];
}

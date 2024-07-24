const generatePass = document.querySelector("#generatePass");
const passwordGen = document.querySelector("#password-generate");
const passwordLength = document.querySelector("#passwordLength");
const uppercaseSelect = document.querySelector("#uppercase");
const lowercaseSelect = document.querySelector("#lowercase");
const numbersSelect = document.querySelector("#numbers");
const symbolsSelect = document.querySelector("#symbols");
passwordLength.value = 20;
let valor = 20;

const letraAleatoria =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.,?¡°!~*>-)(=#$%&;:";
generatePass.addEventListener("click", (e) => {
  let result = "";
  for (let i = 0; i < valor; i++) {
    result += letraAleatoria.charAt(
      Math.floor(Math.random() * letraAleatoria.length)
    );
  }

  let upperCaseTrue = uppercaseSelect.checked == true,
    lowerCaseTrue = lowercaseSelect.checked == true,
    numbersTrue = numbersSelect.checked == true,
    symbolsTrue = symbolsSelect.checked == true;

  if (upperCaseTrue && !lowerCaseTrue) {
    result = result.toLocaleUpperCase();
  } else if (!upperCaseTrue && lowerCaseTrue) {
    result = result.toLocaleLowerCase();
  } else if (!lowerCaseTrue && !upperCaseTrue && numbersTrue) {
    result = result.replace(/[a-zA-Z]/g, () => Math.floor(Math.random() * 10));
  } else if (!numbersTrue) {
    result = result.replace(
      /[0-9]/g,
      letraAleatoria.charAt(Math.floor(Math.random() * letraAleatoria.length))
    );
  } else if (!symbolsTrue) {
    result = result.replace(/[_.,?¡¡°!~*>\-\)\(=#%&$]/g, "");
  }

  passwordGen.textContent = result;
});

passwordLength.addEventListener("input", (e) => (valor = passwordLength.value));

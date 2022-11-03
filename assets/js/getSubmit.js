const buttonSubmit = document.querySelector("form button");
const inputSubmit = document.querySelector("form input");
console.log(buttonSubmit);
console.log(inputSubmit);

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputSubmit.value === "") {
    alert("por favor ensira um email");
  } else {
    buttonSubmit.innerHTML === "email enviado";
  }
});

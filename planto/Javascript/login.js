const form = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  if (username === "") {
    showError(usernameInput, "Username is required.");
  } else {
    showSuccess(usernameInput);
  }
  
  if (password === "") {
    showError(passwordInput, "Password is required.");
  } else {
    showSuccess(passwordInput);
  }
  
  // Perform login logic here
});

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const errorMessage = formControl.querySelector("small");
  errorMessage.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
}

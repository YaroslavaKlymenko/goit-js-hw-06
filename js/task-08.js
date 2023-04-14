const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password }
   = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }  

console.log(`Email: ${email.value}, Password: ${password.value}`);
event.currentTarget.reset();
}
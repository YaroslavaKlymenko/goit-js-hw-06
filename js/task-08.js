const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { elements } = event.target; 
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (email === "" || password === "") {
    alert('Please fill in all the fields!');
    return;
  }  

  const loginData = { email, password }; 

  console.log(loginData);
  event.target.reset();
}
const form = document.querySelector(".login-form");
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert('all areas should be fulled');
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

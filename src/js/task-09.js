function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// okay lets rock
// so
// let it be the name of const color...
const color = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');
function myFn(heh, mda) {
  let a = getRandomHexColor();
  span.textContent = a;
  color.style.color = a;
  console.log('click');
}
button.addEventListener('click', myFn)
console.log(button);
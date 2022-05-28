let counterValue = 0;
const span4ik = document.getElementById('value') 
const buttonInc = document.querySelector('[data-action="increment"]');
const buttonDec = document.querySelector('[data-action="decrement"]');
buttonInc.addEventListener("click", () => {
    counterValue+=1;
    span4ik.innerText = counterValue;
  });
buttonDec.addEventListener("click", () => {
    counterValue-=1;
    span4ik.innerText = counterValue;
});

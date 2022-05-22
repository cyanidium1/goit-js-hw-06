const input = document.querySelector('#validation-input');
let a;
input.addEventListener('input', event => a = event.currentTarget.value);
// if (a.length < parseInt(input.dataset.length)) {
//     input.id = 'validation-input.invalid'
// }
// else {input.id = 'validation-input.valid'}
console.log(a.length);
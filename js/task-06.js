const input = document.querySelector('#validation-input');
const maxLen = input.dataset.length*1;
input.addEventListener('blur', () => {
    if (input.value.length === maxLen) {
        input.classList.remove('invalid');
        input.classList.add('valid')
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid')
    }
}
)


const text = document.querySelector('#text');
const kek = document.querySelector('#font-size-control')
addEventListener('input', () => {
    text.style.fontSize = Number(kek.value)+'px';
})
const kek = document.getElementById('categories')
console.log(`Number of categories: ${kek.querySelectorAll(".item").length}`);
for (let i = 1; i < 6; i+=2) {
    console.log(`\n Category: ${kek.childNodes[i].childNodes[1].textContent} \n Elements: ${kek.childNodes[i].childNodes[3].querySelectorAll('li').length}`);
}

// console.log(`\n Category: ${kek.childNodes[3].childNodes[1].textContent} \n Elements: ${kek.childNodes[3].childNodes[3].querySelectorAll('li').length}`);
// console.log(`\n Category: ${kek.childNodes[5].childNodes[1].textContent} \n Elements: ${kek.childNodes[5].childNodes[3].querySelectorAll('li').length}`);

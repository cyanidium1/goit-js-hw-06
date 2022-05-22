const kek = document.getElementById('categories')
console.log(`Number of categories: ${kek.querySelectorAll(".item").length}`);
console.log(`\n Category: ${kek.childNodes[1].childNodes[1].textContent} \n Elements: ${kek.childNodes[1].childNodes[3].querySelectorAll('li').length}`);
console.log(`\n Category: ${kek.childNodes[3].childNodes[1].textContent} \n Elements: ${kek.childNodes[3].childNodes[3].querySelectorAll('li').length}`);
console.log(`\n Category: ${kek.childNodes[5].childNodes[1].textContent} \n Elements: ${kek.childNodes[5].childNodes[3].querySelectorAll('li').length}`);

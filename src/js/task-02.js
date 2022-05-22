const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const mda = document.getElementById('ingredients');
const makeList = array => array.map(el => `<li>${el}</li>`);
mda.insertAdjacentHTML('afterbegin', (makeList(ingredients)).join(''))

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector('.gallery');
const makeGallery = array => array.map(el => `<img style='margin: 20px' src="${el.url}" alt="${el.alt}" height='300'></img>`);
gallery.insertAdjacentHTML('afterbegin', (makeGallery(images)).join(''));

// long old variant =)
// gallery.insertAdjacentHTML('afterbegin', `<img src="${images[0].url}" alt="${images[0].alt}" height='300'></img> <img src="${images[1].url}" alt="${images[1].alt}" height='300'></img> <img src="${images[2].url}" alt="${images[2].alt}" height='300'></img>`)
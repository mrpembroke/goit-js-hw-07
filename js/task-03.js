const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// console.log(images);

const gallery = document.querySelector('#gallery');
gallery.classList.add('gallery');

// --------------------- 1ый (плохой) вариант ---------------------
// -------------- Обращение к DOM на каждой иттерации

// const imagesList = images.map(image => {
//   const galleryItemEl = document.createElement('li');

//   galleryItemEl.insertAdjacentHTML(
//     'beforeend',
//     `<img class='gallery-img' src="${image.url}" alt="${image.alt}">`,
//   );

//   galleryItemEl.classList.add('gallery-item');
//   return galleryItemEl;
// });

// gallery.append(...imagesList);
// console.log(gallery);

// --------------------- 2ой вариант ---------------------

const imagesList = images.map(({ url, alt }) => {
  return `<li class="gallery-item">
              <img class="gallery-img" src="${url}" alt="${alt}"></img>
          </li>`;
});

gallery.insertAdjacentHTML('beforeend', imagesList);
console.log(gallery);

// --------------------- 3ий вариант ---------------------

// const galleryMarkup = images.map(({ url, alt }) => {
//   const imagesList = gallery.insertAdjacentHTML(
//     'beforeend',
//     `<li class="gallery-item">
//         <img class='gallery-img' src="${url}" alt="${alt}"</img>
//       </li>`,
//   );

//   return imagesList;
// });

// console.log(gallery);

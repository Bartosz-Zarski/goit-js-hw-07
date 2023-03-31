import { galleryItems } from './gallery-items.js';

const fullGallery = document.querySelector('.gallery');

// STWORZENIE ELEMENTOW W DOM I PODPIECIE ICH
let galleryEl = galleryItems
  .map(function (image) {
    return `<li><a class="gallery__item" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
  </a></li>`;
  })
  .join('');

fullGallery.insertAdjacentHTML('beforeend', galleryEl);

// ZABLOKOWANIE LINKU PO KLIKNIĘCIU
fullGallery.addEventListener('click', event => {
  event.preventDefault();
});

let gallery = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

import { galleryItems } from './gallery-items.js';

const fullGallery = document.querySelector('.gallery');

// STWORZENIE ELEMENTOW W DOM I PODPIECIE ICH
let galleryEl = galleryItems
  .map(function (image) {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`;
  })
  .join('');

fullGallery.insertAdjacentHTML('beforeend', galleryEl);

// ZABLOKOWANIE LINKU PO KLIKNIĘCIU
fullGallery.addEventListener('click', event => {
  event.preventDefault();
});

const galleryFragments = document.querySelectorAll('.gallery__image');

galleryFragments.forEach(image => {
  image.onclick = () => {
    const instance = basicLightbox
      .create(`<img id="modal-lightbox" width="1280" height="853" src="${image.dataset.source}">`)
      
      instance.show();

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        instance.close();
      }
    });
  };
});



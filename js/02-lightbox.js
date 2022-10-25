import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
        <a class="gallery__item" href='${original}'>
            <img class="gallery__image" src='${preview}' alt='${description}' />
        </a>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

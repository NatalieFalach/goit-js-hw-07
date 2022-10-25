import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href='${original}'>
            <img
                class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt='${description}'
            />
        </a>
    </div>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('beforeend', markup);
galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const url = e.target.dataset.source;
  const alt = e.target.getAttribute('alt');
  const instance = basicLightbox.create(`<img src='${url}' alt='${alt}' width="800" height="600">`);

  instance.show(() => {
    document.addEventListener('keydown', onEscapePress);
  });

  function onEscapePress(e) {
    if (e.code === 'Escape') {
      instance.close(() => document.removeEventListener('keydown', onEscapePress));
    }
  }
}

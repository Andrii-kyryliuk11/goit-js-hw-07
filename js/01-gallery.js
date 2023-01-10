import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

function createGalleryMarkup(galleryItems) {
  const arrayOfMarkup = [];

  galleryItems.forEach((image) => {
    arrayOfMarkup.push(
      `<div class="gallery__item">
  <a target="_self" class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
    );
  });

  refs.gallery.innerHTML = arrayOfMarkup.join("");
}

createGalleryMarkup(galleryItems);

refs.gallery.addEventListener("click", onGalleryElementClick);

function onGalleryElementClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  const originalImageRef = e.target.dataset.source;

  openModal(originalImageRef);
}

function openModal(ref) {
  const instance = basicLightbox.create(
    `<img src="${ref}" width="800" height="600">`
  );
  instance.show();

  window.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      instance.close();
      console.log(e);
      window.removeEventListener("keydown", e);
    }
  });
}

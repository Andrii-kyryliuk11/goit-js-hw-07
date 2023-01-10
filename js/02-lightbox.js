import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

function createGalleryMarkup(galleryItems) {
  const arrayOfMarkup = [];

  galleryItems.forEach((image) => {
    arrayOfMarkup.push(
      `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
    );
  });

  refs.gallery.innerHTML = arrayOfMarkup.join("");
}

createGalleryMarkup(galleryItems);


let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {});

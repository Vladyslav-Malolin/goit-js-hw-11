
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.getElementById("gallery");
const lightbox = new SimpleLightbox(".gallery-link");
lightbox.refresh();


export function renderImages(images) {
    gallery.innerHTML = images
        .map(
            ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
                `<a href="${largeImageURL}" class="gallery-link">
                    <img src="${webformatURL}" alt="${tags}">
                    <p>❤️ ${likes} | 👁 ${views} | 💬 ${comments} | ⬇️ ${downloads}</p>
                </a>`
        )
        .join("");

    lightbox.refresh();
}

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const galleryLayout = galleryItems.map(({ original, description, preview }) => {
    return ` <a class="gallery__item" href="${original}">
                <img 
                    class="gallery__image" 
                     src="${preview}" 
                     alt="${description}" 
                />
            </a>`;

}).join('');

gallery.insertAdjacentHTML('beforeend', galleryLayout);



let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});
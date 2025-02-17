import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const loader = document.getElementById("loader");
const gallery = document.getElementById("gallery");

let loadingToast;

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = input.value.trim();

    if (!query) {
        iziToast.error({ title: "Error", message: "Please enter a search term!" });
        return;
    }

    loader.classList.remove("hidden");
    gallery.innerHTML = "";


    loadingToast = iziToast.show({
        title: 'Loading',
        message: 'Loading images, please wait...',
        position: 'topCenter',
        timeout: 0,
        close: false,
    });

    try {
        const images = await fetchImages(query);
        if (images.length === 0) {
            iziToast.warning({ title: "No Results", message: "Try another keyword!" });
        } else {
            renderImages(images);
        }
    } catch (error) {
        iziToast.error({ title: "Error", message: "Failed to load images!" });
    } finally {
        loader.classList.add("hidden");
        setTimeout(() => {
            loadingToast.hide();
        }, 500);
    }
});



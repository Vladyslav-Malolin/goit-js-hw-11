import axios from "axios";

const API_KEY = "48886495-377d6660b652cff1cfff8c7f1";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query) {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                q: query,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
            },
        });

        if (response.status !== 200) {
            throw new Error("Server error");
        }

        return response.data.hits;
    } catch (error) {
        iziToast.error({
            title: "Error",
            message: "Failed to load images. Please try again!",
        });
        return [];
    }
}


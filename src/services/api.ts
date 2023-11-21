import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.clarifai.com',
    headers: {
        "Authorization": "Key dce2f1e3bf634b26a545706d6f24f3e8"
    }
})
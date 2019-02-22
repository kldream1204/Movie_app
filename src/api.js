import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "ab3b7b6adccc829a13ae5fa8eb9db2aa",
        language: "em-US"
    }
});

api.get("tv/popular");

export default api;
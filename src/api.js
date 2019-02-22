import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "ab3b7b6adccc829a13ae5fa8eb9db2aa",
        language: "em-US"
    }
});

export const TVApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    showDetail: (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
}

export const MoviesApi = {
    nowPlaying: () => api.get("movie/now_playibg"),
    upComing: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: (id) => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    search: (term) => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
}
const API_KEY = "5bf9d9670530067378b6875ba3f4d4fd";

const requests = {
    fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=US`,
    fetchNetflixOriginal:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=US`,
    fetchActionMovie:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumenterMovie:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;
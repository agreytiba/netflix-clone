

const API_KEY = "00d9d00d409991c0765deded68ff6501";

const requests={
fetchTrending:`trending/all/day?api_key=${API_KEY}`,
fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=23`,
fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
fetchActionMovies:`discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
fetchComedyMovies:`discover/movie?api_key=${API_KEY}&language=en-US&&include_adult=false&include_video=false&page=1&with_genres=35`,
fetchHorrorMovies:`discover/movies?api_key=${API_KEY}& with_genres=27`,
fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=10749&include_adult=false&include_video=false`,
fetchDocumentariesMovies:`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`
}
export default requests;
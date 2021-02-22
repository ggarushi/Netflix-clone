const API_KEY="82952e258de233099599b55eba264375";
const requests={
        fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchNetOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;
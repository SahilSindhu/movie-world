
export var api_urls ={
     API_KEY:'2f2b2a644f4ba2802234176b5ba9fa52',
     BASE_URL: 'https://api.themoviedb.org/3',
}

api_urls.GENRE_API = `${api_urls.BASE_URL}/genre/movie/list?api_key=${api_urls.API_KEY}&language=en-US`;
api_urls.LATEST_MOVIES_API = `${api_urls.BASE_URL}/movie/now_playing?api_key=${api_urls.API_KEY}&language=en-US&include_adult=false`;
api_urls.TRENDING_MOVIES_API = `${api_urls.BASE_URL}/trending/movie/week?api_key=${api_urls.API_KEY}`;
api_urls.POPULAR_MOVIE_API = `${api_urls.BASE_URL}/movie/popular?api_key=${api_urls.API_KEY}&language=en-US&page=1`;


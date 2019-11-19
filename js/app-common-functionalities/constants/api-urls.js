
export var apiUrls ={
     API_KEY:'2f2b2a644f4ba2802234176b5ba9fa52',
     BASE_URL: 'https://api.themoviedb.org/3',
}

apiUrls.GENRE_API = `${apiUrls.BASE_URL}/genre/movie/list?api_key=${apiUrls.API_KEY}&language=en-US`;
apiUrls.LATEST_MOVIES_API = `${apiUrls.BASE_URL}/movie/now_playing?api_key=${apiUrls.API_KEY}&language=en-US&include_adult=false`;
apiUrls.TRENDING_MOVIES_API = `${apiUrls.BASE_URL}/trending/movie/week?api_key=${apiUrls.API_KEY}`;
apiUrls.POPULAR_MOVIE_API = `${apiUrls.BASE_URL}/movie/popular?api_key=${apiUrls.API_KEY}&language=en-US&page=1`;


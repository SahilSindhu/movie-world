const API_KEY='2f2b2a644f4ba2802234176b5ba9fa52';

//fetch the list of all the genre avialable
async function getGenres(){
   let genereData = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
   genereData =await genereData.json();
   return genereData;
}


//fetch the latest movie data
async function getLatestData(){
    let latestData = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&include_adult=false`);
    latestData =await latestData.json();
    return latestData;
}


//fetch the trending movies data
async function getTrendingData(){
    let trendingData = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
    trendingData = trendingData.json();
    return trendingData;
}


//get the popular movies data
async function getPopularData(){
    let popularData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    popularData = popularData.json();
    return popularData;
}

async function getMovieDetails(movie_id){
    let movie_details = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`);
    movie_details = movie_details.json();
    return movie_details;
}

async function getSimilarMovieDetails(movie_id){
    let movie_details = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
    movie_details = movie_details.json();
    return movie_details;
}

export {getGenres,getLatestData,getTrendingData,getPopularData,getMovieDetails,getSimilarMovieDetails};


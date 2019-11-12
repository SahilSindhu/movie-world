import { getGenres,getLatestData, getTrendingData,getPopularData } from './app-common-functionalities/load-movie-data.js';
import { createRow } from './app-common-functionalities/movie-row.js/index.js';
import { movieQuickView } from './app-common-functionalities/movie-popup.js';
import { getActordata } from './actorDetailPage/actorDetail.js';
(function(){
    //create a array to hold all the server returned data
    let movieData = [];
    let genre;
    
    //initiate the data fetching and pass data to createRow function 
    function fetchMovieData(){
        let basic_api = [getGenres,getLatestData,getTrendingData,getPopularData];
        basic_api.forEach((ele,idx)=>{
            if(idx == 0){
                ele().then(res =>{
                    movieData[idx] =res;
                    genre = res;
                })
            }
            else{
                ele().then((res,err)=>{
                    movieData[idx] =res;
                    createRow(res.results,idx,genre.genres);
                })
            }
        })
    }
    fetchMovieData();
    
    /* 
    apply listeners for quickview overlay and implements functionality
    to get moviedata data using voie id
    */
   
    movieQuickView.addMovieEventListener()
    getActordata(null);
})();




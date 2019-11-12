import { getGenres,getLatestData,getTrendingData,getPopularData } from './api.js';
import { createRow } from './movie-row.js';
import { movieQuickView } from './quick-view.js';

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
                    console.log(movieData[1])
                })
            }
        })
    }
    fetchMovieData();
    
    /* 
    apply listeners for quickview overlay and implements functionality
    to get moviedata data using voie id
    */
    movieQuickView(movieData);

})();




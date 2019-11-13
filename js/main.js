import { loadMovieData } from './app-common-functionalities/load-movie-data.js';
import { createRow } from './app-common-functionalities/movie-row.js';
import { movieQuickView } from './app-common-functionalities/movie-popup.js';
import {api_urls} from './app-common-functionalities/constants/api-urls.js';


    /*
        fetch data for latest,trending and mostwatched movies to create home page
                        :: consumes -- api urls;, fetch fucntions, and then call the 
                            create row to make markup
        
        starts the functionality of popup by adding eventlisteners
        
    */
(function(){
    
    let homePageApi = [api_urls.LATEST_MOVIES_API,api_urls.POPULAR_MOVIE_API,api_urls.TRENDING_MOVIES_API];
    let genreData =[];
    let genre_promise = loadMovieData(api_urls.GENRE_API).then(res => genreData.push(res));
   

    homePageApi.forEach((url,idx )=>{
        loadMovieData(url).then(res => genre_promise.then(
            createRow(res.results,idx,genreData[0].genres)
        ));
    })
    
    /* 
        apply listeners for quickview overlay and implements functionality
        to get moviedata data using voie id
    */

    movieQuickView.addMovieEventListener()
   
})();





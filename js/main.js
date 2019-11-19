import { loadMovieData } from './common-functionalities/load-movie-data.js';
import { createRow } from './common-functionalities/movie-row.js';
import { movieQuickView } from './common-functionalities/movie-popup.js';
import {apiUrls} from './common-functionalities/constants/api-urls.js';
import { allData } from './common-functionalities/constants/allData.js';
import { insertTemplateMarkup } from './common-functionalities/markup-templates.js';
/*
    fetch data for latest,trending and mostwatched movies to create home page
                    :: consumes -- api urls;, fetch fucntions, and then call the 
                        create row to make markup
    
    starts the functionality of popup by adding eventlisteners
    
*/
(function(){
    let genreData =new Array();
    
    let latestMoviePromise = loadMovieData(apiUrls.LATEST_MOVIES_API);
    let popularMoviePromise = loadMovieData(apiUrls.POPULAR_MOVIE_API);
    let trendingMoviePromise = loadMovieData(apiUrls.TRENDING_MOVIES_API);
    let genrePromise = loadMovieData(apiUrls.GENRE_API).then(singleGenre => genreData.push(singleGenre));

    Promise.all([genrePromise,latestMoviePromise,popularMoviePromise,trendingMoviePromise])
                .then((values)=>
                {
                    for(let i=1;i<=values.length-1;i++){
                         
                    }
                })

    
    insertTemplateMarkup();
    movieQuickView.addMovieEventListener();
})();





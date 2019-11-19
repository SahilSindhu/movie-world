import { loadMovieData } from './app-common-functionalities/load-movie-data.js';
import { createRow } from './app-common-functionalities/movie-row.js';
import { movieQuickView } from './app-common-functionalities/movie-popup.js';
import {apiUrls} from './app-common-functionalities/constants/api-urls.js';
import { allData } from './app-common-functionalities/constants/allData.js';
import { insertTemplateMarkup } from './app-common-functionalities/markup-templates.js';
/*
    fetch data for latest,trending and mostwatched movies to create home page
                    :: consumes -- api urls;, fetch fucntions, and then call the 
                        create row to make markup
    
    starts the functionality of popup by adding eventlisteners
    
*/
(function(){
    
    let homePageApi = [apiUrls.LATEST_MOVIES_API,
                       apiUrls.POPULAR_MOVIE_API,
                       apiUrls.TRENDING_MOVIES_API];
    let genreData =new Array();
    let genrePromise = loadMovieData(apiUrls.GENRE_API).then(singleGenre => genreData.push(singleGenre));

    insertTemplateMarkup();
    movieQuickView.addMovieEventListener();


    homePageApi.forEach((apiUrl,api_index )=>{
                    loadMovieData(apiUrl)
                    .then(apiResponse => genrePromise.then(()=>{
                    allData.push(apiResponse.results);
                    createRow(apiResponse.results.slice(0,4),api_index,genreData[0].genres)
                    if(allData.length == '3'){
                        localStorage.setItem('localMovieDB',JSON.stringify(allData));
                        localStorage.setItem('localGenreDb',JSON.stringify(genreData[0].genres));
                    }
                }
        ));
    })
  
})();





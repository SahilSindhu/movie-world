import { ratingStarTemplate } from '../app-common-functionalities/rating-star.js';
import { cardMarkup } from '../app-common-functionalities/markup-templates.js';
import { getMovieDetails,getSimilarMovieDetails,loadMovieData } from '../app-common-functionalities/load-movie-data.js';
import { movieQuickView } from '../app-common-functionalities/movie-popup.js';
import { api_urls } from '../app-common-functionalities/constants/api-urls.js';
import { getGenre } from '../app-common-functionalities/getGenre.js';
import { getMovieId } from './getMovieId.js';
import { getMovieData } from './getMovieData.js';
const POSTER_PATH_PREFIX = 'https://image.tmdb.org/t/p/w500/';

/*
        It performs two tasks : 1) get the id of movie from the url
                                2) create movie detail view and related movie list
*/

(function() {
    const id = getMovieId('id');
    
    let genreData = [];
    let genre_promise =loadMovieData(api_urls.GENRE_API).then(res => genreData.push(res));
    genre_promise.then(()=>{
        getSimilarMovieDetails(id).then((res,err)=>{
            res.results.slice(0,4).forEach((ele,idx)=>{
                    let rating = Math.floor(ele.vote_average/2);
                    let genrename =getGenre(ele.genre_ids,genreData[0].genres);
                    let singlecard = cardMarkup(ele.title,rating,genrename,`${POSTER_PATH_PREFIX}/${ele.poster_path}`,ele.id)
                    document.querySelector('.related__list').insertAdjacentElement('beforeend',singlecard);
            })
        })
    })
    
    getMovieData(id)
})()







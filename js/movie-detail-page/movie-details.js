import { cardMarkup } from '../common-functionalities/markup-templates.js';
import { getMovieDetails,getSimilarMovieDetails,loadMovieData } from '../common-functionalities/load-movie-data.js';
import { movieQuickView } from '../common-functionalities/movie-popup.js';
import { apiUrls } from '../common-functionalities/constants/api-urls.js';
import { getGenre } from '../common-functionalities/getGenre.js';
import { getMovieId } from './getMovieId.js';
import { populateDetail } from './populate-detail.js';
import { addCrousel } from '../common-functionalities/crousel.js';
const POSTER_PATH_PREFIX = 'https://image.tmdb.org/t/p/w500/';


(function() {
    const id = getMovieId('id');
    let genreData = new Array();

    let genrePromise =loadMovieData(apiUrls.GENRE_API).then(res => genreData.push(res));
    let simpilarMovieDetailPromise = getSimilarMovieDetails(id);
    let movieDetailPromise = getMovieDetails(id);
    movieQuickView.addMovieEventListener();

    Promise.all([genrePromise,simpilarMovieDetailPromise,movieDetailPromise]).then((values)=>{
        populateDetail(values[2]);
        values[1].results.forEach((ele,idx)=>{
                let rating = Math.floor(ele.vote_average/2);
                let genrename =getGenre(ele.genre_ids,genreData[0].genres);
                let singlecard = cardMarkup(ele.title,rating,genrename,`${POSTER_PATH_PREFIX}/${ele.poster_path}`,ele.id)
                document.querySelector('.related__list').insertAdjacentHTML('beforeend',singlecard);
                
            })
            addCrousel();
    })
})()







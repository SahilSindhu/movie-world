import {cardMarkup} from './markup-templates.js';
import { getGenre } from '../app-common-functionalities/getGenre.js';

const POSTER_PATH_PREFIX =`https://image.tmdb.org/t/p/w500/`;

/*create a list of movies in DOM :: args= data of all movies in a particular category,
                                    index is used to get position where we have to append th card
                                    genre is list of all genre
*/
let home_page_movie_rows; 
export function createRow(rowData,idx,genre){
    home_page_movie_rows = document.querySelectorAll('.movie__list');
    home_page_movie_rows[idx].innerHTML ='';

    rowData.forEach((ele,index) => {
        let movieGenreName = getGenre(ele.genre_ids,genre);
            createMovieCard(ele,idx,movieGenreName);
    });
}

/*
    use cardMarkup function to create movie card and then append the return value in dom
*/
function  createMovieCard(singleMovie,idx,movieGenreName){
  
    let rating = Math.floor(singleMovie.vote_average/2);
    let single_card_markup =cardMarkup(singleMovie.title,rating,movieGenreName,`${POSTER_PATH_PREFIX}/${singleMovie.poster_path}`,singleMovie.id);
    
    home_page_movie_rows[idx].insertAdjacentElement('beforeend',single_card_markup);

}



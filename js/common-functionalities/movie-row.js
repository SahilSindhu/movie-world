import {cardMarkup} from './markup-templates.js';
import { getGenre } from './getGenre.js';

const POSTER_PATH_PREFIX =`https://image.tmdb.org/t/p/w500/`;

/*create a list of movies in DOM :: args= data of all movies in a particular category,
                                    index is used to get position where we have to append th card
                                    genre is list of all genre
*/
let home_page_movie_rows; 
export function createRow(rowData,idx,genre,errorNode){
    home_page_movie_rows = document.querySelectorAll('.movie__list');
    home_page_movie_rows[idx].innerHTML ='';

    if(rowData.length != 0){
        rowData.forEach((ele,index) => {
            let movieGenreName = getGenre(ele.genre_ids,genre);
                createMovieCard(ele,idx,movieGenreName.slice(0,3));
        });
        if(errorNode && !errorNode.classList.contains('error__hide')){
            errorNode.classList.add('error__hide')
        }
    }
    else{
        if(errorNode){
            errorNode.classList.remove('error__hide')
        }
    }
}

/*
    use cardMarkup function to create movie card and then append the return value in dom
*/
function  createMovieCard(singleMovie,idx,movieGenreName){
  
    let rating = Math.floor(singleMovie.vote_average/2);
    let movieImg = `${POSTER_PATH_PREFIX}/${singleMovie.backdrop_path}`
    let single_card_markup =cardMarkup(singleMovie.title,rating,movieGenreName,movieImg,singleMovie.id);
    
    home_page_movie_rows[idx].insertAdjacentHTML('beforeend',single_card_markup);

}



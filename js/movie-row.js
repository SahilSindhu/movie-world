import {cardMarkup} from './markup-templates.js';

const POSTER_PATH_PREFIX =`https://image.tmdb.org/t/p/w500/`;

/*create a list of movies in DOM :: args= data of all movies in a particular category,
                                    index is used to get position where we have to append th card
                                    genre is list of all genre
*/
export function createRow(rowData,idx,genre){
    rowData.forEach((ele,index) => {
        let movieGenreName = getGenre(ele.genre_ids,genre);
        if(index<=3){
            createMovieCard(ele,idx,movieGenreName)
        }
       
    });
}


/*
    we get the genre of our movie by using genre id and matching it to all
    genre list
*/
function getGenre(movieGenreId, allGenere){
    let movieGenreName = [];
    movieGenreId.forEach((ele)=>{
        allGenere.forEach((all)=>{
            if(ele == all.id){
                movieGenreName.push(all.name)
            }
        })
    })
    return movieGenreName;
}


/*
    use cardMarkup function to create movie card and then append the return value in dom
*/
function  createMovieCard(singleMovie,idx,movieGenreName){
    let rating = calculateRating(singleMovie.popularity);
    let x =cardMarkup(singleMovie.title,rating,movieGenreName,`${POSTER_PATH_PREFIX}/${singleMovie.poster_path}`);
    console.log(idx)
    switch(idx){
        case 0:document.querySelector('.latest__list').insertAdjacentHTML('beforeend',x);
                break;
        case 1:document.querySelector('.trending__list').insertAdjacentHTML('beforeend',x);
                 break;
        case 2:document.querySelector('.mostwatched__list').insertAdjacentHTML('beforeend',x);
                break;
    }
    document.querySelectorAll('.fa-star')
    
}


/*change the rating value from 1-500 to 1-5 */
function calculateRating(popularity){
    let rating = Math.ceil(popularity/100);
    return rating;
}


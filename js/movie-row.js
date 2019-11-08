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
    use cardMarkup function to create movie card and then append the return value in dom
*/
function  createMovieCard(singleMovie,idx,movieGenreName){
    let rating = Math.floor(singleMovie.vote_average/2);
    let x =cardMarkup(singleMovie.title,rating,movieGenreName,`${POSTER_PATH_PREFIX}/${singleMovie.poster_path}`,singleMovie.id);
    
    switch(idx){
        case 1:document.querySelector('.latest__list').insertAdjacentElement('beforeend',x);
                break;
        case 2:document.querySelector('.trending__list').insertAdjacentElement('beforeend',x);
                 break;
        case 3:document.querySelector('.mostwatched__list').insertAdjacentElement('beforeend',x);
                break;
    }

    
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


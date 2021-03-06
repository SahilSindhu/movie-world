import { ratingStarTemplate } from '../common-functionalities/rating-star.js';

const POSTER_PATH_PREFIX = 'https://image.tmdb.org/t/p/w500/';


export function populateDetail(movieDetails){
    let details_node = document.querySelector('#main-details');
    let moviePoster = details_node.querySelector('.banner_image');
    let description = details_node.querySelector('.movie__detail__description');
    let movieTitle = details_node.querySelector('.movie__title');
    let genredata = details_node.querySelector('.genre__data td');
    let castData = details_node.querySelector('.cast__data td');
    let director_node = details_node.querySelector('.director_name');
    let rating = details_node.querySelector('.movie__ratingStars span');
    
    description.append(document.createTextNode(movieDetails.overview))
    movieTitle.append(document.createTextNode(movieDetails.original_title))
    moviePoster.setAttribute("src", POSTER_PATH_PREFIX + movieDetails.backdrop_path);
    moviePoster.setAttribute("alt", movieDetails.original_title);
    moviePoster.setAttribute("title", movieDetails.original_title);

    let genre = '';
    movieDetails.genres.map(genreItem => genre += genreItem.name + ', ');
    genredata.append(document.createTextNode(genre));

    let cast = '';
    let castnode = movieDetails.credits.cast.slice(0, 8).map(ele =>`<a href='actor-detail.html?castId=${ele.id}'  data-cast-id=${ele.id}>${ele.name}</a>`);
    
    castData.insertAdjacentHTML('beforeend',castnode.join(','));

    let director_name = (movieDetails.credits.crew.filter((ele)=> ele.job == 'Director')[0].name);
    let director_id =  (movieDetails.credits.crew.filter((ele)=> ele.job == 'Director')[0].id);
   
    director_node.insertAdjacentHTML('beforeend',`<a href='actor-detail.html?castId=${director_id}'>${director_name}</a>`);

    let ratingMovies = Math.round((movieDetails.vote_average / 2));
    rating.innerHTML = ratingStarTemplate(ratingMovies);


}
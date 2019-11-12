import { ratingStarTemplate } from '../app-common-functionalities/rating-star.js';
import { cardMarkup } from '../app-common-functionalities/markup-templates.js';
import { getMovieDetails,getSimilarMovieDetails,loadMovieData } from '../app-common-functionalities/load-movie-data.js';
import { movieQuickView } from '../app-common-functionalities/movie-popup.js';
import { api_urls } from '../app-common-functionalities/constants/api-urls.js';
import { getGenre } from '../app-common-functionalities/getGenre.js';
const POSTER_PATH_PREFIX = 'https://image.tmdb.org/t/p/w500/';



setMovieDetails();

async function setMovieDetails() {
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
}
async function getMovieData(id){
        const movieDetails = await getMovieDetails(id);
       
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


        //add qucick view overlay
        movieQuickView.addMovieEventListener();
    
}
function getMovieId(parameterName) {
    var result = null,
        tmp = [];
    window.location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}




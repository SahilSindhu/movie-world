import { getMovieDetails } from '../api.js';
import { ratingStarTemplate } from '../common/rating-star.js';
import { cardMarkup } from '../common/markup-templates.js';
import { getSimilarMovieDetails } from '../api.js';

const POSTER_PATH_PREFIX = 'https://image.tmdb.org/t/p/w500/';



setMovieDetails();

async function setMovieDetails() {
    const id = getMovieId('id');
    getSimilarMovieDetails(id).then((res,err)=>{
        res.results.forEach((ele,idx)=>{
            if(idx <= 3){
                let rating = Math.floor(ele.vote_average/2);
                let x = cardMarkup(ele.title,rating,['action'],`${POSTER_PATH_PREFIX}/${ele.poster_path}`,ele.id)
                document.querySelector('.related__list').insertAdjacentElement('beforeend',x);
            }
        })
         
    })
    if (id) {
        const movieDetails = await getMovieDetails(id);
        const template = document.getElementById("details");
        const details = template.content.querySelector("div");
        const node = document.importNode(details, true);
        const description = node.querySelector('.para-text');
        const movieTitle = node.querySelector('.primary-text')
        const moviePoster = node.querySelector('.full__banner figure img');
       
        description.append(document.createTextNode(movieDetails.overview))
        movieTitle.append(document.createTextNode(movieDetails.original_title))
        moviePoster.setAttribute("src", POSTER_PATH_PREFIX + movieDetails.poster_path);
        moviePoster.setAttribute("alt", movieDetails.original_title);
        moviePoster.setAttribute("title", movieDetails.original_title);

        let genre = '';
        movieDetails.genres.map(genreItem => genre += genreItem.name + ', ');
        const genredata = node.querySelector('.genre__data td');
        genredata.append(document.createTextNode(genre));

        let cast = '';
        movieDetails.credits.cast.slice(0, 8).map(item => cast += item.name + ', ');
        cast = cast.slice(0, -2);

        
        const castData = node.querySelector('.cast__data td');
        castData.append(document.createTextNode(cast));


        //get director name
        const director_node = node.querySelector('.director_name');
        director_node.append(document.createTextNode((movieDetails.credits.crew.filter((ele)=> ele.job == 'Director')[0].name)));
        console.log()
        //for movie rating
        let ratingMovies = Math.round((movieDetails.vote_average / 2));
        const rating = node.querySelector('.movie__ratingStars span')
        rating.innerHTML = ratingStarTemplate(ratingMovies);
        console.log(movieDetails)
        document.getElementById('main-details').append(node);
    }
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




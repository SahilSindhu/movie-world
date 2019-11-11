import {ratingStarTemplate} from './common/rating-star.js';

function cardMarkup(moviename,movierating,moviegenre,movieimg,movieId) {
    
    let template = document.getElementById("latest-movies");
    let movieCard = template.content.querySelector(".movie-card");
    let node = document.importNode(movieCard, true);
    //let star_rating = template.content.querySelectorAll(".movie__rating .star-rating");

    let figure = node.querySelector('.movie__figure__poster');
    let title = node.querySelector('.movie__name');
    let genre = node.querySelector('.movie__genre');
    let show_more_link = node.querySelector('.movie__showmore-link a');

    figure.setAttribute("src", movieimg);
    figure.setAttribute("alt", moviename);
    figure.setAttribute("title", moviename);
    show_more_link.setAttribute('href',`movie-details.html?id=${movieId}`);
    title.appendChild(document.createTextNode(moviename));
    genre.appendChild(document.createTextNode(moviegenre[0] +" " + moviegenre[1]));
  
    const ratingNode = node.querySelector('.movie__ratingStars span');
    console.log(movierating)
    ratingNode.innerHTML = ratingStarTemplate(movierating);
     return node;
  }
  


export {cardMarkup}
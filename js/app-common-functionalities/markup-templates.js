import {ratingStarTemplate} from './rating-star.js';

function cardMarkup(moviename,movierating,moviegenre,movieimg,movieId) {
    
    let template = document.getElementById("latest-movies");
    let movieCard = template.content.querySelector(".movie-card");
    let node = document.importNode(movieCard, true);

    let figure = node.querySelector('.movie__figure__poster');
    let title = node.querySelector('.movie__name');
    let genre = node.querySelector('.movie__genre');
    let show_more_link = node.querySelector('.movie__showmore-link a');

    figure.setAttribute("src", movieimg);
    figure.setAttribute("alt", moviename);
    figure.setAttribute("title", moviename);
    figure.setAttribute("data-movie-id",movieId);
    show_more_link.setAttribute('href',`movie-details.html?id=${movieId}`);
    title.appendChild(document.createTextNode(moviename));
    
    genre.appendChild(document.createTextNode(moviegenre.join(',')));
  
    const ratingNode = node.querySelector('.movie__ratingStars span');
   


    ratingNode.innerHTML = ratingStarTemplate(movierating);
     return node;
}
  


export {cardMarkup}
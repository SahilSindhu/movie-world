import {ratingStarTemplate} from './rating-star.js';
export function cardMarkup(moviename,movierating,moviegenre,movieimg,movieId) {
    return `<section class='movie-card'>
                        <figure  class='movie__figure'>
                            <img class='movie__figure__poster' alt=${moviename} title=${moviename} data-movie-id=${movieId} src=${movieimg || null}>
                        </figure>
                        <div class='movie-details'>
                            <div class="details__content details__header">
                                <p class='movie__name'>${moviename}</p>
                                <span class='movie__heart'><i class='fa fa-heart'></i></span>
                            </div>
                            <div class="details__content details__body">
                                <p class='movie__genre'>${moviegenre.join(',')}</p>
                                
                            </div>
                            <div class="details__content details__footer">
                                    <p class="movie__ratingStars">
                                            <span>${ratingStarTemplate(movierating)}</span>
                                    </p>
                                <p class='movie__showmore-link'><a href='movie-details.html?id=${movieId}'>show more</a></p>
                            </div>
                        </div>
            </section>`
}

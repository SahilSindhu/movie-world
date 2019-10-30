
/* return card in string litral markup form :: args=name of movie, rating of movie,
                                               genre of movie, and image path
*/
function cardMarkup(moviename,movierating,moviegenre,movieimg){
    let bestTwoGenre = [];
    
    //two show only two genre of movie on home page
    if(moviegenre.length>2){
        bestTwoGenre.push(moviegenre[0]);
        bestTwoGenre.push(moviegenre[1]);
    }

    let cardhtml = 
        `
            <section class='movie-card'>
                <figure class='movie__figure'>
                    <img class='movie__figure__poster' src=${movieimg}>
                </figure>
                <div class='movie-details'>
                    <section class='movie-details--left movie-details--inner'>
                        <p class='movie__name'>${moviename}</p>
                        <p class='movie__genre'>${bestTwoGenre}</p>
                        <span class='movie__rating'>
                                <i class="fa ${movierating >=1 ?'fa-star' :'fa-star-o'} star-rating"></i>
                                <i class="fa ${movierating >=2 ?'fa-star' :'fa-star-o'} star-rating"></i>
                                <i class="fa ${movierating >=3 ?'fa-star' :'fa-star-o'} star-rating"></i>
                                <i class="fa ${movierating >=4 ?'fa-star' :'fa-star-o'} star-rating"></i>
                                <i class="fa ${movierating >=5 ?'fa-star' :'fa-star-o'} star-rating"></i>
                        </span>
                    </section>
                    <section class='movie-details--right movie-details--inner'>
                        <p class='movie__heart'><i class='fa fa-heart-o'></i></p>
                        <p class='movie__showmore-link'><a href='#'>show more</a></p> 
                    </section>
                </div>
            </section>
        `
    return cardhtml;
}

export {cardMarkup}
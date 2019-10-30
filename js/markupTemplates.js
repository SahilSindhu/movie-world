function cardMarkup(moviename,movierating,moviegenre,movieimg){
    let bestTwoGenre = [];
    
    //two show only two genre of movie on home page
    if(moviegenre.length>2){
        bestTwoGenre.push(moviegenre[0]);
        bestTwoGenre.push(moviegenre[1]);
    }

    let cardhtml = `
                <section class='movie-card'>
                    <figure>
                        <img src=${movieimg}>
                    </figure>
                    <div class='movie-details'>
                        <section class='movie-details--left movie-details--inner'>
                              <p class='movie__name'>${moviename}</p>
                              <p class='movie__genre'>${bestTwoGenre}</p>
                              <span class='movie__rating'>
                                    <i class="fa ${movierating >=1 ?'fa-star' :'fa-star-o'}"></i>
                                    <i class="fa ${movierating >=2 ?'fa-star' :'fa-star-o'}"></i>
                                    <i class="fa ${movierating >=3 ?'fa-star' :'fa-star-o'}"></i>
                                    <i class="fa ${movierating >=4 ?'fa-star' :'fa-star-o'}"></i>
                                    <i class="fa ${movierating >=5 ?'fa-star' :'fa-star-o'}"></i>
                              </span>
                        </section>
                        <section class='movie-details--right movie-details--inner'>
                               <p class='movie__heart'><i class='fa fa-heart-o'></i></p>
                               <p classs='movie__showmore'><a href='#'>show more</a></p> 
                        </section>
                    </div>
                 </section>

`
    return cardhtml;
}


function rowMarkup(idx){
    console.log('in row markup')
}


export {cardMarkup,rowMarkup}
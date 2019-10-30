function cardMarkup(moviename,movierating,moviegenre,movieimg){
    let bestTwoGenre = [];
    if(moviegenre.length>2){
        bestTwoGenre.push(moviegenre[0]);
        bestTwoGenre.push(moviegenre[1]);
    }
    let cardhtml = `
                <section class='movie-card'>
                    <figure>
                        <img src=${movieimg} style={height:150px;width:150px}>
                    <figure>
                    <div class='movie-details'>
                        <section class='movie-details--left movie-details--inner'>
                              <p>${moviename}</p>
                              <p>${bestTwoGenre}</p>
                              <p>${movierating}</p>
                        </section>
                        <section class='movie-details--right movie-details--inner'>
                               <p><i class='fa fa-heart-o'></i></p>
                               <p><a href='#'>show more</a></p> 
                        </section>
                    </div>
                    
                    
                    
                    <br>
                    <span>
                        <i class="fa ${movierating >=1 ?'fa-star' :'fa-star-o'}"></i>
                        <i class="fa ${movierating >=2 ?'fa-star' :'fa-star-o'}"></i>
                        <i class="fa ${movierating >=3 ?'fa-star' :'fa-star-o'}"></i>
                        <i class="fa ${movierating >=4 ?'fa-star' :'fa-star-o'}"></i>
                        <i class="fa ${movierating >=5 ?'fa-star' :'fa-star-o'}"></i>
                    </span>

                 </section>

`
    return cardhtml;
}
function rowMarkUp(idx){
    
}


let poster =`https://image.tmdb.org/t/p/w500/`;
export function createRow(rowData,idx,genre){
    rowMarkUp(idx);
    rowData.forEach((ele,index) => {
        let movieGenreName = getGenre(ele.genre_ids,genre);
        if(index<=3){
            createMovieCard(ele,idx,movieGenreName)
        }
       
    });
}

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

function  createMovieCard(singleMovie,idx,movieGenreName){
    let rating = calculateRating(singleMovie.popularity);
    let x =cardMarkup(singleMovie.title,rating,movieGenreName,`${poster}/${singleMovie.poster_path}`);
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

function calculateRating(popularity){
    let rating = Math.ceil(popularity/100);
    return rating;
}


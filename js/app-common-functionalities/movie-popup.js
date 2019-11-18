import { getMovieDetails } from './load-movie-data.js';
import { ratingStarTemplate } from './rating-star.js';


export var movieQuickView ={
    addMovieEventListener :function(){
                                document.querySelectorAll('.movie__row').forEach((ele,idx)=>{
                                    ele.addEventListener('click',(evt)=>{
                                    if(evt.target.classList.contains('movie__figure__poster')){
                                        this.getQuickViewData(evt.target.getAttribute('data-movie-id'));
                                    }
                                    if(evt.target.classList.contains('fa-heart-o')){
                                        evt.target.classList.toggle('favorite-movie');
                                    }
                                })
                            })},
    getQuickViewData   :function(movieid){
                                let movie_name,poster_path, movie_overview,movie_director,movie_rating,
                                movie_genre = [],
                                movie_cast = []
                                getMovieDetails(movieid).then((res)=>{
                                    movie_name = res.original_title;
                                    poster_path = res.backdrop_path;
                                    movie_overview = res.overview.split(' ').filter((ele,idx)=>{return idx<=200}).join(' ');
                                    res.genres.forEach((ele)=>{ movie_genre.push(ele.name);});
                                    res.credits.cast.forEach((ele,idx)=>{if(idx<=4){movie_cast.push(ele.name)}});
                                    movie_rating = Math.round(res.vote_average/2)
                                    res.credits.crew.forEach(ele => {
                                        if(ele.job == 'Director'){
                                            movie_director = ele.name;
                                        }
                                    });
                                    this.movieDetailOverlay();
                                    this.populateOverlay(movie_name,poster_path,movie_overview,movie_genre,movie_cast,movie_director,movie_rating);
                                
                                })

                                getMovieDetails(movieid);
                         },
    movieDetailOverlay :function(){
                                let modal = document.getElementById("movie__modal");
                                modal.style.display = 'block';
                                let btn = document.getElementById("modal");
                                let modal_close = document.querySelectorAll(".modal__close__icon");
                                btn.addEventListener('click',()=>{modal.style.display = "block";})
                                modal_close.forEach(element => {
                                    element.addEventListener('click',()=>{modal.style.display = "none";})}
                                )
                                window.addEventListener('click',(event)=>{
                                    if (event.target == modal) {
                                        modal.style.display = "none";
                                    }
                                })
                        },
    populateOverlay     : function(movie_name,poster_path,movie_overview,movie_genre,movie_cast,movie_director,movie_rating){
                                const POSTER_PATH_PREFIX =`https://image.tmdb.org/t/p/w500/`;
                                let modal = document.querySelector('.modal__content');
                                let rating_stars =ratingStarTemplate(movie_rating);
                                modal.querySelector('.modal__title').innerHTML = movie_name;
                                modal.querySelector('.modal__image').setAttribute('src',`${POSTER_PATH_PREFIX}/${poster_path}`);
                                modal.querySelector('.movie__overview').innerHTML = movie_overview;
                               
                                modal.querySelector('.modal__genre td').innerHTML = movie_genre.join(',');
                                modal.querySelector('.modal__cast td').innerHTML = movie_cast.join(',');
                                modal.querySelector('.modal__director td').innerHTML = movie_director;
                                modal.querySelector('.modal__rating-stars').innerHTML = rating_stars;
              
                        }
                        
}




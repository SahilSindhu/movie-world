import { getMovieDetails } from './api.js';

export function movieQuickView(movieData){
    let allRow =document.querySelectorAll('.movie__row');
    allRow.forEach((ele,idx)=>{
        ele.addEventListener('click',(evt)=>{
            if(evt.target.classList.contains('movie__figure__poster')){
                let all_posters = ele.querySelectorAll('.movie-card .movie__figure__poster');
                all_posters.forEach((element,index)=>{
                    if(element == evt.target){
                        getQuickViewData((movieData[idx+1].results[index].id));
                    }
                })
            
            }
            
        })
    })
}
function getQuickViewData(movieid){
    let movie_name,
        poster_path,
        movie_overview,
        movie_director,
        movie_genre = [],
        movie_cast = [],
        movie_rating
    getMovieDetails(movieid).then((res)=>{
        
        movie_name = res.original_title;
        poster_path = res.poster_path;
        movie_overview = res.overview;
        res.genres.forEach((ele)=>{ movie_genre.push(ele.name);});
        res.credits.cast.forEach((ele,idx)=>{if(idx<=4){movie_cast.push(ele.name)}});
        movie_rating = Math.round(res.vote_average/2)
        res.credits.crew.forEach(ele => {
        
            if(ele.job == 'Director'){
                movie_director = ele.name;
            }
        });

        movieDetailOverlay();
        populateOverlay(movie_name,poster_path,movie_overview,movie_genre,movie_cast,movie_director,movie_rating);
      
    })

    getMovieDetails(movieid);
}
function movieDetailOverlay(){
    var modal = document.getElementById("movie__modal");

    modal.style.display = 'block';
    // Get the button that opens the modal
    var btn = document.getElementById("modal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("modal__close")[0];

    // When the user clicks the button, open the modal
    btn.addEventListener('click',()=>{modal.style.display = "block";})

    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click',()=>{modal.style.display = "none";})

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click',(event)=>{
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
}
function populateOverlay(movie_name,poster_path,movie_overview,movie_genre,movie_cast,movie_director,movie_rating){
    const POSTER_PATH_PREFIX =`https://image.tmdb.org/t/p/w500/`;
    let modal = document.querySelector('.modal__content');
    
    //modal.querySelector('.modal__title').appendChild(document.createTextNode(movie_name))
    modal.querySelector('.modal__title').innerHTML = movie_name;
    modal.querySelector('.modal__image').setAttribute('src',`${POSTER_PATH_PREFIX}/${poster_path}`);
    modal.querySelector('.movie__overview').innerHTML = movie_overview;
    modal.querySelector('.modal__genre td').innerHTML = movie_genre.join(',');
    modal.querySelector('.modal__cast td').innerHTML = movie_cast.join(',');
    modal.querySelector('.modal__director td').innerHTML = movie_director;
    modal.querySelectorAll('.modal__rating-stars span').forEach((ele,idx)=>{
         if(idx<=movie_rating-1){
             ele.classList.add('fa-star');
             ele.classList.remove('fa-star-o');
         }
         else{
            ele.classList.remove('fa-star');
            ele.classList.add('fa-star-o');
         }
     })
}

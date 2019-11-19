const API_KEY='2f2b2a644f4ba2802234176b5ba9fa52';
const BASE_URL='https://api.themoviedb.org/3';

function loadMovieData(url){
            return fetch(url)
                    .then(res => {
                        if(!res.ok){
                            throw Error (res.statusText)
                        }
                        return res;
                    })
                    .then(res=> res.json())
                    .catch(err=> console.log(err))
}

async function getMovieDetails(movie_id){
    let movie_details = await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`);
    if(!movie_details.ok){
        console.log(movie_details.status)
        return movie_details;
    }
    else{
        movie_details = movie_details.json();
        return movie_details;
    }
}

async function getSimilarMovieDetails(movie_id){
    let movie_details = await fetch(`${BASE_URL}/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`);
    if(!movie_details.ok){
        console.log(movie_details.status)
        return movie_details;
    }
    else{
        movie_details = movie_details.json();
        return movie_details;
    }
    
    
}
async function getActorDetails(ACTOR_ID){
    let actor_details = await fetch(`${BASE_URL}/person/${ACTOR_ID}?api_key=${API_KEY}&language=en-US`);
    if(!actor_details.ok){
        console.log(actor_details.status)
        return actor_details;
    }
    else{
        actor_details = actor_details.json();
        return actor_details;
    }
}
async function getActorFilmographyDetails(ACTOR_ID){
    let actor_filmogrphy_detail = await fetch(`https://api.themoviedb.org/3/person/${ACTOR_ID}/movie_credits?api_key=${API_KEY}&language=en-US`);
    if(!actor_filmogrphy_detail.ok){
        console.log(actor_filmogrphy_detail.status)
        return actor_filmogrphy_detail;
    }
    else{
        actor_filmogrphy_detail = actor_filmogrphy_detail.json();
        return actor_filmogrphy_detail;
    }
}
export {getMovieDetails,getSimilarMovieDetails,getActorDetails,getActorFilmographyDetails,loadMovieData};


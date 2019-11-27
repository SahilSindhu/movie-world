import { getActorDetails,getActorFilmographyDetails} from '../common-functionalities/load-movie-data.js';
import {addMovieCards} from './actorCardMarkup.js';
import { getActorId } from './castId.js';

const POSTER_PATH_PREFIX = 'https://image.tmdb.org/t/p/w500';


function getActordata(cast_id){
    let filmogrphyDetail =getActorFilmographyDetails(cast_id);
    let actorDetail =getActorDetails(cast_id)
    Promise.all([filmogrphyDetail,actorDetail]).then((response)=>{
        let actor_name = response[1].name;
        let actor_birthday = response[1].birthday;
        let actor_biography = response[1].biography;
        let actor_profile_image = response[1].profile_path;
        let actor_rating = response[1].popularity;

        populateActorDetailMarkup(actor_name,actor_birthday,actor_biography,actor_profile_image,actor_rating);
        addMovieCards(response[0])
    })
}

function populateActorDetailMarkup(actor_name,actor_birthday,actor_biography,actor_profile_image,actor_rating,movie_name){
    let actor_image = document.querySelector('.actor__image');
    let actor_title = document.querySelector('.actor__title');
    let actor_dob = document.querySelector('.actor__dob');
    let actor_description = document.querySelector('.actor__description');
    
    actor_birthday = actor_birthday.split('-').join('/');
    actor_title.append(document.createTextNode(actor_name))
    actor_dob.append(document.createTextNode(actor_birthday))
    actor_description.append(document.createTextNode(actor_biography))
    actor_image.setAttribute('src',`${POSTER_PATH_PREFIX}${actor_profile_image}`);
}



var id = getActorId('castId');
getActordata(id);





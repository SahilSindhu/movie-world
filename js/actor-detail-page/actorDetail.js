import { getActorDetails,getActorFilmographyDetails} from '../common-functionalities/load-movie-data.js';
import {addMovieCards} from './actorCardMarkup.js';
import { getActorId } from './castId.js';
import { insertTemplateMarkup } from '../common-functionalities/markup-templates.js';

const POSTER_PATH_PREFIX = 'https://image.tmdb.org/t/p/w500';
insertTemplateMarkup();



function getActordata(cast_id){
    let filmogrphydetail =getActorFilmographyDetails(cast_id);
    console.log(filmogrphydetail)
    getActorDetails(cast_id).then(res => {
        let actor_name = res.name;
        let actor_birthday = res.birthday;
        let actor_biography = res.biography;
        let actor_profile_image = res.profile_path;
        let actor_rating = res.popularity;
       
        filmogrphydetail.then((res)=>{
            populateActorDetailMarkup(actor_name,actor_birthday,actor_biography,actor_profile_image,actor_rating)
            console.log(res)
            addMovieCards(res);
         } )
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




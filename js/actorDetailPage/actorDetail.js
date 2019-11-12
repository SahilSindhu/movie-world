import { getActorDetails,getActorFilmographyDetails} from '../app-common-functionalities/load-movie-data.js';
 function getActordata(cast_id){
    getActorDetails(cast_id).then(res => {
        let actor_name = res.name;
        let actor_birthday = res.birthday;
        let actor_biography = res.biography;
        let actor_profile_image = res.profile_path;
        let actor_rating = res.popularity;
        console.log(res)
        getActorFilmographyDetails(cast_id).then(res =>{
            console.log(res)
            let movie_name1 = res.cast.slice(0,4);
            
            populateActorDetailMarkup(actor_name,actor_birthday,actor_biography,actor_profile_image,actor_rating)
        })
    })
   
}
function populateActorDetailMarkup(actor_name,actor_birthday,actor_biography,actor_profile_image,actor_rating,movie_name){
    console.log(actor_name);
    console.log(actor_birthday);
    console.log(actor_biography);
    console.log(actor_profile_image);
    console.log(actor_rating)
}

function getCastId(parameterName) {
    var result = null,
        tmp = [];
    window.location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

let id = getCastId('castId');
getActordata(id);

import { getActorDetails,getActorFilmographyDetails} from '../app-common-functionalities/load-movie-data.js';
export function getActordata(cast_id){
    getActorDetails(cast_id || 11701).then(res => {
        let actor_name = res.name;
        let actor_birthday = res.birthday;
        let actor_biography = res.biography;
        console.log(res)
    })
    getActorFilmographyDetails(cast_id || 11701).then(res =>{
        console.log(res)
    })
}


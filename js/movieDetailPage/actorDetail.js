import { getActorDetails } from '../api.js';
getActorDetails(11701).then(res => {
    let actor_name = res.name;
    let actor_birthday = res.birthday;
    let actor_biography = res.biography;
    console.log(actor_name);
    console.log(actor_birthday);
    console.log(actor_biography);
    console.log(res);
});
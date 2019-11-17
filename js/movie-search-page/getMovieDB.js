import { loadMovieData } from '../app-common-functionalities/load-movie-data.js';
import { api_urls } from '../app-common-functionalities/constants/api-urls.js';
export function getMovieDB(){
        
        let localMovieDb = JSON.parse(localStorage.getItem('localMovieDB'));
        let localGenreDb = JSON.parse(localStorage.getItem('localGenreDb'));
        if(localMovieDb != null){
            localMovieDb =[...localMovieDb[0],...localMovieDb[1],...localMovieDb[2]];
            localMovieDb.forEach((ele,idx)=>{
                for(let i = idx+1;i <= localMovieDb.length -1; i++){
                    if(ele.id == localMovieDb[i].id){
                        localMovieDb.splice(i,1)
                    }
                }
            });
        }

        else{
            // let homePageApi = [api_urls.LATEST_MOVIES_API,api_urls.POPULAR_MOVIE_API,api_urls.TRENDING_MOVIES_API];
            // homePageApi.forEach((url,idx )=>{
            //     loadMovieData(url).then(res => genre_promise.then(()=>{
            //                 allData.push(res.results);
            //                 if(allData.length == '3'){
            //                     localStorage.setItem('localMovieDB',JSON.stringify(allData));
            //                     localStorage.setItem('localGenreDb',JSON.stringify(genreData[0].genres))
            //                 }
            //             }
            //     ));
            // })
        }
        
        return [localMovieDb,localGenreDb]

}

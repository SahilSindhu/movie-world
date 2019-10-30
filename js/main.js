import { getGenres,getLatestData,getTrendingData,getPopularData } from './api.js';
import { createRow } from './movie-row.js';

(function(){
        //create a array to hold all the server returned data
        let movieData = [];
        let genre;
        //fetch the data and push into the moviedata array
        async function getData(){
            genre = await getGenres();
            movieData.push(await getLatestData());
            movieData.push(await getTrendingData());
            movieData.push(await getPopularData());
        }

        //initiate the data fetching and pass data to createRow function 
        async function hero(){
            await getData();
            movieData.forEach((ele,idx)=>{
                createRow(ele.results,idx,genre.genres);
            })
        }
        hero();
})();




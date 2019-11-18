import { createRow } from '../app-common-functionalities/movie-row.js';
import { getMovieDB } from './getMovieDB.js';
import { movieQuickView } from '../app-common-functionalities/movie-popup.js';
import{ insertTemplateMarkup } from '../app-common-functionalities/markup-templates.js';

var querryField = document.querySelector('input');
var rating_range = document.querySelector('.rating-range');
var rating =rating_range.value;
var submitButton = document.querySelector('Button');
var filtererdData =[];

var data = getMovieDB();
var localMovieDb =data[0];
var localGenreDb = data[1];

insertTemplateMarkup();
// movieQuickView.addMovieEventListener()

createRow(localMovieDb.filter((ele) => {return ele.vote_average >= rating}),0,localGenreDb);


// createRow(localMovieDb,rating)
function filterMovieData(){
    let userGivenValue = document.querySelector('input').value;
    if(userGivenValue != ''){
       
        let x = new Set()
         localGenreDb.forEach(ele =>{
            if( ele.name.toLowerCase().includes(userGivenValue.toLowerCase())){
                x.add(ele.id)
            }
        });
        let y =new Set();
        localMovieDb.forEach((ele,idx) =>{
            x.forEach((genre)=>{
                if(ele.genre_ids.indexOf(genre) != -1){
                    y.add(ele)
                }
            })
        })
        
        let z = [...y]
        filtererdData = localMovieDb.filter((ele) => {return ((ele.title.toLowerCase().includes(userGivenValue.toLowerCase()) 
                                                               || z.indexOf(ele) != -1)
                                                               && ele.vote_average >= rating)
                                                    });

                                                    
        createRow(filtererdData,0,localGenreDb); 
    }
    else
        createRow(localMovieDb.filter((ele) => {return ele.vote_average >= rating}),0,localGenreDb); 
    
}
submitButton.addEventListener('click',filterMovieData);

rating_range.addEventListener('change',()=>{
    rating =rating_range.value;
    if(filtererdData.length >=1){
        createRow(filtererdData.filter((ele) => {return ele.vote_average >= rating}),0,localGenreDb);
    }
    else{
        createRow(localMovieDb.filter((ele) => {return ele.vote_average >= rating}),0,localGenreDb);
    }
    
});
querryField.addEventListener('keyup',filterMovieData);
movieQuickView.addMovieEventListener();
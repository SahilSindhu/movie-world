import { createRow } from '../common-functionalities/movie-row.js';
import { getMovieDB } from './getMovieDB.js';
import { movieQuickView } from '../common-functionalities/movie-popup.js';
import { insertTemplateMarkup } from '../common-functionalities/markup-templates.js';
import { getMatchedGenre } from './getMatchedGenre.js';

var querryField = document.querySelector('input');
var rating_range = document.querySelector('.rating__range');
var rating =rating_range.value;
var submitButton = document.querySelector('Button');
var filtererdData =new Array();

var data = getMovieDB();
var localMovieDb =data[0];
var localGenreDb = data[1];

insertTemplateMarkup();
createRow(localMovieDb.filter((ele) => {return Math.floor(ele.vote_average/2) >= rating}),0,localGenreDb);
document.querySelectorAll('.menu__item ').forEach(item => item.classList.toggle('menu__item--active'))

// createRow(localMovieDb,rating)
function filterMovieData(){
    let userGivenValue = document.querySelector('input').value;
    rating =rating_range.value;
    if(userGivenValue != ''){
        let matchedGenre = [...getMatchedGenre(userGivenValue,localGenreDb,localMovieDb)];
        filtererdData = localMovieDb.filter((ele) => {return ((ele.title.toLowerCase().includes(userGivenValue.toLowerCase()) 
                                                               || matchedGenre.indexOf(ele) != -1)
                                                               && Math.floor(ele.vote_average/2) >= rating)
                                                    });
        
        createRow(filtererdData,0,localGenreDb); 
        if(!filtererdData.length){
            document.querySelector('.error__message').classList.remove('error__hide');
        }else{
            if(!document.querySelector('.error__message').classList.contains('error__hide'))
                document.querySelector('.error__message').classList.add('error__hide');
        }
        
    }
    else{
        let filtererdData = localMovieDb.filter((ele) => {return Math.floor(ele.vote_average/2) >= rating})
        
            createRow(filtererdData,0,localGenreDb); 
        
            if(!filtererdData.length){
                document.querySelector('.error__message').classList.remove('error__hide');
            }else{
                if(!document.querySelector('.error__message').classList.contains('error__hide'))
                    document.querySelector('.error__message').classList.add('error__hide');
            }
        
    }
      
    
}
submitButton.addEventListener('click',filterMovieData);
rating_range.addEventListener('change',filterMovieData);
querryField.addEventListener('keyup',filterMovieData);

movieQuickView.addMovieEventListener();
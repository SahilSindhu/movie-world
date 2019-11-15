import { getActorFilmographyDetails,getMovieDetails } from '../app-common-functionalities/load-movie-data.js';
//import { allData } from '../app-common-functionalities/constants/allData.js';;
var moviedata;
var rating_range = document.querySelector('.rating-range');
var submitButton = document.querySelector('button');
var rating =rating_range.value;
var movie_data = null;

var allData = JSON.parse(localStorage.getItem('allData'));
allData = [...allData[0],...allData[1],...allData[2]];
var filtererdData;
populateUi(allData,rating)
// allData.forEach(element => {
//     console.log(element)
//     populateUi(element,rating)
// });
function filterMovieData(){
    let userGivenValue = document.querySelector('input').value;
    
    filtererdData = allData.filter((ele) => {return ele.title.toLowerCase().includes(userGivenValue.toLowerCase())});
 
    populateUi(filtererdData,rating)
}

function populateUi(moviedata,rating){
    let row = document.querySelector('.row');
    row.innerHTML = '';
    moviedata.forEach(ele =>{
       if(ele.vote_average >= rating){
            let x = `<section class='coloumn'>
            <h3>${ele.title}</h3>
            <h3>${ele.release_date}</h3>
            <img src='https://image.tmdb.org/t/p/w500/${ele.poster_path}'>
            </section>`
            row.insertAdjacentHTML('beforeend',x);
       }
      
    //    else if(ele.media_type == 'person'){
    //         getActorFilmographyDetails(ele.id).then((res) =>{
    //                 res.cast.forEach(ele =>{
    //                     getMovieDetails(ele.id).then(ele =>{
    //                        console.log(ele)
    //                         let x = `<section class='coloumn'>
    //                         <h3>${ele.title}</h3>
    //                         <h3>${ele.release_date}</h3>
    //                         <img src='https://image.tmdb.org/t/p/w500/${ele.poster_path}'>
    //                         </section>`
    //                         row.insertAdjacentHTML('beforeend',x);
                           
                       
    //                     })
    //                 })
    //             })
    //    }
      
    })
   
}


rating_range.addEventListener('change',()=>{
    rating =rating_range.value;
    console.log(filtererdData)
    if(filtererdData.length >=1){
        populateUi(filtererdData,rating);
    }
    else{
        populateUi(allData,rating);
    }
    
})
submitButton.addEventListener('click',filterMovieData);
document.querySelector('.querry-input').addEventListener('keypress',filterMovieData);
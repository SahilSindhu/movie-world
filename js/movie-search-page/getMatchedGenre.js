export function getMatchedGenre(userInput,localGenreDb,localMovieDb) {
    let genreIds = new Set();
    localGenreDb.forEach(ele =>{
       if( ele.name.toLowerCase().includes(userInput.toLowerCase())){
             genreIds.add(ele.id)
       }
   });
   let matchedGenreId =new Set();
   localMovieDb.forEach((ele,idx) =>{
    genreIds.forEach((genre)=>{
           if(ele.genre_ids.indexOf(genre) != -1){
            matchedGenreId.add(ele)
           }
       })
   })
   return matchedGenreId;
}
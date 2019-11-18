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
        return [localMovieDb,localGenreDb]

}

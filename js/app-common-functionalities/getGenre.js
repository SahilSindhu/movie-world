export function getGenre(movieGenreId, allGenere){
    let movieGenreName = [];
    movieGenreId.forEach((ele)=>{
        allGenere.forEach((all)=>{
            if(ele == all.id){
                movieGenreName.push(all.name)
            }
        })
    })
    return movieGenreName;
}
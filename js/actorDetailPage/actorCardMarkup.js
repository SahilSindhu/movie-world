export function addMovieCards(res) {
    
    let dateSet = new Set();
    let dateArray = []
    res.cast.forEach((ele )=>{dateSet.add(ele.release_date.substr(0,4))});
   
    dateArray = [...dateSet];
    dateArray.sort().reverse().forEach((ele)=>{
        
        let template = document.getElementById("filmList");
        let movieRow = template.content.querySelector(".actor__movie__year");
        let node = document.importNode(movieRow, true);

        let year = node.querySelector('.movie__year__heading');
        year.append(document.createTextNode(ele || 'Year not specified'))
        document.querySelector('.movie__row').insertAdjacentElement('afterbegin',node)

        
        let specificMovie = res.cast.filter(element =>{
            return element.release_date.substr(0,4) == ele;
        })
        specificMovie.forEach(ele =>{
            addSingleCard(ele);
        }) 
    })
}

function addSingleCard(singlemovie) {
        let template = document.getElementById("movie__card");
        let movieCard = template.content.querySelector(".movie__card");
        let node = document.importNode(movieCard, true);

        let movie_name = node.querySelector('.movie__title');
        let movie_year = node.querySelector('.movie__year');
        let movie_character = node.querySelector('.movie__character');

        movie_name.append(document.createTextNode(singlemovie.title));
        movie_year.append(document.createTextNode(singlemovie.release_date))
        movie_character.append(document.createTextNode(singlemovie.character))
        
        document.querySelector('.card__holder').insertAdjacentElement('beforeend',node);
}
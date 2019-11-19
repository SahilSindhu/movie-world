export function getMovieId() {
    var result = null,
        result = window.location.search.split('=')[1];
    return result;
}
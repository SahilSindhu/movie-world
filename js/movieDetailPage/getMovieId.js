export function getMovieId(parameterName) {
    var result = null,
        result = window.location.search.split('=')[1];
    // window.location.search
    //     .substr(1)
    //     .split("&")
    //     .forEach(function (item) {
    //         tmp = item.split("=");
    //         if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    //     });
    //     console.log(result)
    return result;
}
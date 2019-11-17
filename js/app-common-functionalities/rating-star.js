export function ratingStarTemplate(rating) {
    let rating_star = ''
    for (let i = 1; i <= 5; i++) {
        rating_star = `${rating_star} <i class= "fa ${rating >= i ?'fa-star' : 'fa-star-o'}"></i>`
    }
    console.log(rating_star)
    return rating_star;
}
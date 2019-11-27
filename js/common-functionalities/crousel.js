export function addCrousel() {
    $('.movie__list').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });
}
export const settingsCarousel = {
  dots: false,
  infinite: true,
  speed: 500,
  initialSlide: 0,
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '40px',
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20px',
        dots: true
      }
    }
  ]
}

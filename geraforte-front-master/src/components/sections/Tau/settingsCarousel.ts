export const settingsCarousel = {
  dots: true,
  infinite: true,
  speed: 500,
  initialSlide: 0,
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '30px'
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '30px'
      }
    }
  ]
}

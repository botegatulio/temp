import { Settings } from 'react-slick'

export const settingsCarousel: Settings[] = [
  {
    className: 'center',
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  },
  {
    className: 'center',
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: true,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  },
  {
    className: 'center',
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
]

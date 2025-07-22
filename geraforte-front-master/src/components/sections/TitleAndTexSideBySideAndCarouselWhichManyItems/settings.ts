import { Settings } from 'react-slick'

export const settingsCarousel: Settings[] = [
  {
    className: 'center',
    dots: false,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 1,
    slidesPerRow: 5,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesToShow: 1,
          slidesPerRow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesToShow: 1,
          slidesPerRow: 3,
          arrows: false,
          dots: true
        }
      }
    ]
  }
]

import { Settings } from 'react-slick'

export const settingsCarousel: Settings[] = [
  {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    rows: 3,
    slidesToShow: 1,
    slidesPerRow: 6,
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
          slidesPerRow: 2
        }
      }
    ]
  },
  {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 1,
    slidesPerRow: 4,
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
          slidesPerRow: 2
        }
      }
    ]
  },
  {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
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
          slidesToShow: 1
        }
      }
    ]
  },
  {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
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
          slidesToShow: 1
        }
      }
    ]
  },
  {
    className: 'center',
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  }
]

import { Image } from '../commom_types'

type Cards = {
  title: string
  content: string
  image: Image
  imageDesktop?: Image[]
}

type VerticalCards = {
  title: string
  content: string
}

export type SaleProps = {
  header: {
    overline: string
    title: string
    image_mobile?: Image
    image_desktop?: Image
  }
  main_content: {
    overline: string
    title: string
    content: string
    media_content_mobile?: Image
    media_content_desktop?: Image
  }
  cards: Cards[]
  aditionalContent: {
    overline: string
    title: string
    content: string
    media_content_mobile?: Image
    media_content_desktop?: Image
  }
  verticalCards: VerticalCards[]
  aditionalContentTwo: {
    overline: string
    title: string
    content: string
  }
  logos: { url: string }[]
  banner: {
    description: string
    buttonLabel: string
    backgroundImage?: Image
  }
}

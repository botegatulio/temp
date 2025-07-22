import { Image } from '../commom_types'

type Card = {
  id: string
  title: string
  content: string
  icon: Image
}

type Box = {
  id: string
  title: string
  content: string
  icon: Image
  imageDesktop: Image[]
  imageMobile: Image
}

export type QualificationProps = {
  header: {
    overline: string
    title: string
    image_mobile?: Image
    image_desktop?: Image
  }
  sectionOne: {
    overline: string
    title: string
  }
  boxes: Box[]
  cards: Card[]
  sectionFooter: {
    overline: string
    title: string
    content: string
    imageMobile: Image
    imageDesktop: Image
  }
}

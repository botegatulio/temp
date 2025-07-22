import { Image } from '../commom_types'

export type DiversityProps = {
  header: {
    overline: string
    title: string
    image_mobile?: Image
    image_desktop?: Image
  }
  mainSection: {
    overline: string
    title: string
    content: string
  }
  banner: {
    text: string
    imageMobile: Image
    imageDesktop: Image
  }
  sectionCards: {
    overline: string
    title: string
    content: string
  }
  cards: {
    icon: Image
    text: string
  }[]
}

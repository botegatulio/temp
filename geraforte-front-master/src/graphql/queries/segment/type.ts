import { Image } from '../commom_types'

type ItemTab = {
  id: string
  icon?: Image
  description: string
  title: string
  content: string
  imageDesktop: Image[]
}

export type SegmentProps = {
  header: {
    overline: string
    title: string
    imageMobile?: Image
    imageDesktop?: Image
  }
  mainSection: {
    overline: string
    title: string
    content: string
    imageMobile?: Image
    imageDesktop?: Image
  }
  tab: {
    overline: string
    title: string
    items: ItemTab[]
  }
  sequencialCards: {
    overline: string
    title: string
    cards: {
      title: string
      image?: Image
    }[]
  }
  gallery: {
    title: string
    caption: string
    link: string
    image?: Image
  }[]
  banner: {
    description: string
    buttonCta: string
    backgroundImage?: Image
    link: string
  }
}

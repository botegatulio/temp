import { Image } from '../commom_types'

export type HomeProps = {
  bannerHome: {
    link: string
    imageMobile: Image
    imageDesktop: Image
  }[]
  categories: {
    overline: string
    title: string
  }
  cardsCategory: {
    id: string
    link: string
    title: string
    text: string
    icon: Image
    imageCardMobile: Image
    imageCardDesktop: Image
  }[]
  banners: {
    title: string
    text: string
    buttonLabel: string
    link?: string
    backgroundImage?: Image
  }[]
  sectionTurnKey: {
    overline: string
    title: string
    content: string
    cards: {
      id: string
      number: string
      icon: Image
      text: string
    }[]
  }
  bottomTurnkey: {
    text: string
    link: string
  }
  cases: {
    id: string
    overline: string
    title: string
    link: string
    items: {
      title: string
      link: string
      image: Image
    }[]
  }
  advantages: {
    id: string
    icon: Image
    name: string
    buttonLabel: string
    title: string
    content: string
    link: string
    imageBackground: Image
  }[]
  sectionOurHistory: {
    overline: string
    title: string
    content: string
    video: string
  }
  sectionNews: {
    overline: string
    title: string
  }
  lastNews?: {
    visibleDate: string
    slug: string
    headerNews: {
      author: string
      title: string
    }
    resume: string
    featureImage?: Image
  }[]
}

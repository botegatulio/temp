import { Image } from '../commom_types'

type Card = {
  id: string
  title: string
  subtitle: string
  imageCardMobile?: Image
  imageCardDesktop?: Image
  textButton?: string
  link?: string
}

export type ProductsProps = {
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
  cards?: Card[]
  bannerSecondary: {
    content: string
    imageMobile: Image
    imageDesktop: Image
  }
  sectionTurnkey: {
    overline: string
    title: string
    content: string
  }
  cardsWithNumbers: {
    text: string
    number: string
    icon?: Image
  }[]
  sectionClients: {
    overline: string
    title: string
    logos: Image[]
  }
  suppliers: {
    overline: string
    title: string
    content: string
  }
  logosSuppliers: Image[]
  bannerTwo: {
    title: string
    text: string
    imageMobile?: Image
    imageDesktop?: Image
  }
  tabsWithBanner: {
    title: string
    content: string
    banner?: {
      description: string
      buttonCta: string
      backgroundImage?: Image
      linkCta: string
    }
  }[]
  bannerBottom: {
    description: string
    buttonCta: string
    backgroundImage: Image
  }
}

export type ProductItemProps = {
  header: {
    overline: string
    title: string
    imageMobile?: Image
    imageDesktop?: Image
  }
  mainSection: {
    content: string
    logo?: Image
    image?: Image
  }
  titleTable?: {
    __typename: string
    titleTable?: string
  }[]
  headerTable: {
    __typename: string
    header: {
      cell: string
    }[]
  }[]
  rowsTable: {
    __typename: string
    cellsRow: {
      content?: string
      file?: {
        url: string
      }[]
    }[]
  }[]
  sectionTwo: {
    overline: string
    title: string
    products: {
      id: string
      link: string
      logo?: Image
      image?: Image[]
    }[]
  }
  banner: {
    description: string
    buttonCta: string
    backgroundImage?: Image
    link?: string
  }
}

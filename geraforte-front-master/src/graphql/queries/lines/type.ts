import { Image } from '../commom_types'

type ProductProps = {
  overline: string
  title: string
  gallery?: {
    link: string
    thumbnail: Image
    image: Image[]
  }[]
}

type BannerProps = {
  id: string
  description: string
  buttonCta: string
  link: string
  backgroundImage?: Image
}

export type LineAProps = {
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
  products: ProductProps[]
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
  banners?: BannerProps[]
}

export type LineBProps = {
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
  sectionDrawer: {
    title: string
    content: string
    drawer: {
      title: string
      content: string
      images: Image[]
    }[]
  }
  sections: {
    id: string
    title: string
    content: string
    gallery: Image[]
  }[]
  banners: {
    id: string
    link: string
    description: string
    buttonLabel: string
    backgroundImage?: Image
  }[]
}

export type LineCProps = {
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
  drawer: {
    id: string
    title: string
    content: string
  }[]
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
  banner: {
    id: string
    description: string
    buttonLabel: string
    backgroundImage?: Image
    link: string
  }
  simpleCharts: {
    items?: {
      title: string
      text: string
      image: Image
    }[]
  }
}

export type LineDProps = {
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
  advantages: {
    overline: string
    title: string
    cards?: {
      id: string
      title: string
      image?: Image
    }[]
  }
  advantagesContent: string
  products: {
    id: string
    title: string
    content: string
    imageMobile?: Image
    image?: Image[]
  }[]
}

export type LineEProps = {
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
  cardWithNumbers: {
    id: string
    number: string
    text: string
  }[]
  gallery: Image[]
  products: {
    id: string
    title: string
    content: string
    link: string
    images: Image[]
  }[]
}

export type LineFProps = {
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
  differentials: {
    title: string
    content: string
    images: Image[]
  }
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
  cardProducts: {
    id: string
    title: string
    content: string
    images: Image[]
  }[]
  kitSection: {
    title: string
    content: string
  }
  titleTableTwo?: {
    __typename: string
    titleTable?: string
  }[]
  headerTableTwo: {
    __typename: string
    header: {
      cell: string
    }[]
  }[]
  rowsTableTwo: {
    __typename: string
    cellsRow: {
      content?: string
      file?: {
        url: string
      }[]
    }[]
  }[]
  titleTableThree?: {
    __typename: string
    titleTable?: string
  }[]
  headerTableThree: {
    __typename: string
    header: {
      cell: string
    }[]
  }[]
  rowsTableThree: {
    __typename: string
    cellsRow: {
      content?: string
      file?: {
        url: string
      }[]
    }[]
  }[]
  titleTableFour?: {
    __typename: string
    titleTable?: string
  }[]
  headerTableFour: {
    __typename: string
    header: {
      cell: string
    }[]
  }[]
  rowsTableFour: {
    __typename: string
    cellsRow: {
      content?: string
      file?: {
        url: string
      }[]
    }[]
  }[]
  carousel: {
    images: Image[]
  }
}

export type ItemLinesProp = {
  pageA?: LineAProps
  pageB?: LineBProps
  pageC?: LineCProps
  pageD?: LineDProps
  pageE?: LineEProps
  pageF?: LineFProps
}

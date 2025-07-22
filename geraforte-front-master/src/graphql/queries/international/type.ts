import { Image } from '../commom_types'

type Banner = {
  id: string
  description: string
  buttonLabel: string
  link: string
  backgroundImage?: Image
}

export type InternationalProps = {
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
    imageMobile?: Image
    imageDesktop?: Image
  }
  titleTable?: {
    __typename: string
    titleTable: string
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
  bannersFooter: Banner[]
}

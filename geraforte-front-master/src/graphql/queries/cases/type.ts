import { Image } from '../commom_types'

type Case = {
  id: string
  overline: string
  title: string
  subtitle: string
  content: string
  anchor: string
  gallery?: { id: string; caption: string; image: Image }[]
}

export type CasesProps = {
  header: {
    overline: string
    title: string
    image_mobile?: Image
    image_desktop?: Image
  }
  cases: Case[]
  banner: {
    description: string
    buttonCta: string
    backgroundImage?: Image
    link: string
  }
}

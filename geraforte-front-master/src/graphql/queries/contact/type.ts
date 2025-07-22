import { Image } from '../commom_types'

export type ContactProps = {
  header: {
    overline: string
    title: string
    image_mobile?: Image
    image_desktop?: Image
  }
}

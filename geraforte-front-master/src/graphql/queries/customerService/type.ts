import { Image } from '../commom_types'

export type CustomerServicePageSacProps = {
  header: {
    overline: string
    title: string
    image_mobile?: Image
    image_desktop?: Image
  }
  sectionCustomerService: {
    title: string
    content: string
  }
  sectionOmbudsman: {
    title: string
    content: string
  }
}

import { Image } from '../commom_types'

export type AboutProps = {
  id: string
  header: {
    overline: string
    title: string
    image_mobile: Image
    image_desktop: Image
  }
  sectionOne: {
    overline: string
    title: string
    content: string
  }
  carousel_one: {
    Images: Image[]
  }
  video_youtube: string
  section_two: {
    overline: string
    title: string
    content: string
    aditional_content: {
      title: string
      image?: Image
    }
    aditional_content_two: {
      title: string
      image?: Image
    }
  }
}

import { Image } from '../commom_types'

type BannerSocialMediaProps = {
  linkedin?: string
  twitter?: string
  facebook?: string
  youtube?: string
  instagram?: string
  backgroundImage?: Image
  title: string
}
export type NewsPageProps = {
  newsPage: {
    header: {
      overline: string
      title: string
      imageMobile?: Image
      imageDesktop?: Image
    }
    bannerSocialMedia: BannerSocialMediaProps
  }
  newsItems: {
    slug_en: string
    slug_pt: string
    slug_es: string
    currentSlug: string
    title?: string
    featureImage?: Image
    header: {
      author: string
      title?: string
    }
    resume: string
    content: string
  }[]
}

export type NewsItemProps = {
  visibleDate: string
  headerNews: {
    author?: string
    title?: string
    imageMobile?: Image
    imageDesktop?: Image
  }
  content?: string
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
  bannerNewsItem: {
    description: string
    buttonLabel: string
    link: string
    backgroundImage: Image
  }
}

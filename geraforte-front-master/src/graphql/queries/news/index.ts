export type { NewsPageProps, NewsItemProps } from './type'

export const get_graphql_query_page_news = (lang = 'pt') => /* GraphQL */ `
  query {
    newsPage {
      header {
        overline: overline_${lang}
        title: title_${lang}
        imageMobile: image_mobile {
          url
        }
        imageDesktop: image_desktop {
          url
        }
      }
      bannerSocialMedia: banner_social_media {
        linkedin
        twitter
        facebook
        youtube
        instagram
        backgroundImage: background_image {
          url
        }
        title: title_social_media_${lang}
      }                       
    }
    newsItems(sort: "visible_date:desc") {
      slug_en
      slug_pt
      slug_es
      currentSlug: slug_${lang} 
      title: titlepage_${lang}
      featureImage: featured_image {
        url
      }      
      header: header_news {
        author
        title: Post_title_${lang}
      }
      resume: resume_${lang}
      content: Content_${lang}
    }     
  }
`

export const get_graphql_query_all_news = () => /* GraphQL */ `
  query {
    newsItems {
      slugEn: slug_en
      slugPt: slug_pt
      slugEs: slug_es
    }
  }
`

export const get_graphql_query_newsItem_by_slug_and_language = (
  slug = '',
  lang = 'en'
) => /* GraphQL */ `
  query {
    newsItems(where: { slug_${lang}: "${slug}" }) {
      visibleDate: visible_date
      headerNews: header_news {
        author
        title: Post_title_${lang}
        imageMobile: mobile {
          url
        }
        imageDesktop: Desktop {
          url
        }
      }
      content: Content_${lang}
    }
    lastNews: newsItems(
      where: { 
        slug_${lang}_ne: "${slug}"
      },
      sort: "visible_date:desc",
      limit: 3
      ) {
      visibleDate: visible_date
      slug:  slug_${lang}
      headerNews: header_news {
        author
        title: Post_title_${lang}
      }   
      resume: resume_${lang}   
      featureImage: featured_image {
        url
      } 
    }
    newsPage {
      bannerNewsItem {
        description: description_${lang}
        buttonLabel: button_cta_${lang}
        link: link_${lang}
        backgroundImage: background_image {
          url
        }
      }
    }
    
  }
`

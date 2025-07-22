export type { DiversityProps } from './type'

const get_graphql_query = (lang = 'en') => /* GraphQL */ `
  query {
    diversity {
      header {
        overline: overline_${lang}
        title: title_${lang}
        image_mobile {
          url
        }        
        image_desktop {
          url
        } 
      }
      mainSection: main_content {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}   
      }
      banner {
        text: CTA_banner_${lang}
        imageMobile: image_mobile {
          url
        }
        imageDesktop: image_desktop {
          url
        }
      }
      sectionCards: section_cards {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}
      }  
      cards: card_icon {
        icon {
          url
        }
        text: text_${lang}
      }        
    }
  }
`

export default get_graphql_query

export type { QualificationProps } from './type'

const get_graphql_query = (lang = 'en') => /* GraphQL */ `
  query {
    qualification {
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
      sectionOne: component_title {
        overline: overline_${lang}
        title: title_${lang}
      }  
      cards: card_simple_title_and_content {
        id
        title: title_${lang}
        content: content_${lang}   
        icon {
          url
        }        
      }     
      boxes {
        id
        title: title_${lang}
        content: content_${lang}
        icon {
          url
        }        
        imageDesktop: image {
          url
        }
        imageMobile: image_mobile {
          url
        }
      }
      sectionFooter: section_footer {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}
        imageMobile: media_content_mobile {
          url
        }
        imageDesktop: media_content_desktop {
          url
        }
      }            
    }
  }
`

export default get_graphql_query

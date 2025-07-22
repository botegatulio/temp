export type { AboutProps } from './type'

const get_graphql_query = (lang = 'en') => /* GraphQL */ `
  query {
    about {
      id
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
      sectionOne: section_one {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}   
      }
      carousel_one {
        Images {
          url
        }
      }
      video_youtube
      section_two {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}
        aditional_content {
          title: title_${lang}
          image {
            url
          }
        } 
        aditional_content_two {
          title: title_${lang}
          image {
            url
          }
        }        
     }
      
    }
  }
`

export default get_graphql_query

export type { CasesProps } from './type'

const get_graphql_query = (lang = 'en') => /* GraphQL */ `
  query {
    cases: case {
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
      cases: Case {
        id
        overline: overline_${lang}
        title: title_${lang}
        subtitle: subtitle_${lang}
        content: content_${lang}
        anchor
        gallery {
          id
          caption: caption_${lang}
          image {
            url
          }
        }
      } 
      banner: banner_cta {
        description: description_${lang}
        buttonCta: button_cta_${lang}
        link: link_${lang}
        backgroundImage: background_image {
          url
        }
      }           
    }
 }
`

export default get_graphql_query

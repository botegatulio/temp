export type { ContactProps } from './type'

const get_graphql_query = (lang = 'en') => /* GraphQL */ `
  query {
    contact {
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
    }
  }
`

export default get_graphql_query

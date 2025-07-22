export type { CustomerServicePageSacProps } from './type'

const get_graphql_query = (lang = 'en') => /* GraphQL */ `
  query {
    customerServicePageSac {
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
      sectionCustomerService: SectionCustomerService {
        title: title_${lang}
        content: content_${lang}
      }
      sectionOmbudsman {
        title: title_${lang}
        content: content_${lang}
      }  
    }
  }
`

export default get_graphql_query

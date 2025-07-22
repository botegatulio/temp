export type { SaleProps } from './type'

const get_graphql_query = (lang = 'en') => /* GraphQL */ `
  query {
    sale {
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
      main_content {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}   
        media_content_mobile {
          url
        }
        media_content_desktop {
          url
        }        
      }    
      cards: card_two {
        title: title_${lang}
        content: content_${lang}
        image: image_mobile {
          url
        }
        imageDesktop: image {
          url
        }
      }  
      aditionalContent:adiction_content {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}
        media_content_mobile {
          url
        }
        media_content_desktop {
          url
        }
      } 
      verticalCards:vertical_card {
        title: title_${lang}
        content: content_${lang}
      }      
      aditionalContentTwo:adiction_content_2 {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}
      } 
      logos {
        url
      }  
      banner:banner_CTA {
        description: description_${lang}
        buttonLabel:button_cta_${lang}
        backgroundImage:background_image {
          url
        }
      }                         
    }
  }
`

export default get_graphql_query

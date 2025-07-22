export type { SegmentProps } from './type'

const get_graphql_query = (lang = 'en') => /* GraphQL */ `
  query {
    segment {
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
      mainSection: main_section {
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
      tab: Tab {
        overline: overline_section_tab_${lang}       
        title:title_section_tab_${lang}
        items: item_tab {
          id
          icon: icon_item_tab {
            url
          }
          description: Description_${lang}
          title: title_${lang}
          content: content_${lang}
          imageDesktop: image_desktop_item_tab {
            url
          }
        }
      } 
      sequencialCards: sequence_cards {
        overline: overline_${lang}
        title: title_${lang}
        cards {
          title: title_${lang}
          image {
            url
          }
        }
      }  
      gallery {      
        title: title_${lang}
        caption: caption_${lang}
        link: link_${lang}
        image {
          url
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

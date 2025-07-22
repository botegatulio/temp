export type { ProductsProps, ProductItemProps } from './type'

export const get_graphql_query_page_product = (lang = 'en') => /* GraphQL */ `
  query {
    products: productsA {
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
      cards: card_buttom_link {
        id
        title: title_${lang}
        subtitle: subtitle_${lang}
        imageCardMobile: image_card_mobile {
          url
        }
        imageCardDesktop: image_card_desktop {
          url
        }        
        textButton: text_button_${lang}
        link: link_${lang}
      }   
      bannerSecondary: banner_secondary {
        content: CTA_banner_${lang}
        imageMobile: image_mobile {
          url
        }
        imageDesktop: image_desktop {
          url
        }
      }
      sectionTurnkey: section_turnkey {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}
      }    
      cardsWithNumbers: card_icon_numbers {
        text: text_card_${lang}
        number: number_card
        icon: icon_card {
          url
        }        
      } 
      sectionClients: gallery_logos {
        overline: overline_${lang}
        title: title_${lang}
        logos: images_gallery {
          url
        }
      }  
      suppliers: section_providers {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}
      }  
      logosSuppliers: gallery_logos_providers {
        url
      }                   
      bannerTwo: banner_title_and_text {
        title: title_${lang}
        text: text_${lang}
        imageMobile: image_mobile {
          url
        }
        imageDesktop: image_desktop {
          url
        }        
      }   
      tabsWithBanner: tabs_banner {
        title: title_${lang}
        content: content_${lang}
        banner {
          description: description_${lang}
          buttonCta: button_cta_${lang}
          linkCta: link_${lang}
          backgroundImage: background_image {
            url
          }
        }
      } 
      bannerBottom: Banner_bottom {
        description: description_${lang}
        buttonCta: button_cta_${lang}
        backgroundImage: background_image {
          url
        }
      }              
    }
  }
`

export const get_graphql_query_all_products = () => /* GraphQL */ `
  query {
    products {
      slugEn: slug_en
      slugPt: slug_pt
      slugEs: slug_es
    }
  }
`

export const get_product_by_slug_and_language = (
  slug = '',
  lang = 'pt'
) => /* GraphQL */ `
  query {
    products(where: { slug_${lang}: "${slug}" }) {
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
      mainSection: Content_product {
        content: content_${lang}
        logo {
          url
        }
        image: Image {
          url
        }
      }
      titleTable: table {
        __typename
        ... on ComponentTablesTitleTable {
          titleTable: title_table_${lang}
        }
      }
      headerTable: table {
        __typename
        ... on ComponentTablesHeader {
          header: cel_header {
            cell: cel_header_${lang}
          }
        }
      }
      rowsTable: Rows_table {
        __typename
        ... on ComponentTablesRow {
          cellsRow: cels_row {
            content: content_cel_${lang}
            file: doc_pdf {
              url
            }
          }
        }
      }
      sectionTwo: CTA_others {
        overline: overline_${lang}
        title: title_${lang}
        products: Prodcucts {
          id
          link: link_${lang}
          logo {
            url
          }
          image {
            url
          }
        }
      }
      banner {
        description: description_${lang}
        buttonCta: button_cta_${lang}
        backgroundImage: background_image {
          url
        }
        link: link_${lang}
      }                              
    }
  }
`

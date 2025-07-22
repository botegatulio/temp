export type {
  ItemLinesProp,
  LineAProps,
  LineBProps,
  LineCProps,
  LineDProps,
  LineEProps,
  LineFProps
} from './type'

export const get_graphql_query_all_lines = () => /* GraphQL */ `
  query {
    categoriesTypeA: categoryAS {
      slug_en
      slug_pt
      slug_es
      metaInfo: Meta_info {
        title: title_pt
      }
    }
    categoriesTypeB: categoryBS {
      slug_en
      slug_pt
      slug_es
      metaInfo: Meta_info {
        title: title_pt
      }
    }
    categoriesTypeC: categoryCS {
      slug_en
      slug_pt
      slug_es
      metaInfo: Meta_info {
        title: title_pt
      }
    }
    categoriesTypeD: categoryDS {
      slug_en
      slug_pt
      slug_es
      metaInfo: Meta_info {
        title: title_pt
      }
    }
    categoriesTypeE: categoryES {
      slug_en
      slug_pt
      slug_es
      metaInfo: Meta_info {
        title: title_pt
      }
    }
    categoriesTypeF: categoryFS {
      slug_en
      slug_pt
      slug_es
    }
  }
`

export const get_line_by_slug_and_language = (
  slug = '',
  lang = 'en'
) => /* GraphQL */ `
  query {
    categoriesA: categoryAS(where: { slug_${lang}: "${slug}" } ) {
      slug_en
      slug_pt
      slug_es      
      metaInfo: Meta_info {
        title: title_pt
      }
      header: Header {
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
      products: section_products {
        overline: overline_${lang}
        title: title_${lang}        
        gallery {
          link: link_${lang}
          thumbnail: logo {
            url
          }
          image {
            url
          }
        }
      }  
      titleTable: Table {
        __typename
        ... on ComponentTablesTitleTable {
          titleTable: title_table_${lang}
        }
      }      
      headerTable: Table {
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
      banners: Banners {
        id
        description: description_${lang}
        buttonCta: button_cta_${lang}
        link: link_${lang}
        backgroundImage: background_image {
          url
        }
      }            
    }
    categoriesB: categoryBS(where: { slug_${lang}: "${slug}" } ) {
      slug_en
      slug_pt
      slug_es      
      metaInfo: Meta_info {
        title: title_pt
      }
      header: Header {
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
      sectionDrawer: section_drawer {
        title: title_${lang}
        content: content_${lang}
        drawer {
          title: title_${lang}
          content: content_${lang}
          images: image {
            url
          }          
        }
      }
      sections: Section_six {
        id
        title: title_${lang}
        content: content_${lang}
        gallery {
          url
        }
      } 
      banners: banner_cta {
        id
        link: link_${lang}
        description: description_${lang}
        buttonLabel: button_cta_${lang}
        backgroundImage: background_image {
          url
        }
      }                       
    }  
    categoriesC: categoryCS(where: { slug_${lang}: "${slug}" } ) {
      header: header {
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
      drawer {
        id
        title: title_${lang}
        content: content_${lang}       
      } 
      titleTable: Table {
        __typename
        ... on ComponentTablesTitleTable {
          titleTable: title_table_${lang}
        }
      } 
      headerTable: Table {
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
      banner: banner_cta {
        id
        description: description_${lang}
        buttonLabel: button_cta_${lang}
        link: link_${lang}
        backgroundImage: background_image {
          url
        }
      }
      simpleCharts: SimpleCharts {
        items: Item {
          title: title_${lang} 
          text: text_${lang} 
          image {
            url
          }
        }
      }                  
    }
    categoriesD: categoryDS(where: { slug_${lang}: "${slug}" } ) {
      header: header {
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
      advantages: Advantages {
        overline: overline_${lang}
        title: title_${lang}
        cards {
          id
          title: title_${lang}
          image {
            url
          }
        }
      } 
      advantagesContent: Advantages_content_${lang}        
      products {
        id
        title: title_${lang}
        content: content_${lang}
        imageMobile: image_mobile {
          url
        }        
        image {
          url
        }
      }
    } 
    categoriesE: categoryES(where: { slug_${lang}: "${slug}" } ) {
      header: Header {
        overline: overline_${lang}
        title: title_${lang}
        imageMobile: image_mobile {
          url
        }
        imageDesktop: image_desktop {
          url
        }
      }
      mainSection: Main_section {
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
      cardWithNumbers: card_number_text {
        id
        number
        text: text_${lang}
      }  
      gallery {
        url
      } 
      products: Products {
        id
        title: title_${lang}
        content: content_${lang}
        link: link_${lang}
        images: image {
          url
        }        
      }                    
    }  
    categoriesF: categoryFS(where: { slug_${lang}: "${slug}" } ) {
      header: Header {
        overline: overline_${lang}
        title: title_${lang}
        imageMobile: image_mobile {
          url
        }
        imageDesktop: image_desktop {
          url
        }
      }
      mainSection: Main_section {
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
      differentials {
        title: title_${lang}
        content: content_${lang}
        images: image {
          url
        }        
      }
      headerTable: Table {
        __typename
        ... on ComponentTablesHeader {
          header: cel_header {
            cell: cel_header_${lang}
          }
        }
      }  
      rowsTable: Row_table {
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
      cardProducts: Cards_products {
        id
        title: title_${lang}
        content: content_${lang}
        images: image {
          url
        }
      }
      kitSection: Kit_section {
        title: title_${lang}
        content: content_${lang}
      }   
      titleTableTwo: Table_2 {
        __typename
        ... on ComponentTablesTitleTable {
          titleTable: title_table_${lang}
        }
      } 
      headerTableTwo: Table_2 {
        __typename
        ... on ComponentTablesHeader {
          header: cel_header {
            cell: cel_header_${lang}
          }
        }
      }
      rowsTableTwo: Row_2 {
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
      titleTableThree: Table_3 {
        __typename
        ... on ComponentTablesTitleTable {
          titleTable: title_table_${lang}
        }
      } 
      headerTableThree: Table_3 {
        __typename
        ... on ComponentTablesHeader {
          header: cel_header {
            cell: cel_header_${lang}
          }
        }
      }
      rowsTableThree: Rows_3 {
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
      titleTableFour: Table_4 {
        __typename
        ... on ComponentTablesTitleTable {
          titleTable: title_table_${lang}
        }
      } 
      headerTableFour: Table_4 {
        __typename
        ... on ComponentTablesHeader {
          header: cel_header {
            cell: cel_header_${lang}
          }
        }
      } 
      rowsTableFour: Rows_4 {
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
      carousel {
        images: Images {
          url
        }
      }                                                          
    }   
  }
`

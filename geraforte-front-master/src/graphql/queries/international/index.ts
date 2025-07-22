export type { InternationalProps } from './type'

const get_graphql_query = (lang = 'en') => /* GraphQL */ `
  query {
    international {
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
      titleTable: Tabela {
        __typename
        ... on ComponentTablesTitleTable {
          titleTable: title_table_${lang}
        }
      }    
      headerTable: Tabela {
        __typename
        ... on ComponentTablesHeader {
          header: cel_header {
            cell: cel_header_${lang}
          }
        }
      }    
      rowsTable: rows_table {
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
      bannersFooter: cta_footer {      
        id
        description: description_${lang}
        buttonLabel: button_cta_${lang}
        link: link_${lang}
        backgroundImage: background_image {
          url
        }
      }       

    }
  
  }
`

export default get_graphql_query

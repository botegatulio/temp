export type { HomeProps } from './type'

const get_graphql_query = (lang = 'pt') => /* GraphQL */ `
  query {
    home {
      bannerHome: banner_home {
        link: link_${lang}
        imageMobile: image_mobile_${lang} {
          url
        }
        imageDesktop: image_desktop_${lang} {
          url
        }
      }
      categories: Categorys_home {
        overline: overline_${lang}
        title: title_${lang}
      }
      cardsCategory: Cards_categories_home {
        id
        link: link_${lang}
        title: title_${lang}
        text: text_${lang}
        icon {
          url
        }
        imageCardMobile: image_card_mobile {
          url
        }
        imageCardDesktop: image_card_desktop {
          url
        }        
      } 
      banners: Banner_CTA_home {
        title: title_${lang}
        text: text_${lang}
        buttonLabel: buton_text_${lang}
        link: link_${lang}
        backgroundImage: BG {
          url
        }
      }  
      sectionTurnKey: TurnKey_home {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}
        cards {
          id
          number: number_card
          icon: icon_card {
            url
          }
          text: text_card_${lang}
        }
      }
      bottomTurnkey: bottom_turnkey {
        text: text_${lang}
        link: link_${lang}
      }
      cases: Cases_home {
        id
        overline: overline_${lang}
        title: title_${lang}
        link: link_${lang}
        items: case_item_home {
          title: title_${lang}
          link: link_${lang}
          image {
            url
          }
        }
      } 
      sectionOurHistory: video_home {
        overline: overline_${lang}
        title: title_${lang}
        content: content_${lang}
        video: link_video_${lang}
      }     
      sectionNews: News_home {
        overline: Overline_${lang}
        title: title_${lang}
      }    
      
      advantages: Drawer_home {
        id
        icon {
          url
        }
        name: name_item_${lang}
        buttonLabel: buttom_${lang}
        title: title_${lang}
        content: content_${lang}
        link: link_${lang}
        imageBackground: image_bg {
          url
        }
      }
    }
    lastNews: newsItems( where: {show_at_home: true}, limit: 3, sort: "visible_date:desc") {
      visibleDate: visible_date
      slug: slug_${lang}
      headerNews: header_news {
        author
        title: Post_title_${lang}
      }   
      resume: resume_${lang}   
      featureImage: featured_image {
        url
      } 
    }

   
  }
`

export default get_graphql_query

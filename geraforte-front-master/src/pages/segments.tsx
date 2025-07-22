import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import HeaderInternal from 'components/sections/HeaderInternal'
import TextAndImageSection from 'components/sections/TextAndImageSection'
import { Box, Container, Grid } from '@material-ui/core'
import SigmaBanner from 'components/banners/Sigma'
import ApplicationsProject from 'components/sections/ApplicationsProject'
import TitleAndHighlightedItems from 'components/sections/TitleAndHighlightedItems'
import CarouselBeta from 'components/Carousel/CarouselBeta'
import get_graphql_query, { SegmentProps } from 'graphql/queries/segment'
import client from 'graphql/client'
import theme from 'theme'
import SegmentsGallery from 'components/sections/SegmentsGallery'

export default function Segments({
  header,
  mainSection,
  sequencialCards,
  gallery,
  banner,
  tab
}: SegmentProps) {
  return (
    <>
      <HeaderInternal
        headText={{
          top: header.overline,
          title: header.title
        }}
        bgImageDesktop={header.imageDesktop?.url || ''}
        bgImage={header.imageDesktop?.url || ''}
      />
      <TextAndImageSection
        textTop={mainSection.overline}
        title={mainSection.title}
        url={
          mainSection.imageDesktop?.url ||
          'https://via.placeholder.com/1024x768/efefef/464241'
        }
        content={mainSection.content}
        backgroundImageUrlDesktop={'/img/template-a-first-section-bg.png'}
        backgroundPositionDesktop="calc(50% + 500px) 16px"
      />
      <ApplicationsProject
        overline={tab.overline}
        title={tab.title}
        styleSection={{ backgroundColor: '#cccccc' }}
        items={tab.items.map((item) => {
          return {
            title: item.title,
            label: item.description,
            content: item.content,
            backgroundImageUrl: item.imageDesktop[0].url,
            iconUrl: item.icon?.url
          }
        })}
      />
      <TitleAndHighlightedItems
        styleSection={{ backgroundColor: '#f5f5f5' }}
        topText={sequencialCards.overline}
        title={sequencialCards.title}
        items={sequencialCards.cards.map((item) => {
          return {
            icon: <img src={item.image?.url} />,
            title: item.title
          }
        })}
      />
      <SegmentsGallery>
        <CarouselBeta
          items={gallery.map((item, key) => {
            return {
              url:
                item.image?.url ||
                `https://via.placeholder.com/570x401/323232/ffffff/?text=${key}`,
              link: item.link,
              text: {
                overTitle: item.title,
                title: item.caption
              }
            }
          })}
        />
      </SegmentsGallery>
      <section
        style={{ backgroundColor: '#e0e0e0', padding: theme.spacing(4, 0) }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12}>
              <Box mt={2}>
                <SigmaBanner
                  text={banner.description}
                  linkCta={banner.link}
                  labelCta={banner.buttonCta}
                  backgroundImageUrl={banner.backgroundImage?.url}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  const { segment } = await client.request(get_graphql_query(locale))
  return {
    props: {
      ...segment,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

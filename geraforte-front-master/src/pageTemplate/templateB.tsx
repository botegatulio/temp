import React from 'react'
import HeaderInternal from 'components/sections/HeaderInternal'
import TextAndImageSection from 'components/sections/TextAndImageSection'
import TwoColumnsWithAccordion from 'components/sections/TwoColumnsWithAccordion'
import TextAndCarouselWhichManyItems from 'components/sections/TextAndCarouselWhichManyItems'
import SigmaBanner from 'components/banners/Sigma'
import { Box, Container, Grid } from '@material-ui/core'
import { LineBProps } from 'graphql/queries/lines'

const getBackgroundColor = (index: number) => {
  if ((index + 1) % 3 === 0) {
    return '#fcfcfb'
  }
  if (index + 1 == 2) {
    return '#474747'
  }
  if ((index + 1) % 4 === 0) {
    return '#e0e0e0'
  }
  return '#fcfcfb'
}

const getBackgroundImageUrlDesktop = (index: number) => {
  if ((index + 1) % 4 === 0) {
    return 'url("/img/diesel-line-detail-standard-line.png"), url("")'
  }
  if ((index + 1) % 3 === 0) {
    return 'url("/img/3a-detalhe-titulo-turnkey.png"), url("")'
  }
  if ((index + 1) % 2 === 0) {
    return 'url("/img/detalhe-titulo-torre-resfriamento.png"), url("/img/bg-abstract-black.jpg")'
  }

  return 'url("/img/3a-detalhe-titulo-turnkey.png"), url("")'
}

const getColorText = (index: number) => {
  if (index + 1 === 2) {
    return 'white'
  }

  return 'black'
}

export default function ModelB({
  header,
  mainSection,
  sectionDrawer,
  sections,
  banners
}: LineBProps) {
  return (
    <>
      <HeaderInternal
        headText={{
          top: header.overline,
          title: header.title
        }}
        bgImage={header.imageMobile?.url || ''}
        bgImageDesktop={header.imageDesktop?.url || ''}
      />
      <TextAndImageSection
        textTop={mainSection.overline}
        title={mainSection.title}
        url={
          mainSection.imageDesktop?.url ||
          'https://via.placeholder.com/1024x768/efefef/464241'
        }
        content={mainSection.content}
        backgroundImageUrlDesktop="/img/detalhe-bg-destaque.png"
        backgroundPositionDesktop="calc(50% + 250px) 15px"
      />
      <TwoColumnsWithAccordion
        title={sectionDrawer.title}
        text={sectionDrawer.content}
        items={sectionDrawer.drawer.map((item) => {
          return {
            title: item.title,
            content: item.content,
            urlImg: item.images.length
              ? item.images[0].url
              : 'https://via.placeholder.com/560x350/f5f5f5/332a24'
          }
        })}
        backgroundUrlImage="/img/abstract-bg-desktop.webp"
      />
      {sections &&
        sections.map((sectionItem, index) => {
          return (
            <TextAndCarouselWhichManyItems
              key={sectionItem.id}
              title={sectionItem.title}
              text={sectionItem.content}
              items={sectionItem.gallery.map((item) => {
                return {
                  url: item.url
                }
              })}
              backgroundPosition="calc(50% + 120px) 38px"
              backgroundImageUrl={
                index % 2 === 1
                  ? 'url("/img/slanted_rectangle_white_detail.png")'
                  : 'url("/img/slanted_rectangle_grey_detail.png")'
              }
              backgroundImageUrlDesktop={getBackgroundImageUrlDesktop(index)}
              backgroundPositionDesktop="calc(50% + 450px) 38px, top center"
              carouselSettinsVariant={2}
              backgroundColor={getBackgroundColor(index)}
              colorText={getColorText(index)}
              detailBottom={index === 0 ? true : false}
              detailTop={(index + 1) % 3 === 0 ? true : false}
            />
          )
        })}

      {banners &&
        banners.map((item) => {
          return (
            <section style={{ backgroundColor: '#e0e0e0' }} key={item.id}>
              <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <Box mb={4}>
                      <SigmaBanner
                        text={item.description}
                        linkCta={item.link}
                        labelCta={item.buttonLabel}
                        backgroundImageUrl={item.backgroundImage?.url}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </section>
          )
        })}
    </>
  )
}

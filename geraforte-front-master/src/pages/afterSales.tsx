import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import client from 'graphql/client'
import HeaderInternal from 'components/sections/HeaderInternal'
import TextAndImageSection from 'components/sections/TextAndImageSection'
import { Container, Grid, useMediaQuery, useTheme } from '@material-ui/core'
import CardOmega from 'components/Cards/CardOmega'
import TitleAndTexSideBySideAndCarouselWhichManyItems from 'components/sections/TitleAndTexSideBySideAndCarouselWhichManyItems'
import SigmaBanner from 'components/banners/Sigma'

import get_graphql_query, { SaleProps } from 'graphql/queries/sale'

export default function AfterSales({
  header,
  main_content,
  cards,
  aditionalContent,
  verticalCards,
  aditionalContentTwo,
  logos,
  banner
}: SaleProps) {
  const { t } = useTranslation('common')
  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))

  const mainImage = isMoreThenMd
    ? main_content.media_content_desktop?.url
    : main_content.media_content_mobile?.url
  return (
    <>
      <a
        id="banner-pos-vendas"
        style={{
          textDecoration: 'none'
        }}
        href="https://bibliotecageraforte.com/"
        target="_blank"
        rel="noreferrer"
      >
        <HeaderInternal
          headText={{
            top: header.overline,
            title: header.title
          }}
          bgImage={header.image_mobile?.url || ''}
          bgImageDesktop={header.image_desktop?.url}
        />
      </a>
      <TextAndImageSection
        textTop={main_content.overline}
        title={main_content.title}
        url={mainImage || 'https://via.placeholder.com/1024x768/efefef/464241'}
        content={main_content.content}
        backgroundImageUrlDesktop="/img/line-gas-bg-main-section.png"
        backgroundPositionDesktop="calc(50% + 495px) 15px"
      />
      <section
        id="abc"
        style={{
          padding: theme.spacing(4, 0),
          backgroundColor: '#e0e0e0',
          backgroundImage:
            "url('/img/abstract_bg_customer_service_desktop-min.png')",
          backgroundSize: 'cover'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {cards &&
              cards.map((item, key) => (
                <Grid item xs={12} key={`${key}`}>
                  <CardOmega
                    title={item.title}
                    text={item.content}
                    urlImg={
                      item.image.url ||
                      'https://via.placeholder.com/560x400/949499/464241'
                    }
                    urlImgDesktop={
                      (item.imageDesktop && item.imageDesktop[0].url) ||
                      'https://via.placeholder.com/560x400/949499/464241'
                    }
                    halfWidthFromMd
                    marginTop={isMoreThenMd ? 0 : 4}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
      </section>

      <TextAndImageSection
        textTop={aditionalContent.overline}
        title={aditionalContent.title}
        url={
          aditionalContent.media_content_desktop?.url ||
          'https://via.placeholder.com/1024x768/efefef/464241'
        }
        content={aditionalContent.content}
        backgroundImageUrlDesktop="/img/line-gas-bg-main-section.png"
        backgroundPositionDesktop="calc(50% + 495px) 15px"
        aditionalContent={
          <Container
            maxWidth="lg"
            style={{
              marginTop: theme.spacing(2)
            }}
          >
            <Grid container spacing={4}>
              {verticalCards &&
                verticalCards.map((item, key) => (
                  <Grid item xs={12} md={4} key={`${key}`}>
                    <CardOmega title={item.title} text={item.content} />
                  </Grid>
                ))}
            </Grid>
          </Container>
        }
      />
      <TitleAndTexSideBySideAndCarouselWhichManyItems
        overlineText={aditionalContentTwo.overline}
        title={aditionalContentTwo.title}
        text={aditionalContentTwo.content}
        items={logos}
        backgroundColor="#e0e0e0"
        aditionalContent={
          <Container
            maxWidth="lg"
            style={{
              marginTop: theme.spacing(4)
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <SigmaBanner
                  text={banner.description}
                  linkCta={t('links.page_contact')}
                  labelCta={banner.buttonLabel}
                  backgroundImageUrl={banner.backgroundImage?.url || ''}
                />
              </Grid>
            </Grid>
          </Container>
        }
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  const { sale } = await client.request(get_graphql_query(locale))
  return {
    props: {
      ...sale,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

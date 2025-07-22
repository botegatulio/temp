import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import client from 'graphql/client'
import HeaderInternal from 'components/sections/HeaderInternal'
import TextAndImageSection from 'components/sections/TextAndImageSection'
import SimpleTextAndImageSection from 'components/sections/SimpleTextAndImageSection'
import DeltaSection from 'components/sections/DeltaSection'
import TextAndCarouselWhichManyItems from 'components/sections/TextAndCarouselWhichManyItems'
import SigmaBanner from 'components/banners/Sigma'
import TextTwoColumnWithBannerTab from 'components/sections/TextTwoColumnWithBannerTab'
import { Container } from '@material-ui/core'

import {
  get_graphql_query_page_product,
  ProductsProps
} from 'graphql/queries/products'
import SimpleSectionWithCardsTwo from 'components/sections/SimpleSectionWithCardsTwo'

export default function Products({
  header,
  mainSection,
  cards = [],
  bannerSecondary,
  sectionTurnkey,
  cardsWithNumbers,
  sectionClients,
  suppliers,
  logosSuppliers,
  bannerTwo,
  tabsWithBanner,
  bannerBottom
}: ProductsProps) {
  const { t } = useTranslation('common')
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
          'https://via.placeholder.com/1024x768/1b1b1b/808080'
        }
        content={mainSection.content}
        backgroundImageUrlDesktop={'/img/products-detail-main-section.png'}
        backgroundPositionDesktop="calc(50% + 500px) 16px"
      />
      <SimpleSectionWithCardsTwo
        items={
          cards.length > 0
            ? cards.map((item) => {
                return {
                  title: item.title,
                  description: item.subtitle,
                  backgroundImageMobile: item.imageCardMobile?.url,
                  backgroundImageDesktop: item.imageCardDesktop?.url,
                  labelCta: item.textButton || t('read_more'),
                  linkCta: item.link || '#'
                }
              })
            : undefined
        }
      />
      <SimpleTextAndImageSection
        title={bannerSecondary.content}
        imageMobileUrl={bannerSecondary.imageMobile.url}
        imageDesktopUrl={bannerSecondary.imageDesktop.url}
      />
      <DeltaSection
        overlineText={sectionTurnkey.overline}
        title={sectionTurnkey.title}
        text={sectionTurnkey.content}
        backgroundColor="#f5f5f5"
        backgroundImageUrlDesktop="/img/3a-detalhe-titulo-turnkey.png"
        backgroundPositionDesktop="calc(50% + 440px) 45px"
        idSection="turn-key"
        items={cardsWithNumbers.map((item) => {
          return {
            title: item.text,
            number: item.number,
            icon: item.icon?.url || ''
          }
        })}
      />
      <TextAndCarouselWhichManyItems
        overlineText={sectionClients.overline}
        title={sectionClients.title}
        text=""
        backgroundImageUrl="url('/img/products-clients-bg-mobile.jpg')"
        backgroundImageUrlDesktop="url('/img/clients-bg-desktop.jpg')"
        backgroundPositionDesktop="top center"
        colorText="white"
        items={
          sectionClients.logos.length > 0
            ? sectionClients.logos.map((item) => {
                return {
                  url: item.url
                }
              })
            : undefined
        }
      />
      <TextAndCarouselWhichManyItems
        backgroundImageUrlDesktop="url('/img/3a-detalhe-titulo-turnkey.png')"
        backgroundPositionDesktop="calc(50% + 420px) 48px"
        overlineText={suppliers.overline}
        title={suppliers.title}
        text={suppliers.content}
        items={
          logosSuppliers.length > 0
            ? logosSuppliers.map((item) => {
                return {
                  url: item.url
                }
              })
            : undefined
        }
        backgroundColor="#f5f5f5"
        carouselSettinsVariant={1}
      />
      <SimpleTextAndImageSection
        idSection="credit-line"
        title={bannerTwo.title}
        text={bannerTwo.text}
        imageMobileUrl={bannerTwo.imageMobile?.url}
        imageDesktopUrl={bannerTwo.imageDesktop?.url}
        alignText="left"
        smallVersion
      />
      <TextTwoColumnWithBannerTab
        items={tabsWithBanner.map((item) => {
          return {
            label: item.title || '',
            text: item.content,
            backgroundImageUrl:
              item.banner?.backgroundImage?.url ||
              'https://via.placeholder.com/768x480',
            linkCta: item.banner?.linkCta || '#',
            textBanner: item.banner?.description || '',
            labelCta: item.banner?.buttonCta || ''
          }
        })}
      />
      <section id="banner-call-produts" style={{ paddingBottom: 32 }}>
        <Container maxWidth="lg">
          <SigmaBanner
            text={bannerBottom.description}
            linkCta={t('links.page_contact')}
            labelCta={bannerBottom.buttonCta}
            backgroundImageUrl={bannerBottom.backgroundImage.url}
          />
        </Container>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  const { products } = await client.request(
    get_graphql_query_page_product(locale)
  )
  return {
    props: {
      ...products,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

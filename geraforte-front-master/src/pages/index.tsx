import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import client from 'graphql/client'
import ProductCTa from 'components/sections/ProducCta'
import DeltaSection from 'components/sections/DeltaSection'
import Cases from 'components/sections/Cases'
import Advantages from 'components/sections/Advantages'
import OurHistory from 'components/sections/OurHistory'
import News from 'components/sections/Omicron'
import ProductLines from 'components/sections/ProductLines'
import CarouselHome from 'components/Carousel/CarouselHome'
import CtaTwo from 'components/sections/CtaTwo'
import get_graphql_query, { HomeProps } from 'graphql/queries/home'
import { getTranslateKeyMonthAlias } from 'utils/date'

const Index = ({
  bannerHome,
  categories,
  cardsCategory,
  banners,
  sectionTurnKey,
  bottomTurnkey,
  cases,
  advantages,
  sectionOurHistory,
  sectionNews,
  lastNews
}: HomeProps) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router

  const convertDate = (date: string) => {
    const dateObj = new Date(`${date} 00:00:00`)
    return `${dateObj.getDate()} ${t(
      getTranslateKeyMonthAlias(dateObj.getMonth())
    )} ${dateObj.getFullYear()}`
  }

  return (
    <>
      <CarouselHome
        showDetail
        items={bannerHome.map((item) => ({
          mobile: item.imageMobile.url,
          desktop: item.imageDesktop.url,
          link: item.link
        }))}
      />

      <ProductLines
        overTitle={categories.overline}
        title={categories.title}
        items={cardsCategory.map((item) => ({
          title: item.title,
          description: item.text,
          iconUrl: item.icon.url,
          backgroundImageMobile: item.imageCardMobile.url,
          backgroundImageDesktop: item.imageCardDesktop.url,
          labelCta: t('read_more'),
          linkCta: item.link
        }))}
      />

      {banners[0] && (
        <ProductCTa
          padOne={banners[0].title}
          padTwo={banners[0].text}
          padThree={banners[0].buttonLabel}
          link={banners[0].link || '#'}
        />
      )}

      <DeltaSection
        overlineText={sectionTurnKey.overline}
        title={sectionTurnKey.title}
        text={sectionTurnKey.content}
        backgroundColor="#e3e3e3"
        backgroundImageUrlDesktop="/img/turn-key-detail.png"
        backgroundPositionDesktop="calc(50% + 250px) 0"
        readMore={{
          href: bottomTurnkey.link,
          label: bottomTurnkey.text
        }}
        items={sectionTurnKey.cards.map((item) => ({
          icon: item.icon.url,
          number: item.number,
          title: item.text
        }))}
      />

      <Cases
        overTitle={cases.overline}
        title={cases.title}
        items={cases.items.map((item) => ({
          imgUrl: item.image.url,
          link: item.link,
          title: item.title
        }))}
      />

      {banners[1] && (
        <CtaTwo
          padOne={banners[1].title}
          padTwo={banners[1].text}
          padThree={banners[1].buttonLabel}
          link={banners[1].link || '#'}
        />
      )}

      <Advantages
        items={advantages.map((item) => ({
          title: item.title,
          label: item.name,
          content: item.content,
          backgroundImageUrl: item.imageBackground.url,
          iconUrl: item.icon.url,
          link: item.link,
          buttonLabel: item.buttonLabel
        }))}
      />

      <OurHistory
        overTitle={sectionOurHistory.overline}
        title={sectionOurHistory.title}
        content={sectionOurHistory.content}
        cta={{
          label: t('read_more'),
          href: t('links.page_about')
        }}
        videoId={sectionOurHistory.video}
      />

      <News
        overTitle={sectionNews.overline}
        title={sectionNews.title}
        cta={{ href: t('links.page_news'), label: t('more_news') }}
        styleSection={{
          backgroundColor: '#f5f5f5',
          backgroundImage: `url('/img/news-details-desktop.png')`
        }}
        items={lastNews?.map((item) => ({
          overTitle: `${convertDate(item.visibleDate)} | ${item.headerNews?.author ?? 'Autor desconhecido'}`,
          title: item.headerNews?.title ?? 'Título não disponível',
          text: item.resume ?? '',
          imageUrl: item.featureImage?.url ?? '',
          url: `/${locale}/blog/${item.slug}`
        }))}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  const { home, lastNews } = await client.request(get_graphql_query(locale))
  return {
    props: {
      ...home,
      lastNews,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default Index

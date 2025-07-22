import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import client from 'graphql/client'
import HeaderInternal from 'components/sections/HeaderInternal'
import TwoColumnsTextSection from 'components/sections/TwoColumnsTextSection'
import SimpleTextAndImageSection from 'components/sections/SimpleTextAndImageSection'
import TwoColumnsAndHighlightedItems from 'components/sections/TwoColumnsAndHighlightedItems'
import get_graphql_query, { DiversityProps } from 'graphql/queries/diversity'
export default function Diversity({
  header,
  mainSection,
  banner,
  sectionCards,
  cards
}: DiversityProps) {
  const { t } = useTranslation('common')
  return (
    <>
      <HeaderInternal
        headText={{
          top: header.overline,
          title: header.title
        }}
        bgImage={header.image_mobile?.url || ''}
        bgImageDesktop={header.image_desktop?.url}
        bottomButtons={{
          current: 3,
          items: [
            {
              buttonId: 1,
              href: t('about_page.buttonsHeader.one.link'),
              label: t('about_page.buttonsHeader.one.label')
            },
            {
              buttonId: 2,
              href: t('about_page.buttonsHeader.two.link'),
              label: t('about_page.buttonsHeader.two.label')
            },
            {
              buttonId: 3,
              href: t('about_page.buttonsHeader.three.link'),
              label: t('about_page.buttonsHeader.three.label')
            }
          ]
        }}
      />
      <TwoColumnsTextSection
        topText={mainSection.overline}
        title={mainSection.title}
        content={mainSection.content}
        backgroundDesktop={
          'url("/img/detalhe-titulo-torre-resfriamento.png") calc(50% + 425px) 45px no-repeat'
        }
      />
      <SimpleTextAndImageSection
        title={banner.text}
        imageMobileUrl={banner.imageMobile.url}
        imageDesktopUrl={banner.imageDesktop.url}
      />
      <TwoColumnsAndHighlightedItems
        topText={sectionCards.overline}
        title={sectionCards.title}
        content={sectionCards.content}
        backgroundDesktop={'url("/img/diversity-bg.jpg") top center no-repeat'}
        items={cards.map((item) => {
          return {
            iconUrl: item.icon.url,
            text: item.text,
            title: ''
          }
        })}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  const { diversity } = await client.request(get_graphql_query(locale))
  return {
    props: {
      ...diversity,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

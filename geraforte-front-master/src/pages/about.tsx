import React from 'react'
import { useTranslation } from 'next-i18next'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HeaderInternal from 'components/sections/HeaderInternal'
import TwoColumnsTextSection from 'components/sections/TwoColumnsTextSection'
import VideoAlfaSection from 'components/sections/VideoAlfaSection'
import TwoColumnsTextWithImages from 'components/sections/TwoColumnsTextWithImages'
import CarouselAbout from 'components/sections/CarouselAbout'
import get_graphql_query, { AboutProps } from 'graphql/queries/about'
import client from 'graphql/client'

export default function About({
  header,
  sectionOne,
  carousel_one,
  video_youtube,
  section_two
}: AboutProps) {
  const { t } = useTranslation('common')
  return (
    <>
      <HeaderInternal
        headText={{
          top: header.overline,
          title: header.title
        }}
        bgImage={header.image_mobile.url}
        bgImageDesktop={header.image_desktop.url}
        bottomButtons={{
          current: 1,
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
        topText={sectionOne.overline}
        title={sectionOne.title}
        content={sectionOne.content}
        backgroundDesktop={
          'url("/img/detalhe-titulo-torre-resfriamento.png") calc(50% + 425px) 80px no-repeat'
        }
      />
      <CarouselAbout items={carousel_one.Images} />
      <VideoAlfaSection videoId={video_youtube} />
      <TwoColumnsTextWithImages
        topText={section_two.overline}
        title={section_two.title}
        aditionalContent={{
          titleOne: section_two.aditional_content.title,
          titleTwo: section_two.aditional_content_two.title,
          imageOne:
            section_two.aditional_content.image?.url ||
            'https://via.placeholder.com/1024x768?text=Image 1',
          imageTwo:
            section_two.aditional_content_two.image?.url ||
            'https://via.placeholder.com/1024x768?text=Image 2'
        }}
        content={section_two.content}
        styleSection={{
          backgroundImage: 'url("/img/history-bg-map.jpg")',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  const { about } = await client.request(get_graphql_query(locale))

  return {
    props: {
      ...about,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

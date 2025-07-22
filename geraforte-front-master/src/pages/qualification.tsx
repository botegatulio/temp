import React from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import client from 'graphql/client'
import HeaderInternal from 'components/sections/HeaderInternal'
import TwoColumnsTextSection from 'components/sections/TwoColumnsTextSection'
import CardWithSideImage from 'components/Cards/CardWithSideImage'
import { Box, useMediaQuery, useTheme } from '@material-ui/core'
import BoxesBetaSection from 'components/sections/BoxesBetaSection'
import TwoColumnsWithImageSection from 'components/sections/TwoColumnsWithImageSection'
import get_graphql_query, {
  QualificationProps
} from 'graphql/queries/qualification'

export default function Qualification({
  header,
  sectionOne,
  boxes,
  cards,
  sectionFooter
}: QualificationProps) {
  const theme = useTheme()
  const isBiggerMd = useMediaQuery(theme.breakpoints.up('md'))
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
          current: 2,
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
        content=""
        backgroundDesktop={
          'url("/img/detalhe-titulo-torre-resfriamento.png") calc(50% + 425px) 90px no-repeat'
        }
      />
      {boxes.map((item, index) => {
        return (
          <Box key={item.id} mt={index ? 6 : 2}>
            <CardWithSideImage
              title={item.title}
              iconUrl={item.icon.url}
              url={isBiggerMd ? item.imageDesktop[0].url : item.imageMobile.url}
              content={item.content || ''}
            />
          </Box>
        )
      })}
      <BoxesBetaSection
        backgroundDesktop={
          'url("/img/mission-view-values.jpg") top center no-repeat'
        }
        items={
          cards &&
          cards.map((item) => {
            return {
              title: item.title,
              iconUrl: item.icon.url,
              text: item.content
            }
          })
        }
      />
      <TwoColumnsWithImageSection
        top={sectionFooter.overline}
        title={sectionFooter.title}
        backgroundImageUrlMobile={sectionFooter.imageMobile.url}
        backgroundImageUrlDesktop={sectionFooter.imageDesktop.url}
        content={sectionFooter.content}
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  const { qualification } = await client.request(get_graphql_query(locale))
  return {
    props: {
      ...qualification,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

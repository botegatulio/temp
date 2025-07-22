import React, { useState } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import client from 'graphql/client'
import HeaderInternal from 'components/sections/HeaderInternal'
import { Box, Container, Grid } from '@material-ui/core'
import SigmaBanner from 'components/banners/Sigma'
import TauSection from 'components/sections/Tau'

import get_graphql_query, { CasesProps } from 'graphql/queries/cases'
import { ButtonColorWhite } from 'components/ButtonCustom'
import { Trans } from 'next-i18next'
import { useEffect } from 'react'

type AditionalContentForLastCaseProps = Pick<CasesProps, 'banner'>

const AditionalContentForLastCase = ({
  banner
}: AditionalContentForLastCaseProps) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box pt={4} pb={4}>
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
  )
}

export default function Cases({ header, cases, banner }: CasesProps) {
  const MAX_ITEMS = 4
  const LOAD_MORE = 4
  const [showItems, setShowItems] = useState(MAX_ITEMS)

  const handleMoreItems = () => {
    setShowItems((before) => before + LOAD_MORE)
  }

  const scrollUp = () => {
    if (window.location.hash) {
      const idHashCase = window.location.hash
      const header = document.getElementsByTagName('header')
      const caseSection = document.getElementById(idHashCase.replace('#', ''))
      if (caseSection) {
        const scrollVerticallyTo =
          caseSection.offsetTop - header[0].clientHeight
        window.scrollTo({ top: scrollVerticallyTo, behavior: 'smooth' })
      }
    }
  }
  useEffect(() => {
    setTimeout(() => scrollUp(), 100)
  }, [])
  return (
    <>
      <HeaderInternal
        headText={{
          top: header.overline,
          title: header.title
        }}
        bgImage={header.image_mobile?.url || ''}
        bgImageDesktop={header.image_desktop?.url}
      />

      {cases &&
        cases.slice(0, showItems).map((item, key, array) => {
          return (
            <TauSection
              key={item.id}
              anchor={item.anchor}
              overTitle={item.overline}
              title={item.title}
              items={item.gallery?.map((itemGallery) => {
                return {
                  title: itemGallery.caption,
                  urlImage:
                    itemGallery.image.url ||
                    'https://via.placeholder.com/768x480/000000/808080'
                }
              })}
              primaryText={item.subtitle}
              secondaryText={item.content}
              styleSection={
                key % 2 === 1 ? { backgroundColor: '#e0e0e0' } : undefined
              }
              aditionalContent={
                key === array.length - 1 ? (
                  <>
                    <Box display="flex" justifyContent="center" py={2}>
                      {showItems < cases.length && (
                        <ButtonColorWhite
                          onClick={handleMoreItems}
                          variant="contained"
                          color="secondary"
                          size="small"
                          disableElevation
                        >
                          <Trans i18nKey="more_cases" />
                        </ButtonColorWhite>
                      )}
                    </Box>
                    <AditionalContentForLastCase banner={banner} />
                  </>
                ) : undefined
              }
              addLineUpMd={key % 2 === 1 ? true : undefined}
              backgroundImageUrlMobile={
                key % 2 === 1
                  ? '/img/slanted_rectangle_white_detail.png'
                  : '/img/slanted_rectangle_grey_detail.png'
              }
              backgroundImageUrlDesktop={
                key % 2 === 1
                  ? '/img/cases_detail_two.png'
                  : '/img/template-a-first-section-bg.png'
              }
              backgroundPositionMobile="calc(50% + 120px) 32px"
              backgroundPositionDesktop="calc(50% + 500px) 16px"
            />
          )
        })}
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  const { cases } = await client.request(get_graphql_query(locale))
  return {
    props: {
      ...cases,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

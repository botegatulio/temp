import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Trans, useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import {
  get_graphql_query_all_news,
  get_graphql_query_newsItem_by_slug_and_language,
  NewsItemProps
} from 'graphql/queries/news'
import client from 'graphql/client'
import HeaderInternalVersionB from 'components/sections/HeaderInternalVersionB'
import ContentTwoColumns from 'components/sections/ContentTwoColumns'
import Omicron from 'components/sections/Omicron'
import SigmaBanner from 'components/banners/Sigma'
import { getTranslateKeyMonthAlias } from 'utils/date'

export default function BlogItem({
  visibleDate,
  headerNews,
  content,
  lastNews,
  bannerNewsItem
}: NewsItemProps) {
  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))
  const router = useRouter()
  const { locale } = router
  const { t } = useTranslation('common')

  const convertDate = (date: string) => {
    const dateObj = new Date(`${date} 00:00:00`)
    return `${dateObj.getDate()} ${t(
      getTranslateKeyMonthAlias(dateObj.getMonth())
    )} ${dateObj.getFullYear()}`
  }

  return (
    <>
      <HeaderInternalVersionB
        overTitle={`${convertDate(visibleDate)}${headerNews?.author ? ' | ' + headerNews.author : ''}`}
        title={headerNews?.title ?? ''}
        bgImage={headerNews?.imageMobile?.url ?? ''}
        bgImageDesktop={headerNews?.imageDesktop?.url ?? ''}
        hiddenText={!isMoreThenMd}
      />
      <ContentTwoColumns
        overTitle={`${convertDate(visibleDate)}${headerNews?.author ? ' | ' + headerNews.author : ''}`}
        title={headerNews?.title ?? ''}
        contentHtml={content}
      />
      <Omicron
        styleSection={{ padding: 0 }}
        items={lastNews?.map((item) => {
          return {
            overTitle: `${convertDate(item.visibleDate)} | ${item.headerNews?.author ?? 'Autor desconhecido'}`,
            title: item.headerNews?.title ?? 'Título não disponível',
            text: item.resume ?? '',
            imageUrl: item.featureImage?.url ?? '',
            url: `/${locale}/blog/${item.slug}`
          }
        })}
        backgroundLinear
        aditionalContent={
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box textAlign="center" pt={2} pb={0}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    disableElevation
                    href={t('links.page_news')}
                  >
                    <Trans i18nKey="more_news" />
                  </Button>
                </Box>
                <Box pt={4} pb={4}>
                  <SigmaBanner
                    text={bannerNewsItem?.description ?? ''}
                    linkCta={bannerNewsItem?.link ?? '#'}
                    labelCta={bannerNewsItem?.buttonLabel ?? 'Saiba mais'}
                    backgroundImageUrl={bannerNewsItem?.backgroundImage?.url ?? ''}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        }
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, locale = 'pt' }) => {
  if (params?.slug && typeof params.slug === 'string') {
    const { newsItems, lastNews, newsPage } = await client.request(
      get_graphql_query_newsItem_by_slug_and_language(params.slug, locale)
    )
    if (newsItems.length) {
      return {
        props: {
          ...newsItems[0],
          lastNews,
          bannerNewsItem: newsPage.bannerNewsItem,
          ...(await serverSideTranslations(locale, ['common']))
        }
      }
    }
  }
  return {
    props: {}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  type NewsItems = {
    newsItems: {
      slugEn: string
      slugPt: string
      slugEs: string
    }[]
  }

  type ItemRoute = {
    params: {
      slug: string
    }
    locale: 'en' | 'pt' | 'es'
  }

  const { newsItems }: NewsItems = await client.request(
    get_graphql_query_all_news()
  )

  const customPaths: ItemRoute[] = []

  newsItems.forEach((item) => {
    customPaths.push({ params: { slug: item.slugEn }, locale: 'en' })
    customPaths.push({ params: { slug: item.slugPt }, locale: 'pt' })
    customPaths.push({ params: { slug: item.slugEs }, locale: 'es' })
  })

  return {
    paths: customPaths,
    fallback: false
  }
}

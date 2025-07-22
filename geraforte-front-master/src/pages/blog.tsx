import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation, Trans } from 'next-i18next'
import client from 'graphql/client'
import HeaderInternal from 'components/sections/HeaderInternal'
import { Box, Container, Grid, useTheme, Button } from '@material-ui/core'
import CardNi from 'components/Cards/CardNi'
import SocialNetWorksBanner from 'components/banners/SocialNetWorks'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import {
  get_graphql_query_page_news,
  NewsPageProps
} from 'graphql/queries/news'

const ITEMS_PER_PAGE = 5

export default function News({ newsPage, newsItems }: NewsPageProps) {
  const theme = useTheme()
  const { t } = useTranslation('common')
  const router = useRouter()
  const page = parseInt((router.query.page as string) || '1')
  const totalPages = Math.ceil(newsItems.length / ITEMS_PER_PAGE)
  const paginatedItems = newsItems.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  return (
    <>
      <Head>
        {page > 1 && <link rel="prev" href={`?page=${page - 1}`} />}
        {page < totalPages && <link rel="next" href={`?page=${page + 1}`} />}
      </Head>

      <HeaderInternal
        headText={{
          top: newsPage.header.overline,
          title: newsPage.header.title
        }}
        bgImage={newsPage.header.imageMobile?.url || ''}
        bgImageDesktop={newsPage.header.imageDesktop?.url}
      />

      <section
        style={{
          padding: theme.spacing(4, 0),
          backgroundColor: '#e0e0e0',
          backgroundImage: 'url("/img/blog-details-desktop.png")',
          backgroundPosition: 'calc(50% - 530px) 990px',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {paginatedItems.map((item, key) => (
          <Grid
            item
            xs={12}
            key={`${key}`}
            style={{ marginBottom: theme.spacing(4) }}
          >
            <CardNi
              title={item.title || ''}
              text={item.resume || ''}
              urlImg={item.featureImage?.url}
              cta={{
                href: `${t('base_uri.single_news')}${item.currentSlug}`,
                label: t('read_more')
              }}
            />
          </Grid>
        ))}

        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" gap={2}>
                {page > 1 && (
                  <Link href={`?page=${page - 1}`} passHref>
                    <Button variant="contained" color="secondary" size="small">
                      ← <Trans i18nKey="previous_news" />
                    </Button>
                  </Link>
                )}
                {page < totalPages && (
                  <Link href={`?page=${page + 1}`} passHref>
                    <Button variant="contained" color="secondary" size="small">
                      <Trans i18nKey="more_news" /> →
                    </Button>
                  </Link>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" pt={0}>
                <SocialNetWorksBanner
                  text={newsPage.bannerSocialMedia.title || ''}
                  linkedinUrl={newsPage.bannerSocialMedia.linkedin}
                  twitterUrl={newsPage.bannerSocialMedia.twitter}
                  facebookUrl={newsPage.bannerSocialMedia.facebook}
                  instagramUrl={newsPage.bannerSocialMedia.instagram}
                  backgroundImageUrl={
                    newsPage.bannerSocialMedia.backgroundImage?.url
                  }
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
  const { newsPage, newsItems } = await client.request(
    get_graphql_query_page_news(locale)
  )
  return {
    props: {
      newsPage,
      newsItems,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

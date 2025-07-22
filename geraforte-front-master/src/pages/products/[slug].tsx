import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticPaths, GetStaticProps } from 'next'

import {
  get_graphql_query_all_products,
  get_product_by_slug_and_language,
  ProductItemProps
} from 'graphql/queries/products'
import client from 'graphql/client'

import HeaderInternal from 'components/sections/HeaderInternal'
import SingleImageAndTextBelow from 'components/sections/SingleImageAndTextBelow'
import TableAndTitle from 'components/sections/TableAndTitle'
import HeaderAndSomeItems from 'components/sections/HeaderAndSomeItems'
import { Box, Container, Grid } from '@material-ui/core'
import SigmaBanner from 'components/banners/Sigma'
import ButtonDownloadFile from 'components/ButtonDownloadFile'

export default function ProductItem({
  header,
  mainSection,
  titleTable,
  headerTable,
  rowsTable,
  sectionTwo,
  banner
}: ProductItemProps) {
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

      <SingleImageAndTextBelow
        text={mainSection.content}
        topThumbUrl={mainSection.logo?.url}
        imageUrl={
          mainSection.image?.url ||
          'https://via.placeholder.com/1170x580/cdcdcd/fb2e05'
        }
        disableTopThumb={!mainSection.logo?.url}
      />

      <TableAndTitle
        title={
          titleTable &&
          titleTable.find(
            (item) => item.__typename === 'ComponentTablesTitleTable'
          )?.titleTable
        }
        heads={headerTable
          .find((item) => item.__typename === 'ComponentTablesHeader')
          ?.header.map((item) => item.cell)}
        items={rowsTable
          .filter((item) => item.__typename === 'ComponentTablesRow')
          .map((item) =>
            item.cellsRow.map((item, index) => {
              if (item.file?.length) {
                return (
                  <ButtonDownloadFile
                    key={`ButtonDownloadFile-${index}`}
                    urlFile={item.file[0].url}
                  />
                )
              }
              if (item.content) {
                return item.content
              }

              return ''
            })
          )}
        styleSection={{ backgroundColor: '#cccccc' }}
      />

      <HeaderAndSomeItems
        topText={sectionTwo.overline}
        title={sectionTwo.title}
        backgroundColor="#fcfcfb"
        backgroundImage=""
        items={sectionTwo.products.map((item) => {
          return {
            imageUrl: item.image?.length
              ? item.image[0].url
              : 'https://via.placeholder.com/1024x640/cdcdcd/464241',
            topThumbUrl: item.logo
              ? item.logo.url
              : 'https://via.placeholder.com/166x103/fcfcfb/003b8a',
            href: item.link
          }
        })}
        gridItemsConfig={{ sm: 6, md: 4 }}
      />

      <section>
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Box mb={8}>
                <SigmaBanner
                  text={banner.description}
                  linkCta={banner.link || '#'}
                  labelCta={banner.buttonCta}
                  backgroundImageUrl={banner.backgroundImage?.url}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  locale = 'pt'
}) => {
  if (params?.slug && typeof params.slug === 'string') {
    const { products } = await client.request(
      get_product_by_slug_and_language(params.slug, locale)
    )

    if (products.length) {
      return {
        props: {
          ...products[0],
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
  type Produts = {
    products: {
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

  const { products }: Produts = await client.request(
    get_graphql_query_all_products()
  )

  const customPaths: ItemRoute[] = []

  products.forEach((item) => {
    customPaths.push({ params: { slug: item.slugEn }, locale: 'en' })
    customPaths.push({ params: { slug: item.slugPt }, locale: 'pt' })
    customPaths.push({ params: { slug: item.slugEs }, locale: 'es' })
  })

  return {
    paths: customPaths,
    fallback: false
  }
}

import React from 'react'
import { useTranslation } from 'next-i18next'
import HeaderInternal from 'components/sections/HeaderInternal'
import TextAndImageSection from 'components/sections/TextAndImageSection'
import { LineEProps } from 'graphql/queries/lines'
import {
  Box,
  Container,
  Grid,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import CardOmega from 'components/Cards/CardOmega'
import OnlyCarousel from 'components/sections/OnlyCarousel'
import Image from 'next/image'

export default function ModelE({
  header,
  mainSection,
  cardWithNumbers,
  gallery,
  products
}: LineEProps) {
  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))
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
          'https://via.placeholder.com/1024x768/efefef/464241'
        }
        content={mainSection.content}
        backgroundImageUrlDesktop="/img/line-gas-bg-main-section.png"
        backgroundPositionDesktop="calc(50% + 495px) 15px"
      />

      <OnlyCarousel
        items={gallery}
        backgroundColor="#4b4b4b"
        backgroundImageUrlDesktop="/img/bg-abstract-black.jpg"
        carouselSettinsVariant={1}
        startAditional={
          <Container maxWidth="lg">
            <Grid
              container
              spacing={2}
              style={{ paddingBottom: theme.spacing(2) }}
            >
              {cardWithNumbers.map((item) => (
                <Grid item xs={12} md={6} key={item.id}>
                  <Box display="flex" flexDirection="row">
                    <Box
                      px={1}
                      color="secondary.contrastText"
                      style={{
                        minWidth: 48,
                        minHeight: 48,
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#e03936',
                        fontWeight: 'bold'
                      }}
                    >
                      {item.number}
                    </Box>
                    <Box p={1} color="common.white">
                      {item.text}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        }
      />

      <section
        id="abc"
        style={{
          position: 'relative',
          padding: theme.spacing(4, 0),
          backgroundColor: '#e0e0e0'
        }}
      >
        <Image
          src="/img/commander-board-detail-bg-desktop.png"
          alt="Fundo da seção de produtos"
          layout="fill"
          objectFit="cover"
          priority
        />
        <Box position="relative" zIndex={1}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid item xs={12} md={6} key={product.id}>
                  <CardOmega
                    title={product.title}
                    text={product.content}
                    urlImg={
                      (product.images.length && product.images[0].url) ||
                      'https://via.placeholder.com/560x400/949499/464241'
                    }
                    urlImgDesktop={
                      (product.images.length && product.images[0].url) ||
                      'https://via.placeholder.com/560x400/949499/464241'
                    }
                    marginTop={isMoreThenMd ? 0 : 8}
                    {...(product.link
                      ? { cta: { href: product.link, label: t('read_more') } }
                      : {})}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </section>
    </>
  )
}

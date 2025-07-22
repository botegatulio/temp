import React from 'react'
import HeaderInternal from 'components/sections/HeaderInternal'
import TextAndImageSection from 'components/sections/TextAndImageSection'
import { LineDProps } from 'graphql/queries/lines'
import { Container, Grid, useMediaQuery, useTheme } from '@material-ui/core'
import Zeta from 'components/sections/Zeta'
import CardOmega from 'components/Cards/CardOmega'

export default function ModelD({
  header,
  mainSection,
  advantages,
  advantagesContent,
  products
}: LineDProps) {
  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))
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
      <Zeta
        overlineText={advantages.overline}
        title={advantages.title}
        text={advantagesContent}
        items={advantages.cards?.map((item) => {
          return {
            text: item.title,
            icon: <img src={item.image?.url} />
          }
        })}
        aditionalContent={
          <Container maxWidth="lg">
            <Grid
              container
              spacing={4}
              style={{ paddingTop: theme.spacing(4) }}
            >
              {products &&
                products.map((product) => (
                  <Grid item xs={12} sm={4} md={3} key={product.id}>
                    <CardOmega
                      title={product.title}
                      text={product.content}
                      urlImg={
                        (product.imageMobile && product.imageMobile.url) ||
                        'https://via.placeholder.com/270x270/fcfcfb/464241'
                      }
                      urlImgDesktop={
                        (product.image?.length && product.image[0].url) ||
                        'https://via.placeholder.com/270x270/fcfcfb/464241'
                      }
                      marginTop={isMoreThenMd ? 0 : 8}
                    />
                  </Grid>
                ))}
            </Grid>
          </Container>
        }
      />
    </>
  )
}

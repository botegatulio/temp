import React from 'react'
import { useTranslation } from 'next-i18next'
import HeaderInternal from 'components/sections/HeaderInternal'
import TextAndImageSection from 'components/sections/TextAndImageSection'
import { LineFProps } from 'graphql/queries/lines'
import { Box, Grid, useMediaQuery, useTheme } from '@material-ui/core'
import OnlyCarousel from 'components/sections/OnlyCarousel'
import TextAndCarouselWhichManyItems from 'components/sections/TextAndCarouselWhichManyItems'
import TableAndTitle from 'components/sections/TableAndTitle'
import CardNi from 'components/Cards/CardNi'
import TwoColumnsTextSection from 'components/sections/TwoColumnsTextSection'
import ButtonDownloadFile from 'components/ButtonDownloadFile'

export default function ModelF({
  header,
  mainSection,
  differentials,
  cardProducts,
  kitSection,
  titleTableTwo,
  headerTableTwo,
  rowsTableTwo,
  titleTableThree,
  headerTableThree,
  rowsTableThree,
  titleTableFour,
  headerTableFour,
  rowsTableFour,
  carousel
}: LineFProps) {
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
      <TextAndCarouselWhichManyItems
        title={differentials.title}
        text={differentials.content}
        items={differentials.images.map((item) => {
          return {
            url: item.url
          }
        })}
        backgroundColor="#e0e0e0"
        backgroundImageUrlDesktop="url('/img/carenagem-detalhe-titulo-secao2-desktop.png')"
        backgroundPositionDesktop="calc(50% + 495px) 15px"
        carouselSettinsVariant={4}
        paddingTopDesktop={6}
      />

      <section
        id="abc"
        style={{
          paddingTop: theme.spacing(4),
          backgroundColor: '#fcfcfb',
          backgroundImage: 'url("/img/line-gas-bg-main-section.png")',
          backgroundPosition: 'calc(50% + 495px) 15px',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {cardProducts.map((product) => (
          <Grid
            item
            xs={12}
            key={product.id}
            style={{ marginBottom: theme.spacing(4) }}
          >
            <CardNi
              title={product.title}
              text={product.content}
              urlImg={
                (product.images.length && product.images[0].url) ||
                'https://via.placeholder.com/472x500/949499/464241'
              }
              cta={{
                label: t('read_more'),
                href: t('links.lines.custom')
              }}
            />
          </Grid>
        ))}
      </section>

      <TwoColumnsTextSection
        title={kitSection.title}
        styleSection={{
          background:
            'url("/img/line-gas-bg-main-section.png") top right no-repeat, url("/img/abstract-bg-desktop.webp")'
        }}
        content={kitSection.content}
        addLineUpMd
        aditionalContent={
          <>
            <Box mb={4} mt={4}>
              <TableAndTitle
                title={
                  titleTableTwo &&
                  titleTableTwo.find(
                    (item) => item.__typename === 'ComponentTablesTitleTable'
                  )?.titleTable
                }
                heads={headerTableTwo
                  .find((item) => item.__typename === 'ComponentTablesHeader')
                  ?.header.map((item) => item.cell)}
                items={rowsTableTwo
                  .filter((item) => item.__typename === 'ComponentTablesRow')
                  .map((item) =>
                    item.cellsRow.map((item) => item.content || '')
                  )}
                disableSection
              />
            </Box>
            <Box mb={4}>
              <TableAndTitle
                title={
                  titleTableThree &&
                  titleTableThree.find(
                    (item) => item.__typename === 'ComponentTablesTitleTable'
                  )?.titleTable
                }
                heads={headerTableThree
                  .find((item) => item.__typename === 'ComponentTablesHeader')
                  ?.header.map((item) => item.cell)}
                items={rowsTableThree
                  .filter((item) => item.__typename === 'ComponentTablesRow')
                  .map((item) =>
                    item.cellsRow.map((item) => item.content || '')
                  )}
                disableSection
              />
            </Box>
            <Box>
              <TableAndTitle
                title={
                  titleTableFour &&
                  titleTableFour.find(
                    (item) => item.__typename === 'ComponentTablesTitleTable'
                  )?.titleTable
                }
                heads={headerTableFour
                  .find((item) => item.__typename === 'ComponentTablesHeader')
                  ?.header.map((item) => item.cell)}
                items={rowsTableFour
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
                disableSection
              />
            </Box>
            <Box mt={3} pb={isMoreThenMd ? 0 : 4}>
              <OnlyCarousel
                items={carousel.images.map((item) => {
                  return {
                    url: item.url
                  }
                })}
                carouselSettinsVariant={2}
                backgroundColor="#e0e0e0"
                disableSectionElement
              />
            </Box>
          </>
        }
      />
    </>
  )
}

import React from 'react'
import HeaderInternal from 'components/sections/HeaderInternal'
import TextAndImageSection from 'components/sections/TextAndImageSection'
import HeaderAndSomeItems from 'components/sections/HeaderAndSomeItems'
import { Box } from '@material-ui/core'
import TableAndTitle from 'components/sections/TableAndTitle'
import RoBanner from 'components/banners/Ro'
import SigmaBanner from 'components/banners/Sigma'
import ButtonDownloadFile from 'components/ButtonDownloadFile'
import { LineAProps } from 'graphql/queries/lines'

export default function ModelA({
  header,
  mainSection,
  products,
  titleTable,
  headerTable,
  rowsTable,
  banners
}: LineAProps) {
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
        backgroundImageUrlDesktop={'/img/template-a-first-section-bg.png'}
        backgroundPositionDesktop="calc(50% + 500px) 16px"
      />
      {products &&
        products.map((item, index) => {
          return (
            <HeaderAndSomeItems
              key={index}
              topText={item.overline}
              title={item.title}
              backgroundColor={index % 2 ? '#fcfcfb' : '#e0e0e0'}
              backgroundRepeat="no-repeat"
              backgroundImage={
                index % 2
                  ? '/img/slanted_rectangle_grey_detail.png'
                  : '/img/slanted_rectangle_white_detail.png'
              }
              backgroundPosition={'calc(100% + 20px) 40px'}
              backgroundImageDesktop={
                index % 2
                  ? '/img/diesel-line-heavy-line-bg-desktop.jpg'
                  : '/img/diesel-line-detail-standard-line.png'
              }
              backgroundPositionDesktop={
                index % 2 ? 'center -56px' : 'calc(50% + 500px) 48px'
              }
              items={item.gallery?.map((item) => {
                return {
                  href: item.link || '#',
                  imageUrl:
                    item.image[0].url ||
                    'https://via.placeholder.com/1024x640/fcfcfb/464241',
                  topThumbUrl: item.thumbnail && item.thumbnail.url
                }
              })}
            />
          )
        })}
      <TableAndTitle
        styleSection={{
          backgroundColor: '#cccccc'
        }}
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
        aditionalBanners={
          <>
            {banners &&
              banners.map((item, index) => {
                if (index % 2) {
                  return (
                    <Box py={2} key={item.id}>
                      <SigmaBanner
                        text={item.description}
                        linkCta={item.link || '#'}
                        labelCta={item.buttonCta}
                        backgroundImageUrl={item.backgroundImage?.url}
                      />
                    </Box>
                  )
                } else {
                  return (
                    <Box py={2} key={item.id}>
                      <RoBanner
                        textBanner={item.description}
                        linkCta={item.link || '#'}
                        labelCta={item.buttonCta}
                        backgroundImageUrl={item.backgroundImage?.url}
                      />
                    </Box>
                  )
                }
              })}
          </>
        }
      />
    </>
  )
}

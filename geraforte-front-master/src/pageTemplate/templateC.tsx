import React from 'react'
import HeaderInternal from 'components/sections/HeaderInternal'
import TextAndImageSection from 'components/sections/TextAndImageSection'
import SigmaBanner from 'components/banners/Sigma'
import { Box } from '@material-ui/core'
import SimpleAccordion from 'components/sections/SimpleAccordion'
import TableAndTitle from 'components/sections/TableAndTitle'
import { LineCProps } from 'graphql/queries/lines'
import ButtonDownloadFile from 'components/ButtonDownloadFile'
import SimpleGraphs from 'components/sections/SimpleGraphs'

export default function ModelC({
  header,
  mainSection,
  drawer,
  titleTable,
  headerTable,
  rowsTable,
  banner,
  simpleCharts
}: LineCProps) {
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
      <SimpleAccordion
        backgroundUrlImage="/img/bg-background-accordion-line-gas.jpg"
        items={drawer.map((item) => {
          return {
            title: item.title,
            content: item.content
          }
        })}
      />
      <SimpleGraphs
        sectionId="graphs"
        items={simpleCharts.items?.map((item) => {
          return {
            imageUrl: item.image.url,
            title: item.title,
            text: item.text
          }
        })}
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
        styleSection={{
          backgroundImage: "url('/img/abstract-bg-desktop.webp')"
        }}
        aditionalBanners={
          banner && (
            <Box mt={2}>
              <SigmaBanner
                text={banner.description}
                linkCta={banner.link}
                labelCta={banner.buttonLabel}
                backgroundImageUrl={banner.backgroundImage?.url}
              />
            </Box>
          )
        }
      />
    </>
  )
}

import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import client from 'graphql/client'
import HeaderInternal from 'components/sections/HeaderInternal'
import TextAndImageSection from 'components/sections/TextAndImageSection'
import { Box } from '@material-ui/core'
import TableAndTitle from 'components/sections/TableAndTitle'
import RoBanner from 'components/banners/Ro'
import SigmaBanner from 'components/banners/Sigma'

import get_graphql_query, {
  InternationalProps
} from 'graphql/queries/international'
import ButtonDownloadFile from 'components/ButtonDownloadFile'

export default function Exportation({
  header,
  mainSection,
  titleTable,
  headerTable,
  rowsTable,
  bannersFooter
}: InternationalProps) {
  return (
    <>
      <HeaderInternal
        headText={{
          top: header.overline,
          title: header.title
        }}
        bgImage={header.image_mobile?.url || ''}
        bgImageDesktop={header.image_desktop?.url || ''}
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
        styleSection={{ backgroundColor: '#CCCCCC' }}
        aditionalBanners={
          <>
            {bannersFooter.map((banner, index) => {
              return (
                <Box py={2.5} key={banner.id}>
                  {(index + 1) % 2 === 0 && (
                    <SigmaBanner
                      text={banner.description}
                      linkCta={banner.link}
                      labelCta={banner.buttonLabel}
                      backgroundImageUrl={banner.backgroundImage?.url || ''}
                    />
                  )}
                  {(index + 1) % 2 === 1 && (
                    <RoBanner
                      textBanner={banner.description}
                      linkCta={banner.link}
                      labelCta={banner.buttonLabel}
                      backgroundImageUrl={banner.backgroundImage?.url || ''}
                    />
                  )}
                </Box>
              )
            })}
          </>
        }
      />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = 'pt' }) => {
  const { international } = await client.request(get_graphql_query(locale))
  return {
    props: {
      ...international,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

import React from 'react'
import Image from 'next/image'
import { Box, Typography, Container, useMediaQuery, useTheme } from '@material-ui/core'
import { SmallDivider } from 'components/DividerCustom'

type HeaderInternalVersionBProps = {
  overTitle?: string
  title: string
  hiddenText?: boolean
  bgImage?: string
  bgImageDesktop?: string
}

const HeaderInternalVersionB = ({
  overTitle = '',
  title = '',
  hiddenText = false,
  bgImage,
  bgImageDesktop,
}: HeaderInternalVersionBProps) => {
  const theme = useTheme()
  const imageToUse = bgImageDesktop || bgImage || '/img/banner-blog.webp'

  return (
    <section style={{ width: '100%', backgroundColor: '#000' }}>
      <Box position="relative" width="100%">
        <Image
          src={imageToUse}
          alt={title}
          layout="responsive"
          width={1600}
          height={630} // 16:9 com altura reduzida (~630px) para desktop
          objectFit="cover"
          priority
        />

        {/* Overlay escuro */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8))',
            zIndex: 1,
          }}
        />

        {/* Conteúdo textual */}
        <Box
          position="absolute"
          bottom={30}
          left={0}
          width="100%"
          zIndex={2}
        >
          <Container maxWidth="lg">
            {!hiddenText && (
              <Box textAlign="left">
                <Typography variant="overline" style={{ color: '#fff' }}>
                  <Box dangerouslySetInnerHTML={{ __html: overTitle }} />
                </Typography>
                <Typography variant="h1" style={{ color: '#fff' }}>
                  <Box
                    fontWeight="fontWeightMedium"
                    letterSpacing={1}
                    lineHeight={1.2}
                    pb={1}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                </Typography>
                <SmallDivider />
              </Box>
            )}
          </Container>
        </Box>
      </Box>
    </section>
  )
}

export default HeaderInternalVersionB

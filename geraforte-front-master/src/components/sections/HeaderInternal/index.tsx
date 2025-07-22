import { Box, Typography } from '@material-ui/core'

import Container from '@material-ui/core/Container'

import React from 'react'

import Image from 'next/image'

import useStyles from './styles'

import clsx from 'clsx'



import BottomButtons, { BottomButtonsProps } from './bottomButtons'



type HeaderInternalProps = {

  headText: {

    top: string

    title: string

  }

  bgImage: string // imagem mobile

  bgImageDesktop?: string

  bottomButtons?: BottomButtonsProps

}



const HeaderInternal = ({

  headText,

  bgImage,

  bgImageDesktop = '',

  bottomButtons

}: HeaderInternalProps) => {

  const classes = useStyles()



  const headerStyle = clsx({

    [classes.header]: true,

    [classes.headerWithBottomButons]: bottomButtons?.current || false

  })



  return (

    <section className={classes.root}>

      {/* Imagens diferentes para mobile e desktop */}

      <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={0}>

        <Box className={classes.imageMobile} position="absolute" top={0} left={0} width="100%" height="100%">

          <Image

            src={bgImage}

            alt="Banner Mobile"

            fill

            style={{ objectFit: 'cover' }}

            sizes="100vw"

            priority

          />

        </Box>



        <Box className={classes.imageDesktop} position="absolute" top={0} left={0} width="100%" height="100%">

          <Image

            src={bgImageDesktop || bgImage}

            alt="Banner Desktop"

            fill

            style={{ objectFit: 'cover' }}

            sizes="100vw"

            priority

          />

        </Box>

      </Box>



      <Container maxWidth="lg" style={{ position: 'relative', zIndex: 2 }}>

        <Box display="flex" flexDirection="column" className={headerStyle}>

          <Box className={classes.headText}>

            <Typography variant="overline">

              <Box className={classes.headTextTop}>{headText.top}</Box>

            </Typography>

            <Typography variant="h1">

              <Box dangerouslySetInnerHTML={{ __html: headText.title }} />

            </Typography>

          </Box>

          {bottomButtons?.items && (

            <BottomButtons

              current={bottomButtons.current}

              items={bottomButtons.items}

            />

          )}

        </Box>

      </Container>

    </section>

  )

}



export default HeaderInternal

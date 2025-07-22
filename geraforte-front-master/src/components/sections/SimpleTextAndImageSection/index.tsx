import React from 'react'
import clsx from 'clsx'
import { Box, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import useStyles from './styles'

type SimpleTextAndImageSectionProps = {
  idSection?: string
  title: string
  subTitle?: string
  imageMobileUrl?: string
  imageDesktopUrl?: string
  text?: string
  alignText?: 'left' | 'center'
  smallVersion?: boolean
}

const SimpleTextAndImageSection = ({
  idSection = 'simple-text-and-image',
  title,
  imageMobileUrl = '',
  imageDesktopUrl = '',
  text,
  alignText = 'center',
  smallVersion = false
}: SimpleTextAndImageSectionProps) => {
  const classes = useStyles({
    backgroundImageMobile: imageMobileUrl,
    backgroundImageDesktop: imageDesktopUrl
  })
  const classNameVariant = smallVersion ? 'smal-container' : ''
  return (
    <section id={idSection} className={clsx(classes.root, classNameVariant)}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">
              <Box
                textAlign={alignText}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Typography>
            {text && (
              <Typography variant="h5">
                <Box
                  className={classes.wrapperText}
                  textAlign={alignText}
                  pt={1}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SimpleTextAndImageSection

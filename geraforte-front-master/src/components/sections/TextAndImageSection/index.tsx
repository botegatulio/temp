import { Box, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'

type TextAndImageSectionProps = {
  textTop: string
  title: string
  url: string
  content: string
  aditionalContent?: React.ReactNode
  backgroundImageUrlDesktop?: string
  backgroundPositionDesktop?: string
}

const TextAndImageSection = ({
  textTop,
  title,
  url,
  content,
  aditionalContent,
  backgroundImageUrlDesktop,
  backgroundPositionDesktop
}: TextAndImageSectionProps) => {
  const classes = useStyles({
    backgroundImageUrlDesktop,
    backgroundPositionDesktop
  })
  return (
    <section className={classes.root} id="text-and-image-section">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" component="div">
              <Box component="div" mb={1}>
                {textTop}
              </Box>
            </Typography>
            <Typography variant="h1">
              <Box
                pb={3}
                component="span"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={url} alt="foo" className={classes.image} />
          </Grid>
        </Grid>
      </Container>
      {aditionalContent}
    </section>
  )
}

export default TextAndImageSection

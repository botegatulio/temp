import { Box, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'

type TwoColumnsTextWithImagesProps = {
  topText: string
  title: string
  content: string
  aditionalContent: {
    titleOne: string
    titleTwo: string
    imageOne: string
    imageTwo: string
  }
  styleSection?: React.CSSProperties
}

const TwoColumnsTextWithImages = ({
  topText,
  title,
  content,
  aditionalContent,
  styleSection = {}
}: TwoColumnsTextWithImagesProps) => {
  const classes = useStyles()
  return (
    <section
      className={classes.root}
      id="two-columns-text-with-images"
      style={styleSection}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6}>
            <Typography variant="overline">
              <Box dangerouslySetInnerHTML={{ __html: topText }} mb={1} />
            </Typography>
            <Typography variant="h1">
              <Box dangerouslySetInnerHTML={{ __html: title }} mb={1} />
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item className={classes.wrappText}>
            <Box dangerouslySetInnerHTML={{ __html: content }} />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className={classes.containerAditionalContent}>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6}>
            <Typography variant="h6">
              <Box fontWeight="fontWeightBold" fontSize="body2" pb={1}>
                {aditionalContent.titleOne}
              </Box>
              <Box pt={1}>
                <img
                  src={aditionalContent.imageOne}
                  className={classes.imageAdtionalContent}
                />
              </Box>
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="h6">
              <Box fontWeight="fontWeightBold" fontSize="body2" pb={1}>
                {aditionalContent.titleTwo}
              </Box>
            </Typography>

            <Box pt={1}>
              <img
                src={aditionalContent.imageTwo}
                className={classes.imageAdtionalContent}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default TwoColumnsTextWithImages

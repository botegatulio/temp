import React from 'react'
import { Box, Button, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import YouTube from 'react-youtube'

const videoOptions = {
  width: '100%',
  height: 'auto'
}

type OurHistoryProps = {
  overTitle: string
  title: string
  content: string
  videoId: string
  cta: {
    href: string
    label: string
  }
}

const OurHistory = ({
  overTitle,
  title,
  content,
  cta,
  videoId
}: OurHistoryProps) => {
  const classes = useStyles()

  return (
    <section className={classes.root} id="our-history">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justify="space-between">
          <Grid item xs={12} md={5}>
            <Typography variant="overline">
              <Box pb={1} dangerouslySetInnerHTML={{ __html: overTitle }} />
            </Typography>
            <Typography variant="h2" className={classes.title}>
              <Box dangerouslySetInnerHTML={{ __html: title }} />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justify="space-between"
          className={classes.containerContent}
        >
          <Grid item xs={12} md={8}>
            <Box className={classes.wrapperBox}>
              <YouTube videoId={videoId} opts={videoOptions} />
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box
              display="flex"
              flexDirection="column"
              className={classes.contentColumn}
              style={{ height: '100%' }}
            >
              <Box
                fontSize="h1.body1"
                className={classes.wrapperTextContent}
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <Box pt={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  disableElevation
                  href={cta.href}
                >
                  {cta.label}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default OurHistory

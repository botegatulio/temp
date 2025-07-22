import { Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React from 'react'
import useStyles from './styles'
import YouTube from 'react-youtube'

const videoOptions = {
  width: '100%',
  height: 'auto'
}

type VideoAlfaSectionProps = {
  videoId: string
}

const VideoAlfaSection = ({ videoId }: VideoAlfaSectionProps) => {
  const classes = useStyles()

  return (
    <section className={classes.root} id="our-history">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justify="space-between">
          <Grid item xs={12} className={classes.wrapperVideo}>
            <YouTube videoId={videoId} opts={videoOptions} />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default VideoAlfaSection

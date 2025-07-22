import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import { Box, Container } from '@material-ui/core'

type CardWithSideImageProps = {
  title: string
  content: string
  url: string
  iconUrl: string
}

export default function CardWithSideImage({
  title = '',
  content = '',
  url = '#',
  iconUrl
}: CardWithSideImageProps) {
  const classes = useStyles()

  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Card className={classes.card}>
          <div className={classes.wrapperIcon}>
            <img src={iconUrl} className={classes.imageIcon} />
          </div>
          <CardMedia className={classes.cover} image={url} title="" />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h1" className={classes.title}>
                <Box dangerouslySetInnerHTML={{ __html: title }} />
              </Typography>
              <Box
                className={classes.contentText}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </CardContent>
          </div>
        </Card>
      </Container>
    </section>
  )
}

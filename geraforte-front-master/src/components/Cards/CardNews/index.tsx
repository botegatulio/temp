import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

export type CardNewsProps = {
  overTitle: string
  title: string
  text: string
  imageUrl: string
  url: string
}

const CardNews = ({ overTitle, title, text, imageUrl, url }: CardNewsProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Card className={classes.rootCard} elevation={7}>
      <CardActionArea href={url}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height={isUpMd ? '220' : '140'}
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="body2" component="div">
            <Box pb={2}>{overTitle}</Box>
          </Typography>
          <Typography gutterBottom variant="h5">
            <b>{title}</b>
          </Typography>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            component="p"
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardNews

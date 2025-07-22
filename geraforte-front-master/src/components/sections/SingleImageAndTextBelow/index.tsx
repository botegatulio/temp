import React from 'react'
import { Box, Grid } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import CardImageWithThumbTop, {
  CardImageWithThumbTopProps
} from 'components/Cards/CardImageWithThumbTop'

type SingleImageAndTextBelowProps = {
  text: string
} & CardImageWithThumbTopProps

const SingleImageAndTextBelow = ({
  text,
  topThumbUrl,
  imageUrl,
  disableTopThumb
}: SingleImageAndTextBelowProps) => {
  const classes = useStyles()
  return (
    <section id="single-image-and-text-below" className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box pt={disableTopThumb ? 0 : 4}>
              <CardImageWithThumbTop
                topThumbUrl={topThumbUrl}
                imageUrl={imageUrl}
                disableTopThumb={disableTopThumb}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            {text && (
              <Box
                className={classes.text}
                fontSize="body2"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default SingleImageAndTextBelow
